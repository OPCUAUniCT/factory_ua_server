"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("./builder");
const signalconfig_json_1 = require("./signalconfig.json");
const node_opcua_1 = require("node-opcua");
class WarehouseBuilder extends builder_1.SystemBuilder {
    constructor() {
        super(...arguments);
        this.get_ref_switch_vertical_axis = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.referenceSwitchVerticalAxis);
        this.get_ref_switch_horizontal_axis = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.referenceSwitchHorizontalAxis);
        this.get_ref_switch_cantilever_front = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.referenceSwitchCantileverFront);
        this.get_ref_switch_cantilever_back = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.referenceSwitchCantileverBack);
        this.get_encoder_vertical_axis_impulse_1 = this.create_getter(node_opcua_1.DataType.Int32, signalconfig_json_1.warehouse.encoderVerticalAxisImpulse1);
        this.get_encoder_horizontal_axis_impulse_1 = this.create_getter(node_opcua_1.DataType.Int32, signalconfig_json_1.warehouse.encoderHorizontalAxisImpulse1);
        this.get_lb_inside = this.create_getter(node_opcua_1.DataType.Int32, signalconfig_json_1.warehouse.lightBarrierIinside);
        this.get_lb_outside = this.create_getter(node_opcua_1.DataType.Int32, signalconfig_json_1.warehouse.lightBarrierOutside);
        this.get_motor_vertical_axis_up = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.motorVerticalAxisUp);
        this.get_motor_vertical_axis_down = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.motorVerticalAxisDown);
        this.get_motor_cantilever_forward = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.motorCantileverForward);
        this.get_motor_cantilever_backward = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.motorCantileverBackward);
        this.get_motor_cb_forward = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.motorConveyorBeltForward);
        this.get_motor_cb_backward = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.motorConveyorBeltBackward);
        this.get_motor_towards_rack = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.motorHorizontalToRack);
        this.get_motor_towards_conveyor = this.create_getter(node_opcua_1.DataType.Boolean, signalconfig_json_1.warehouse.motorHorizontalToConveyor);
        this.get_trail_sensor_1 = this.create_getter(node_opcua_1.DataType.Int32, signalconfig_json_1.warehouse.trailSensor1);
        this.get_trail_sensor_2 = this.create_getter(node_opcua_1.DataType.Int32, signalconfig_json_1.warehouse.trailSensor2);
    }
    build() {
        let warehouse = this.nameSpace.addObject({
            browseName: "Warehouse",
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Vertical Axis",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                get: this.get_ref_switch_vertical_axis
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Horizontal Axis",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                get: this.get_ref_switch_horizontal_axis
            }
        });
        this.nameSpace.addVariable({
            browseName: "Light Barrier Inside",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                get: this.get_lb_inside
            }
        });
        this.nameSpace.addVariable({
            browseName: "Light Barrier Outside",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                get: this.get_lb_outside
            }
        });
        this.nameSpace.addVariable({
            browseName: "Encoder Vertical Axis Impulse 1",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                get: this.get_encoder_vertical_axis_impulse_1
            }
        });
        this.nameSpace.addVariable({
            browseName: "Encoder Horizontal Axis Impulse 1",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                get: this.get_encoder_horizontal_axis_impulse_1
            }
        });
        this.nameSpace.addVariable({
            browseName: "Trail Sensor 1",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                get: this.get_trail_sensor_1
            }
        });
        this.nameSpace.addVariable({
            browseName: "Trail Sensor 2",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                get: this.get_trail_sensor_2
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Vertical Axis Up",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                get: this.get_motor_vertical_axis_up
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Vertical Axis Down",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                get: this.get_motor_vertical_axis_down
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Horizontal Towards Rack",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                get: this.get_motor_towards_rack
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Horizontal Towards Conveyor Belt",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                get: this.get_motor_towards_conveyor
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Cantilever Forward",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                get: this.get_motor_cantilever_forward
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Cantilever Backward",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                get: this.get_motor_cantilever_backward
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Conveyor Belt Forward",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                get: this.get_motor_cb_forward
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Conveyor Belt Backward",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                get: this.get_motor_cb_backward
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Cantilever Front",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                get: this.get_ref_switch_cantilever_front
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Cantilever Front",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                get: this.get_ref_switch_cantilever_front
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Cantilever Back",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                get: this.get_ref_switch_cantilever_back
            }
        });
        return warehouse;
    }
}
exports.WarehouseBuilder = WarehouseBuilder;
//# sourceMappingURL=warehouseBuilder.js.map