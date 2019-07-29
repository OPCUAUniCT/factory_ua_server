"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("./builder");
const signalconfig_json_1 = require("./signalconfig.json");
class SortingLineBuilder extends builder_1.SystemBuilder {
    constructor() {
        super(...arguments);
        this.get_pulse_counter = this.create_boolean_getter(signalconfig_json_1.sortingLine.pulseCounter);
        this.get_lb_inlet = this.create_boolean_getter(signalconfig_json_1.sortingLine.lightBarrierInlet);
        this.get_lb_behind = this.create_boolean_getter(signalconfig_json_1.sortingLine.lightBarrierBehind);
        this.get_motor_conveyor_belt = this.create_boolean_getter(signalconfig_json_1.sortingLine.motorConveyorBelt);
        this.get_compressor = this.create_boolean_getter(signalconfig_json_1.sortingLine.compressor);
        this.get_color_sensor = this.create_int16_getter(signalconfig_json_1.sortingLine.colorSensor);
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