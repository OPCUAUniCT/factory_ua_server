import { AddressSpace, Namespace, Variant, StatusCodes, DataType } from "node-opcua";
import { S7Client } from "node-snap7";


export abstract class SystemBuilder {

    constructor(protected s7client: S7Client, protected addressSpace: AddressSpace, protected nameSpace: Namespace) {}

    abstract build(): void;

    create_boolean_getter(config: SignalConfigArgument): () => Variant {
        return (): Variant => {
            const { area, dbNumber, start, amount, wordLen } = config;
            let val = this.s7client.ReadArea(area, dbNumber, start, amount, wordLen);

            if(typeof val === "boolean") {
                return StatusCodes.BadNotReadable;
            }
            
            return new Variant({
                dataType: DataType.Boolean, 
                value: val[0] !== 0
            });
        }
    }
    
    create_int16_getter(config: SignalConfigArgument): () => Variant {
        return (): Variant => {
            const { area, dbNumber, start, amount, wordLen } = config;
            let val = this.s7client.ReadArea(area, dbNumber, start, amount, wordLen);

            if(typeof val === "boolean") {
                return StatusCodes.BadNotReadable;
            }
            
            return new Variant({
                dataType: DataType.Int16, 
                value: val.readInt16BE(0)
            });
        }
    }
}

export { SortingLineBuilder } from "./sortingLineBuilder";

export type SignalConfigArgument = {
    area: number;
    dbNumber: number;
    start: number;
    amount: number;
    wordLen: number;
}