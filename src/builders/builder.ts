import { AddressSpace, Namespace, Variant, StatusCodes, DataType, UAObject } from "node-opcua";
import { S7Client } from "node-snap7";


export abstract class SystemBuilder {

    constructor(protected s7client: S7Client, protected addressSpace: AddressSpace, protected nameSpace: Namespace) {}

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
                default:
                    throw new Error("DataType not supported");
            }

            return new Variant({ dataType, value });
        }
    }
}

export { SortingLineBuilder } from "./sortingLineBuilder";
export { OvenBuilder } from "./ovenBuilder";


export type SignalConfigArgument = {
    area: number;
    dbNumber: number;
    start: number;
    amount: number;
    wordLen: number;
}