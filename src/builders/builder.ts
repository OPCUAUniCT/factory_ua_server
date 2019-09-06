import { AddressSpace, Namespace, Variant, StatusCodes, DataType, UAObject, DataValueCallback, DataValue, StatusCode } from "node-opcua";
import { S7Client } from "node-snap7";


export abstract class SystemBuilder {

    constructor(protected s7client: S7Client, protected addressSpace: AddressSpace, protected nameSpace: Namespace, public deviceName: string = "GenericDevice") {
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

    create_timestamped_get(dataType: DataType, config: SignalConfigArgument): (callback: DataValueCallback) => void {
        let lastDataValue: DataValue;

        let _value_polling = () => {
            const { area, dbNumber, start, amount, wordLen } = config;
            
            this.s7client.ReadArea(area, dbNumber, start, amount, wordLen, (err, val) => {
                if(err != null) {
                    
                    return lastDataValue = new DataValue({ statusCode: StatusCodes.BadNotReadable });
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

                let dataValue = new DataValue({
                    value: new Variant({ dataType: dataType, value: value }),
                    statusCode: StatusCodes.Good,
                    sourceTimestamp: new Date()
                });

                if (lastDataValue == null) lastDataValue = dataValue;
                else if (lastDataValue.value.value !== dataValue.value.value) lastDataValue = dataValue;

            });
        }

        setInterval(_value_polling, 150);


        return (callback: DataValueCallback):void => {
            callback(null, lastDataValue);            
        }
    }

    create_refreshFunc(dataType: DataType, config: SignalConfigArgument): (callback: DataValueCallback) => void {
        let lastDataValue: DataValue;
        return (callback: DataValueCallback):void => {
            const { area, dbNumber, start, amount, wordLen } = config;
            
            this.s7client.ReadArea(area, dbNumber, start, amount, wordLen, (err, val) => {
                if(err != null) {
                    return callback(null, StatusCodes.BadNotReadable);
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

                let dataValue = new DataValue({
                    value: new Variant({ dataType: dataType, value: value }),
                    statusCode: StatusCodes.Good,
                    sourceTimestamp: new Date()
                });

                if (lastDataValue == null) lastDataValue = dataValue;
                else if (lastDataValue.value.value !== dataValue.value.value) lastDataValue = dataValue;

                callback(null, lastDataValue);

            });

            
        }
    }

    private fallback_reconnect(interval: number) {
        var cycle = 0
        var delay = interval;
        let _backoff_connect = () => {
            this.s7client.PlcStatus((err, _) => {
                if(err) {
                    //console.log(' >> PLC Status error. Code #' + err + ' - ' + this.s7client.ErrorText(err));
                    console.log(` >> Connection error for ${this.deviceName}. Trying to reconnect ${this.deviceName}...`);
                    this.s7client.Connect((err) => {
                        if(err) {
                            if (cycle !== 5){ 
                                delay = interval + (Math.pow(2, cycle))*1000;
                                cycle++; 
                            }
                            return;
                        }
                        cycle = 0;
                        delay = interval;
                        console.log(` >> Connection recovered for ${this.deviceName}.`);
                    });
                }
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