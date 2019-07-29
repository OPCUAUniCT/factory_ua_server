"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("./builder");
const node_opcua_1 = require("node-opcua");
const signalconfig_json_1 = require("./signalconfig.json");
class SortingLineBuilder extends builder_1.SystemBuilder {
    constructor() {
        super(...arguments);
        this.get_pulse_counter = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.sortingLine.pulseCounter);
        this.get_lb_inlet = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.sortingLine.lightBarrierInlet);
        this.get_lb_behind = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.sortingLine.lightBarrierBehind);
        this.get_motor_conveyor_belt = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.sortingLine.motorConveyorBelt);
        this.get_compressor = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.sortingLine.compressor);
        this.get_valve_ejector1 = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.sortingLine.valveEjector1);
        this.get_valve_ejector2 = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.sortingLine.valveEjector2);
        this.get_valve_ejector3 = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.sortingLine.valveEjector3);
        this.get_counter = this.create_getter(node_opcua_1.DataType.Int16, signalconfig_json_1.sortingLine.counter);
        this.get_lb_white = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.sortingLine.lightBarrierWhite);
        this.get_lb_red = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.sortingLine.lightBarrierRed);
        this.get_lb_blue = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.sortingLine.lightBarrierBlue);
        this.get_color_sensor = this.create_getter(node_opcua_1.DataType.Int16, signalconfig_json_1.sortingLine.colorSensor);
    }
    build() {
        let sortingline = this.nameSpace.addObject({
            browseName: "Sorting Line",
            organizedBy: this.addressSpace.rootFolder.objects
        });
        this.nameSpace.addVariable({
            browseName: "Pulse Counter",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                get: this.get_pulse_counter
            }
        });
        this.nameSpace.addVariable({
            browseName: "Light Barrier Inlet",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                get: this.get_lb_inlet
            }
        });
        this.nameSpace.addVariable({
            browseName: "Light Barrier Behind",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                get: this.get_lb_behind
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Conveyor Belt",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                get: this.get_motor_conveyor_belt
            }
        });
        this.nameSpace.addVariable({
            browseName: "Compressor",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                get: this.get_compressor
            }
        });
        this.nameSpace.addVariable({
            browseName: "Valve Ejector 1",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                get: this.get_valve_ejector1
            }
        });
        this.nameSpace.addVariable({
            browseName: "Valve Ejector 2",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                get: this.get_valve_ejector2
            }
        });
        this.nameSpace.addVariable({
            browseName: "Valve Ejector 3",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                get: this.get_valve_ejector3
            }
        });
        this.nameSpace.addVariable({
            browseName: "Conuter",
            propertyOf: sortingline,
            dataType: "Int16",
            value: {
                get: this.get_counter
            }
        });
        this.nameSpace.addVariable({
            browseName: "Light Barrier White",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                get: this.get_lb_white
            }
        });
        this.nameSpace.addVariable({
            browseName: "Light Barrier Red",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                get: this.get_lb_red
            }
        });
        this.nameSpace.addVariable({
            browseName: "Light Barrier Blue",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                get: this.get_lb_blue
            }
        });
        this.nameSpace.addVariable({
            browseName: "Color Sensor",
            propertyOf: sortingline,
            dataType: "Int16",
            value: {
                get: this.get_color_sensor
            }
        });
    }
}
exports.SortingLineBuilder = SortingLineBuilder;
//# sourceMappingURL=sortingLineBuilder.js.map