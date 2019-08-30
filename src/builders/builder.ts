import { AddressSpace, Namespace, Variant, StatusCodes, DataType, UAObject } from "node-opcua";
import { S7Client } from "node-snap7";


export abstract class SystemBuilder {

    constructor(protected s7client: S7Client, protected addressSpace: AddressSpace, protected nameSpace: Namespace) {
        this.fallback_reconnect(5000);
    }

    abstract build(): UAObject;

    create_getter(dataType: DataType, config: SignalConfigArgument): () => Variant {
        return (): Variant => {
            const { area, dbNumber, start, amount, wordLen } = config;
            let val = this.s7client.ReadArea(area, dbNumber, start, amount, wordLen);

            if(typeof val === "boolean") {
                return StatusCodes.BadNotReadable;
            }

            let value;

            switch (dataType) {
                case DataType.Boolean:
                    value = val[0] !== 0;
                    break;       
                case DataType.Int16:
                    value = val.readInt16BE(0);
                    break;
                case DataType.Int32:
                    value = val.readInt32BE(0);
                    break;              
                default:
                    throw new Error("DataType not supported");
            }

            return new Variant({ dataType, value });
        }
    }

    private fallback_reconnect(interval: number) {
        var cycle = 0
        var delay = interval;
        let _backoff_connect = () => {
            this.s7client.PlcStatus((err, _) => {
                if(err) {
                    console.log(' >> PLC Status error. Code #' + err + ' - ' + this.s7client.ErrorText(err));
                    console.log(' >> trying to reconnect...');
                    this.s7client.Connect((err) => {
                        if(err) {
                            if (cycle !== 5){ 
                                delay = interval + (Math.pow(2, cycle))*1000;
                                cycle++; 
                            }
                            return console.log(' >> Connection error. Code #' + err + ' - ' + this.s7client.ErrorText(err));
                        }
                        cycle = 0;
                        delay = interval;
                        console.log(' >> connection recovered.');
                    });
                }
                console.log('NEXT CHECK in ' + delay + ' ms...');
                setTimeout(_backoff_connect, delay);
            })
        }

        setTimeout(_backoff_connect, delay);
    }
}

export { SortingLineBuilder } from "./sortingLineBuilder";
export { OvenBuilder } from "./ovenBuilder";
export { VacuumGripperBuilder } from "./vacuumGripperBuilder";
export { WarehouseBuilder } from "./warehouseBuilder";



export type SignalConfigArgument = {
    area: number;
    dbNumber: number;
    start: number;
    amount: number;
    wordLen: number;
}