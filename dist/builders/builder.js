"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_opcua_1 = require("node-opcua");
class SystemBuilder {
    constructor(s7client, addressSpace, nameSpace, deviceName = "GenericDevice") {
        this.s7client = s7client;
        this.addressSpace = addressSpace;
        this.nameSpace = nameSpace;
        this.deviceName = deviceName;
        this.fallback_reconnect(5000);
    }
    create_getter(dataType, config) {
        return () => {
            const { area, dbNumber, start, amount, wordLen } = config;
            let val = this.s7client.ReadArea(area, dbNumber, start, amount, wordLen);
            if (typeof val === "boolean") {
                return node_opcua_1.StatusCodes.BadNotReadable;
            }
            let value;
            switch (dataType) {
                case node_opcua_1.DataType.Boolean:
                    value = val[0] !== 0;
                    break;
                case node_opcua_1.DataType.Int16:
                    value = val.readInt16BE(0);
                    break;
                case node_opcua_1.DataType.Int32:
                    value = val.readInt32BE(0);
                    break;
                default:
                    throw new Error("DataType not supported");
            }
            return new node_opcua_1.Variant({ dataType, value });
        };
    }
    fallback_reconnect(interval) {
        var cycle = 0;
        var delay = interval;
        let _backoff_connect = () => {
            this.s7client.PlcStatus((err, _) => {
                if (err) {
                    console.log(' >> PLC Status error. Code #' + err + ' - ' + this.s7client.ErrorText(err));
                    console.log(` >> trying to reconnect ${this.deviceName}...`);
                    this.s7client.Connect((err) => {
                        if (err) {
                            if (cycle !== 5) {
                                delay = interval + (Math.pow(2, cycle)) * 1000;
                                cycle++;
                            }
                            return console.log(' >> Connection error. Code #' + err + ' - ' + this.s7client.ErrorText(err));
                        }
                        cycle = 0;
                        delay = interval;
                        console.log(' >> connection recovered.');
                    });
                }
                console.log(`NEXT CHECK for ${this.deviceName} in ${delay} ms...`);
                setTimeout(_backoff_connect, delay);
            });
        };
        setTimeout(_backoff_connect, delay);
    }
}
exports.SystemBuilder = SystemBuilder;
var sortingLineBuilder_1 = require("./sortingLineBuilder");
exports.SortingLineBuilder = sortingLineBuilder_1.SortingLineBuilder;
var ovenBuilder_1 = require("./ovenBuilder");
exports.OvenBuilder = ovenBuilder_1.OvenBuilder;
var vacuumGripperBuilder_1 = require("./vacuumGripperBuilder");
exports.VacuumGripperBuilder = vacuumGripperBuilder_1.VacuumGripperBuilder;
var warehouseBuilder_1 = require("./warehouseBuilder");
exports.WarehouseBuilder = warehouseBuilder_1.WarehouseBuilder;
//# sourceMappingURL=builder.js.map