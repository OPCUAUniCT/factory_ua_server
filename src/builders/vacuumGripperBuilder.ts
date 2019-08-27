import { SystemBuilder } from "./builder";

import { vacuumGripper } from "./signalconfig.json";
import { DataType, UAObject } from "node-opcua";


export class VacuumGripperBuilder extends SystemBuilder{

    build(): UAObject{
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

    private get_ref_switch_vertical_axis = this.create_getter(DataType.Boolean, vacuumGripper.referenceSwitchVerticalAxis);    
    private get_ref_switch_horizontal_axis = this.create_getter(DataType.Boolean, vacuumGripper.referenceSwitchHorizontalAxis);    
    private get_ref_switch__rotate = this.create_getter(DataType.Boolean, vacuumGripper.referenceSwitchRotate);    
    private get_encoder_vertical_axis_impulse_1 = this.create_getter(DataType.Boolean, vacuumGripper.encoderVerticalAxisImpulse1);    
    private get_encoder_horizontal_axis_impulse_1 = this.create_getter(DataType.Boolean, vacuumGripper.encoderHorizontalAxisImpulse1);    
    private get_encoder_rotate_impulse_1 = this.create_getter(DataType.Boolean, vacuumGripper.encoderRotateImpulse1);    
    private get_motor_vertical_axis_up = this.create_getter(DataType.Boolean, vacuumGripper.motorVerticalAxisUp);    
    private get_motor_vertical_axis_down = this.create_getter(DataType.Boolean, vacuumGripper.motorVerticalAxisDown);    
    private get_motor_horizontal_axis_backward = this.create_getter(DataType.Boolean, vacuumGripper.motorHorizontalAxisBackward);    
    private get_motor_horizontal_axis_forward = this.create_getter(DataType.Boolean, vacuumGripper.motorHorizontalAxisForward);    
    private get_motor_rotate_clockwise = this.create_getter(DataType.Boolean, vacuumGripper.motorRotateClockwise);    
    private get_motor_rotate_counter_clockwise = this.create_getter(DataType.Boolean, vacuumGripper.motorRotateCounterClockwise);    
    private get_compressor = this.create_getter(DataType.Boolean, vacuumGripper.compressor);    
    private get_valve_vacuum = this.create_getter(DataType.Boolean, vacuumGripper.valveVacuum);    
    






}