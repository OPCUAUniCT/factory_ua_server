"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("./builder");
const signalconfig_json_1 = require("./signalconfig.json");
const node_opcua_1 = require("node-opcua");
class VacuumGripperBuilder extends builder_1.SystemBuilder {
    constructor() {
        super(...arguments);
        this.get_ref_switch_vertical_axis = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.referenceSwitchVerticalAxis);
        this.get_ref_switch_horizontal_axis = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.referenceSwitchHorizontalAxis);
        this.get_ref_switch__rotate = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.referenceSwitchRotate);
        this.get_encoder_vertical_axis_impulse_1 = this.create_refreshFunc(node_opcua_1.DataType.Int32, signalconfig_json_1.vacuumGripper.encoderVerticalAxisImpulse1);
        this.get_encoder_horizontal_axis_impulse_1 = this.create_refreshFunc(node_opcua_1.DataType.Int32, signalconfig_json_1.vacuumGripper.encoderHorizontalAxisImpulse1);
        this.get_encoder_rotate_impulse_1 = this.create_refreshFunc(node_opcua_1.DataType.Int32, signalconfig_json_1.vacuumGripper.encoderRotateImpulse1);
        this.get_motor_vertical_axis_up = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.motorVerticalAxisUp);
        this.get_motor_vertical_axis_down = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.motorVerticalAxisDown);
        this.get_motor_horizontal_axis_backward = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.motorHorizontalAxisBackward);
        this.get_motor_horizontal_axis_forward = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.motorHorizontalAxisForward);
        this.get_motor_rotate_clockwise = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.motorRotateClockwise);
        this.get_motor_rotate_counter_clockwise = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.motorRotateCounterClockwise);
        this.get_compressor = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.compressor);
        this.get_valve_vacuum = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.vacuumGripper.valveVacuum);
    }
    build() {
        let vacuumGripperObject = this.nameSpace.addObject({
            browseName: "Vacuum Gripper",
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Vertical Axis",
            propertyOf: vacuumGripperObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_ref_switch_vertical_axis
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Horizontal Axis",
            propertyOf: vacuumGripperObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_ref_switch_horizontal_axis
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Rotate",
            propertyOf: vacuumGripperObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_ref_switch__rotate
            }
        });
        this.nameSpace.addVariable({
            browseName: "Encoder Vertical Axis Impulse 1",
            propertyOf: vacuumGripperObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_encoder_vertical_axis_impulse_1
            }
        });
        this.nameSpace.addVariable({
            browseName: "Encoder Horizontal Axis Impulse 1",
            propertyOf: vacuumGripperObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_encoder_horizontal_axis_impulse_1
            }
        });
        this.nameSpace.addVariable({
            browseName: "Encoder Rotate Impulse 1",
            propertyOf: vacuumGripperObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_encoder_rotate_impulse_1
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Vertical Axis Up",
            propertyOf: vacuumGripperObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_vertical_axis_up
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Vertical Axis Down",
            propertyOf: vacuumGripperObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_vertical_axis_down
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Horizontal Axis BackWard",
            propertyOf: vacuumGripperObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_horizontal_axis_backward
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Horizontal Axis Forward",
            propertyOf: vacuumGripperObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_horizontal_axis_forward
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Rotate Clockwise",
            propertyOf: vacuumGripperObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_rotate_clockwise
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Rotate CounterClockwise",
            propertyOf: vacuumGripperObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_rotate_counter_clockwise
            }
        });
        this.nameSpace.addVariable({
            browseName: "Compressor",
            propertyOf: vacuumGripperObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_compressor
            }
        });
        this.nameSpace.addVariable({
            browseName: "Valve Vacuum",
            propertyOf: vacuumGripperObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_valve_vacuum
            }
        });
        let startMethod = this.nameSpace.addMethod(vacuumGripperObject, {
            browseName: "Start",
            description: "Start Vacuum Gripper cycle",
            inputArguments: [],
            outputArguments: []
        });
        startMethod.bindMethod((inputArgs, context, callback) => {
            this.s7client.WriteArea(signalconfig_json_1.vacuumGripper.start.area, signalconfig_json_1.vacuumGripper.start.dbNumber, signalconfig_json_1.vacuumGripper.start.start, signalconfig_json_1.vacuumGripper.start.amount, signalconfig_json_1.vacuumGripper.start.wordLen, Buffer.alloc(1, 1), (err) => {
                let callMethodResult;
                if (err) {
                    console.log("Method Start Error" + err + " - " + this.s7client.ErrorText(err));
                    callMethodResult = {
                        statusCode: node_opcua_1.StatusCodes.BadInternalError,
                    };
                    return callback(err, callMethodResult);
                }
                callMethodResult = {
                    statusCode: node_opcua_1.StatusCodes.Good,
                };
                console.log("Method Start Executed");
                return callback(null, callMethodResult);
            });
        });
        let stopMethod = this.nameSpace.addMethod(vacuumGripperObject, {
            browseName: "Stop",
            description: "Stop Vacuum Gripper cycle",
            inputArguments: [],
            outputArguments: []
        });
        stopMethod.bindMethod((inputArgs, context, callback) => {
            this.s7client.WriteArea(signalconfig_json_1.vacuumGripper.start.area, signalconfig_json_1.vacuumGripper.start.dbNumber, signalconfig_json_1.vacuumGripper.start.start, signalconfig_json_1.vacuumGripper.start.amount, signalconfig_json_1.vacuumGripper.start.wordLen, Buffer.alloc(1, 0), (err) => {
                let callMethodResult;
                if (err) {
                    console.log("Method Stop Error" + err + " - " + this.s7client.ErrorText(err));
                    callMethodResult = {
                        statusCode: node_opcua_1.StatusCodes.BadInternalError,
                    };
                    return callback(err, callMethodResult);
                }
                callMethodResult = {
                    statusCode: node_opcua_1.StatusCodes.Good,
                };
                console.log("Method Stop Executed");
                return callback(null, callMethodResult);
            });
        });
        return vacuumGripperObject;
    }
}
exports.VacuumGripperBuilder = VacuumGripperBuilder;
//# sourceMappingURL=vacuumGripperBuilder.js.map