"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("./builder");
const signalconfig_json_1 = require("./signalconfig.json");
const node_opcua_1 = require("node-opcua");
class WarehouseBuilder extends builder_1.SystemBuilder {
    constructor() {
        super(...arguments);
        this.get_home = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.home);
        this.get_start = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.start);
        this.get_go1 = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.go1);
        this.get_go2 = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.go2);
        this.get_go3 = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.go3);
        this.get_go4 = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.go4);
        this.get_go5 = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.go5);
        this.get_go6 = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.go6);
        this.get_go7 = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.go7);
        this.get_go8 = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.go8);
        this.get_go9 = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.go9);
        this.get_ref_switch_vertical_axis = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.referenceSwitchVerticalAxis);
        this.get_ref_switch_horizontal_axis = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.referenceSwitchHorizontalAxis);
        this.get_ref_switch_cantilever_front = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.referenceSwitchCantileverFront);
        this.get_ref_switch_cantilever_back = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.referenceSwitchCantileverBack);
        this.get_encoder_vertical_axis_impulse_1 = this.create_refreshFunc(node_opcua_1.DataType.Int32, signalconfig_json_1.warehouse.encoderVerticalAxisImpulse1);
        this.get_encoder_horizontal_axis_impulse_1 = this.create_refreshFunc(node_opcua_1.DataType.Int32, signalconfig_json_1.warehouse.encoderHorizontalAxisImpulse1);
        this.get_lb_inside = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.lightBarrierIinside);
        this.get_lb_outside = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.lightBarrierOutside);
        this.get_motor_vertical_axis_up = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.motorVerticalAxisUp);
        this.get_motor_vertical_axis_down = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.motorVerticalAxisDown);
        this.get_motor_cantilever_forward = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.motorCantileverForward);
        this.get_motor_cantilever_backward = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.motorCantileverBackward);
        this.get_motor_cb_forward = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.motorConveyorBeltForward);
        this.get_motor_cb_backward = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.motorConveyorBeltBackward);
        this.get_motor_towards_rack = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.motorHorizontalToRack);
        this.get_motor_towards_conveyor = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.motorHorizontalToConveyor);
        this.get_trail_sensor_1 = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.trailSensor1);
        this.get_trail_sensor_2 = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.trailSensor2);
    }
    build() {
        let warehouseObject = this.nameSpace.addObject({
            browseName: "Warehouse",
        });
        this.nameSpace.addVariable({
            browseName: "Home",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_home
            }
        });
        this.nameSpace.addVariable({
            browseName: "Start",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_start
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Vertical Axis",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_ref_switch_vertical_axis
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Horizontal Axis",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_ref_switch_horizontal_axis
            }
        });
        this.nameSpace.addVariable({
            browseName: "Light Barrier Inside",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_lb_inside
            }
        });
        this.nameSpace.addVariable({
            browseName: "Light Barrier Outside",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_lb_outside
            }
        });
        this.nameSpace.addVariable({
            browseName: "Encoder Vertical Axis Impulse 1",
            propertyOf: warehouseObject,
            dataType: "Int32",
            value: {
                refreshFunc: this.get_encoder_vertical_axis_impulse_1
            }
        });
        this.nameSpace.addVariable({
            browseName: "Encoder Horizontal Axis Impulse 1",
            propertyOf: warehouseObject,
            dataType: "Int32",
            value: {
                refreshFunc: this.get_encoder_horizontal_axis_impulse_1
            }
        });
        this.nameSpace.addVariable({
            browseName: "Trail Sensor 1",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_trail_sensor_1
            }
        });
        this.nameSpace.addVariable({
            browseName: "Trail Sensor 2",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_trail_sensor_2
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Vertical Axis Up",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_vertical_axis_up
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Vertical Axis Down",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_vertical_axis_down
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Horizontal Towards Rack",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_towards_rack
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Horizontal Towards Conveyor Belt",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_towards_conveyor
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Cantilever Forward",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_cantilever_forward
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Cantilever Backward",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_cantilever_backward
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Conveyor Belt Forward",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_cb_forward
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Conveyor Belt Backward",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_cb_backward
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Cantilever Front",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_ref_switch_cantilever_front
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Cantilever Front",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_ref_switch_cantilever_front
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Cantilever Back",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_ref_switch_cantilever_back
            }
        });
        this.nameSpace.addVariable({
            browseName: "Go 1",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_go1
            }
        });
        this.nameSpace.addVariable({
            browseName: "Go 2",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_go2
            }
        });
        this.nameSpace.addVariable({
            browseName: "Go 3",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_go3
            }
        });
        this.nameSpace.addVariable({
            browseName: "Go 4",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_go4
            }
        });
        this.nameSpace.addVariable({
            browseName: "Go 5",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_go5
            }
        });
        this.nameSpace.addVariable({
            browseName: "Go 6",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_go6
            }
        });
        this.nameSpace.addVariable({
            browseName: "Go 7",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_go7
            }
        });
        this.nameSpace.addVariable({
            browseName: "Go 8",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_go8
            }
        });
        this.nameSpace.addVariable({
            browseName: "Go 9",
            propertyOf: warehouseObject,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_go9
            }
        });
        let startHome = this.nameSpace.addMethod(warehouseObject, {
            browseName: "Home/Start",
            description: "Start Home Cycle",
            inputArguments: [],
            outputArguments: []
        });
        let stopHome = this.nameSpace.addMethod(warehouseObject, {
            browseName: "Home/Stop",
            description: "Stop Home Cycle",
            inputArguments: [],
            outputArguments: []
        });
        let stopStart = this.nameSpace.addMethod(warehouseObject, {
            browseName: "Start/Stop",
            description: "Stop Start Cycle",
            inputArguments: [],
            outputArguments: []
        });
        let enableStart = this.nameSpace.addMethod(warehouseObject, {
            browseName: "Start/Enable",
            description: "Enable Start Cycle",
            inputArguments: [],
            outputArguments: []
        });
        let enableGo = this.nameSpace.addMethod(warehouseObject, {
            browseName: "Go",
            description: "Take a piece",
            inputArguments: [{
                    name: "EnableMethod",
                    dataType: 12,
                    description: "EnableMethod",
                    valueRank: -1,
                    arrayDimensions: null
                }],
            outputArguments: []
        });
        //set home false
        stopHome.bindMethod((inputArgs, context, callback) => {
            this.s7client.WriteArea(signalconfig_json_1.warehouse.home.area, signalconfig_json_1.warehouse.home.dbNumber, signalconfig_json_1.warehouse.home.start, signalconfig_json_1.warehouse.home.amount, signalconfig_json_1.warehouse.home.wordLen, Buffer.alloc(1, 1), (err) => {
                let callMethodResult;
                if (err) {
                    console.log("Method Home/Stop" + err + " - " + this.s7client.ErrorText(err));
                    callMethodResult = {
                        statusCode: node_opcua_1.StatusCodes.BadInternalError,
                    };
                    return callback(err, callMethodResult);
                }
                callMethodResult = {
                    statusCode: node_opcua_1.StatusCodes.Good,
                };
                console.log("Method Home/Stop Executed");
                return callback(null, callMethodResult);
            });
        });
        //set home true
        startHome.bindMethod((inputArgs, context, callback) => {
            this.s7client.WriteArea(signalconfig_json_1.warehouse.home.area, signalconfig_json_1.warehouse.home.dbNumber, signalconfig_json_1.warehouse.home.start, signalconfig_json_1.warehouse.home.amount, signalconfig_json_1.warehouse.home.wordLen, Buffer.alloc(1, 0), (err) => {
                let callMethodResult;
                if (err) {
                    console.log("Method Home/Start" + err + " - " + this.s7client.ErrorText(err));
                    callMethodResult = {
                        statusCode: node_opcua_1.StatusCodes.BadInternalError,
                    };
                    return callback(err, callMethodResult);
                }
                callMethodResult = {
                    statusCode: node_opcua_1.StatusCodes.Good,
                };
                console.log("Method Home/Stop Executed");
                return callback(null, callMethodResult);
            });
        });
        //set start false
        stopStart.bindMethod((inputArgs, context, callback) => {
            this.s7client.WriteArea(signalconfig_json_1.warehouse.start.area, signalconfig_json_1.warehouse.start.dbNumber, signalconfig_json_1.warehouse.start.start, signalconfig_json_1.warehouse.start.amount, signalconfig_json_1.warehouse.start.wordLen, Buffer.alloc(1, 0), (err) => {
                let callMethodResult;
                if (err) {
                    console.log("Method Start/Stop" + err + " - " + this.s7client.ErrorText(err));
                    callMethodResult = {
                        statusCode: node_opcua_1.StatusCodes.BadInternalError,
                    };
                    return callback(err, callMethodResult);
                }
                callMethodResult = {
                    statusCode: node_opcua_1.StatusCodes.Good,
                };
                console.log("Method Start/Stop Executed");
                return callback(null, callMethodResult);
            });
        });
        //set start true
        enableStart.bindMethod((inputArgs, context, callback) => {
            this.s7client.WriteArea(signalconfig_json_1.warehouse.start.area, signalconfig_json_1.warehouse.start.dbNumber, signalconfig_json_1.warehouse.start.start, signalconfig_json_1.warehouse.start.amount, signalconfig_json_1.warehouse.start.wordLen, Buffer.alloc(1, 1), (err) => {
                let callMethodResult;
                if (err) {
                    console.log("Method Enable start" + err + " - " + this.s7client.ErrorText(err));
                    callMethodResult = {
                        statusCode: node_opcua_1.StatusCodes.BadInternalError,
                    };
                    return callback(err, callMethodResult);
                }
                callMethodResult = {
                    statusCode: node_opcua_1.StatusCodes.Good,
                };
                console.log("Method Enable Start Executed");
                return callback(null, callMethodResult);
            });
        });
        //set go position
        enableGo.bindMethod((inputArgs, context, callback) => {
            let inputValue;
            let selected = signalconfig_json_1.warehouse.go1;
            for (let arg of inputArgs.values()) {
                inputValue = arg.value;
                console.log("InputArgs Value :" + arg.value);
                console.log("InputValue :" + inputValue);
            }
            switch (inputValue) {
                case "0x0":
                    selected = signalconfig_json_1.warehouse.go1;
                    break;
                case "0x1":
                    selected = signalconfig_json_1.warehouse.go2;
                    break;
                case "0x2":
                    selected = signalconfig_json_1.warehouse.go3;
                    break;
                case "1x0":
                    selected = signalconfig_json_1.warehouse.go4;
                    break;
                case "1x1":
                    selected = signalconfig_json_1.warehouse.go5;
                    break;
                case "1x2":
                    selected = signalconfig_json_1.warehouse.go6;
                    break;
                case "2x0":
                    selected = signalconfig_json_1.warehouse.go7;
                    break;
                case "2x1":
                    selected = signalconfig_json_1.warehouse.go8;
                    break;
                case "2x2":
                    selected = signalconfig_json_1.warehouse.go9;
                    break;
            }
            let callMethodResult;
            console.log("Selected :" + selected.start);
            this.s7client.ReadArea(signalconfig_json_1.warehouse.go1.area, signalconfig_json_1.warehouse.go1.dbNumber, 12, 2, 2, (err, res) => {
                if (err) {
                    callMethodResult = {
                        statusCode: node_opcua_1.StatusCodes.BadInternalError,
                    };
                    return callback(err, callMethodResult);
                }
                // reset all interested bits
                setBit(res, signalconfig_json_1.warehouse.go1.byte, signalconfig_json_1.warehouse.go1.bit, 0);
                setBit(res, signalconfig_json_1.warehouse.go2.byte, signalconfig_json_1.warehouse.go2.bit, 0);
                setBit(res, signalconfig_json_1.warehouse.go3.byte, signalconfig_json_1.warehouse.go3.bit, 0);
                setBit(res, signalconfig_json_1.warehouse.go4.byte, signalconfig_json_1.warehouse.go4.bit, 0);
                setBit(res, signalconfig_json_1.warehouse.go5.byte, signalconfig_json_1.warehouse.go5.bit, 0);
                setBit(res, signalconfig_json_1.warehouse.go6.byte, signalconfig_json_1.warehouse.go6.bit, 0);
                setBit(res, signalconfig_json_1.warehouse.go7.byte, signalconfig_json_1.warehouse.go7.bit, 0);
                setBit(res, signalconfig_json_1.warehouse.go8.byte, signalconfig_json_1.warehouse.go8.bit, 0);
                setBit(res, signalconfig_json_1.warehouse.go9.byte, signalconfig_json_1.warehouse.go9.bit, 0);
                //Set the selected bit
                setBit(res, selected.byte, selected.bit, 1);
                this.s7client.WriteArea(signalconfig_json_1.warehouse.go1.area, signalconfig_json_1.warehouse.go1.dbNumber, 12, 2, 2, res, function (err) {
                    if (err) {
                        callMethodResult = {
                            statusCode: node_opcua_1.StatusCodes.BadInternalError,
                        };
                        return callback(err, callMethodResult);
                    }
                    callMethodResult = {
                        statusCode: node_opcua_1.StatusCodes.Good,
                    };
                    return callback(null, callMethodResult);
                });
            });
            function setBit(buffer, i, bit, value) {
                if (value == 0) {
                    buffer[i] &= ~(1 << bit);
                }
                else {
                    buffer[i] |= (1 << bit);
                }
            }
        });
        return warehouseObject;
    }
}
exports.WarehouseBuilder = WarehouseBuilder;
//# sourceMappingURL=warehouseBuilder.js.map