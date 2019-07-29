"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_opcua_1 = require("node-opcua");
class SystemBuilder {
    constructor(s7client, addressSpace, nameSpace) {
        this.s7client = s7client;
        this.addressSpace = addressSpace;
        this.nameSpace = nameSpace;
    }
    create_boolean_getter(config) {
        return () => {
            const { area, dbNumber, start, amount, wordLen } = config;
            let val = this.s7client.ReadArea(area, dbNumber, start, amount, wordLen);
            if (typeof val === "boolean") {
                return node_opcua_1.StatusCodes.BadNotReadable;
            }
            return new node_opcua_1.Variant({
                dataType: node_opcua_1.DataType.Boolean,
                value: val[0] !== 0
            });
        };
    }
    create_int16_getter(config) {
        return () => {
            const { area, dbNumber, start, amount, wordLen } = config;
            let val = this.s7client.ReadArea(area, dbNumber, start, amount, wordLen);
            if (typeof val === "boolean") {
                return node_opcua_1.StatusCodes.BadNotReadable;
            }
            return new node_opcua_1.Variant({
                dataType: node_opcua_1.DataType.Int16,
                value: val.readInt16BE(0)
            });
        };
    }
}
exports.SystemBuilder = SystemBuilder;
var sortingLineBuilder_1 = require("./sortingLineBuilder");
exports.SortingLineBuilder = sortingLineBuilder_1.SortingLineBuilder;
//# sourceMappingURL=builder.js.map