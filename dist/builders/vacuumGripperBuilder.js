"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("./builder");
const signalconfig_json_1 = require("./signalconfig.json");
const node_opcua_1 = require("node-opcua");
class VacuumGripperBuilder extends builder_1.SystemBuilder {
    constructor() {
        super(...arguments);
        this.get_ref_switch_vertical_axis = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.referenceSwitchVerticalAxis);
        this.get_ref_switch_horizontal_axis = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.referenceSwitchHorizontalAxis);
        this.get_ref_switch__rotate = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.referenceSwitchRotate);
        this.get_encoder_vertical_axis_impulse_1 = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.encoderVerticalAxisImpulse1);
        this.get_encoder_horizontal_axis_impulse_1 = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.encoderHorizontalAxisImpulse1);
        this.get_encoder_rotate_impulse_1 = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.encoderRotateImpulse1);
        this.get_motor_vertical_axis_up = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.motorVerticalAxisUp);
        this.get_motor_vertical_axis_down = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.motorVerticalAxisDown);
        this.get_motor_horizontal_axis_backward = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.motorHorizontalAxisBackward);
        this.get_motor_horizontal_axis_forward = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.motorHorizontalAxisForward);
        this.get_motor_rotate_clockwise = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.motorRotateClockwise);
        this.get_motor_rotate_counter_clockwise = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.motorRotateCounterClockwise);
        this.get_compressor = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.compressor);
        this.get_valve_vacuum = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.valveVacuum);
    }
    build() {
        let vacuumgripper = this.nameSpace.addObject({
            browseName: "Vacuum Gripper",
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Vertical Axis",
            propertyOf: vacuumgripper,
            dataType: "Boolean",
            value: {
                get: this.get_ref_switch_vertical_axis
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Horizontal Axis",
            propertyOf: vacuumgripper,
            dataType: "Boolean",
            value: {
                get: this.get_ref_switch_horizontal_axis
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Rotate",
            propertyOf: vacuumgripper,
            dataType: "Boolean",
            value: {
                get: this.get_ref_switch__rotate
            }
        });
        this.nameSpace.addVariable({
            browseName: "Encoder Vertical Axis Impulse 1",
            propertyOf: vacuumgripper,
            dataType: "Boolean",
            value: {
                get: this.get_encoder_vertical_axis_impulse_1
            }
        });
        this.nameSpace.addVariable({
            browseName: "Encoder Horizontal Axis Impulse 1",
            propertyOf: vacuumgripper,
            dataType: "Boolean",
            value: {
                get: this.get_encoder_horizontal_axis_impulse_1
            }
        });
        this.nameSpace.addVariable({
            browseName: "Encoder Rotate Impulse 1",
            propertyOf: vacuumgripper,
            dataType: "Boolean",
            value: {
                get: this.get_encoder_rotate_impulse_1
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Vertical Axis Up",
            propertyOf: vacuumgripper,
            dataType: "Boolean",
            value: {
                get: this.get_motor_vertical_axis_up
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Vertical Axis Down",
            propertyOf: vacuumgripper,
            dataType: "Boolean",
            value: {
                get: this.get_motor_vertical_axis_down
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Horizontal Axis BackWard",
            propertyOf: vacuumgripper,
            dataType: "Boolean",
            value: {
                get: this.get_motor_horizontal_axis_backward
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Horizontal Axis Forward",
            propertyOf: vacuumgripper,
            dataType: "Boolean",
            value: {
                get: this.get_motor_horizontal_axis_forward
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Rotate Clockwise",
            propertyOf: vacuumgripper,
            dataType: "Boolean",
            value: {
                get: this.get_motor_rotate_clockwise
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Rotate CounterClockwise",
            propertyOf: vacuumgripper,
            dataType: "Boolean",
            value: {
                get: this.get_motor_rotate_counter_clockwise
            }
        });
        this.nameSpace.addVariable({
            browseName: "Compressor",
            propertyOf: vacuumgripper,
            dataType: "Boolean",
            value: {
                get: this.get_compressor
            }
        });
        this.nameSpace.addVariable({
            browseName: "Valve Vacuum",
            propertyOf: vacuumgripper,
            dataType: "Boolean",
            value: {
                get: this.get_valve_vacuum
            }
        });
        return vacuumgripper;
    }
}
exports.VacuumGripperBuilder = VacuumGripperBuilder;
//# sourceMappingURL=vacuumGripperBuilder.js.map