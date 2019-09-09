import { SystemBuilder } from "./builder";

import { warehouse } from "./signalconfig.json";
import { DataType, UAObject } from "node-opcua";


export class WarehouseBuilder extends SystemBuilder{

    build(): UAObject{
        let warehouse = this.nameSpace.addObject({
            browseName: "Warehouse",
        });

        this.nameSpace.addVariable({
            browseName: "Home",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_home
            }
        });

        this.nameSpace.addVariable({
            browseName: "Reference Switch Vertical Axis",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_ref_switch_vertical_axis
            }
        });
        
        this.nameSpace.addVariable({
            browseName: "Reference Switch Horizontal Axis",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_ref_switch_horizontal_axis
            }
        });

        this.nameSpace.addVariable({
            browseName: "Light Barrier Inside",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_lb_inside
            }
        });
        this.nameSpace.addVariable({
            browseName: "Light Barrier Outside",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_lb_outside
            }
        });

        this.nameSpace.addVariable({
            browseName: "Encoder Vertical Axis Impulse 1",
            propertyOf: warehouse,
            dataType: "Int32",
            value: {
                refreshFunc: this.get_encoder_vertical_axis_impulse_1
            }
        });

        this.nameSpace.addVariable({
            browseName: "Encoder Horizontal Axis Impulse 1",
            propertyOf: warehouse,
            dataType: "Int32",
            value: {
                refreshFunc: this.get_encoder_horizontal_axis_impulse_1
            }
        });

        this.nameSpace.addVariable({
            browseName: "Trail Sensor 1",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_trail_sensor_1
            }
        });

        this.nameSpace.addVariable({
            browseName: "Trail Sensor 2",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_trail_sensor_2
            }
        });

        this.nameSpace.addVariable({
            browseName: "Motor Vertical Axis Up",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_vertical_axis_up
            }
        });

        this.nameSpace.addVariable({
            browseName: "Motor Vertical Axis Down",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_vertical_axis_down
            }
        });

        this.nameSpace.addVariable({
            browseName: "Motor Horizontal Towards Rack",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_towards_rack
            }
        });

        this.nameSpace.addVariable({
            browseName: "Motor Horizontal Towards Conveyor Belt",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_towards_conveyor
            }
        });

        this.nameSpace.addVariable({
            browseName: "Motor Cantilever Forward",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_cantilever_forward
            }
        });

        this.nameSpace.addVariable({
            browseName: "Motor Cantilever Backward",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_cantilever_backward
            }
        });

        this.nameSpace.addVariable({
            browseName: "Motor Conveyor Belt Forward",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_cb_forward
            }
        });

        this.nameSpace.addVariable({
            browseName: "Motor Conveyor Belt Backward",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_cb_backward
            }
        });

        this.nameSpace.addVariable({
            browseName: "Reference Switch Cantilever Front",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_ref_switch_cantilever_front
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Cantilever Front",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_ref_switch_cantilever_front
            }
        });

        this.nameSpace.addVariable({
            browseName: "Reference Switch Cantilever Back",
            propertyOf: warehouse,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_ref_switch_cantilever_back
            }
        });

        return warehouse;
    }

    private get_home = this.create_refreshFunc(DataType.Boolean, warehouse.home);
    private get_ref_switch_vertical_axis = this.create_refreshFunc(DataType.Boolean, warehouse.referenceSwitchVerticalAxis);    
    private get_ref_switch_horizontal_axis = this.create_refreshFunc(DataType.Boolean, warehouse.referenceSwitchHorizontalAxis);    
    private get_ref_switch_cantilever_front = this.create_refreshFunc(DataType.Boolean, warehouse.referenceSwitchCantileverFront);
    private get_ref_switch_cantilever_back = this.create_refreshFunc(DataType.Boolean, warehouse.referenceSwitchCantileverBack);    
    private get_encoder_vertical_axis_impulse_1 = this.create_refreshFunc(DataType.Int32, warehouse.encoderVerticalAxisImpulse1);    
    private get_encoder_horizontal_axis_impulse_1 = this.create_refreshFunc(DataType.Int32, warehouse.encoderHorizontalAxisImpulse1);    
    private get_lb_inside = this.create_refreshFunc(DataType.Boolean, warehouse.lightBarrierIinside);
    private get_lb_outside = this.create_refreshFunc(DataType.Boolean, warehouse.lightBarrierOutside);    
    private get_motor_vertical_axis_up = this.create_refreshFunc(DataType.Boolean, warehouse.motorVerticalAxisUp);    
    private get_motor_vertical_axis_down = this.create_refreshFunc(DataType.Boolean, warehouse.motorVerticalAxisDown);    
    private get_motor_cantilever_forward = this.create_refreshFunc(DataType.Boolean, warehouse.motorCantileverForward);    
    private get_motor_cantilever_backward = this.create_refreshFunc(DataType.Boolean, warehouse.motorCantileverBackward);    
    private get_motor_cb_forward = this.create_refreshFunc(DataType.Boolean, warehouse.motorConveyorBeltForward);    
    private get_motor_cb_backward = this.create_refreshFunc(DataType.Boolean, warehouse.motorConveyorBeltBackward);    
    private get_motor_towards_rack = this.create_refreshFunc(DataType.Boolean, warehouse.motorHorizontalToRack);    
    private get_motor_towards_conveyor = this.create_refreshFunc(DataType.Boolean, warehouse.motorHorizontalToConveyor);
    private get_trail_sensor_1 = this.create_refreshFunc(DataType.Boolean, warehouse.trailSensor1);    
    private get_trail_sensor_2 = this.create_refreshFunc(DataType.Boolean, warehouse.trailSensor2);
    






}