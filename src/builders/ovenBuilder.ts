import { SystemBuilder } from "./builder";
import { oven } from "./signalconfig.json";
import { DataType, UAObject } from "node-opcua";

export class OvenBuilder extends SystemBuilder {    

    build(): UAObject {
        let oven = this.nameSpace.addObject({
            browseName: "Oven",
        });
    
        this.nameSpace.addVariable({
            browseName: "Motor Turn Table Clockwise",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_motor_turn_table_clockwise
            }
        });
    
        this.nameSpace.addVariable({
            browseName: "Motor Turn Table CounterClockwise",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_motor_turn_table_counterclockwise
            }
        });
    
        this.nameSpace.addVariable({
            browseName: "Conveyor Belt",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_conveyor_belt
            }
        });
    
        this.nameSpace.addVariable({
            browseName: "Motor Saw",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_motor_saw
            }
        });

        this.nameSpace.addVariable({
            browseName: "Compressor",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_compressor
            }
        });

        this.nameSpace.addVariable({
            browseName: "Motor Oven Retract",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_motor_oven_retract
            }
        });

        this.nameSpace.addVariable({
            browseName: "Motor Oven Extend",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_motor_oven_extend
            }
        });

        this.nameSpace.addVariable({
            browseName: "Motor Vacuum Left",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_motor_vacuum_left
            }
        });
        
        this.nameSpace.addVariable({
            browseName: "Motor Vacuum Right",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_motor_vacuum_right
            }
        });

        this.nameSpace.addVariable({
            browseName: "Light Oven",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_light_oven
            }
        });

        this.nameSpace.addVariable({
            browseName: "Valve Vacuum",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_valve_vacuum
            }
        });
        
        this.nameSpace.addVariable({
            browseName: "Valve Lowering",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_valve_lowering
            }
        });
        
        this.nameSpace.addVariable({
            browseName: "Valve Oven Door",
            propertyOf: oven,
            dataType: "Int16",
            value: {
                get: this.get_valve_oven_door
            }
        });

        this.nameSpace.addVariable({
            browseName: "Valve Feeder",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_valve_feeder
            }
        });
        
        this.nameSpace.addVariable({
            browseName: "Reference Switch TT Belt",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_reference_switch_tt_belt
            }
        });

        this.nameSpace.addVariable({
            browseName: "Reference Switch TT Saw",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_reference_switch_tt_saw
            }
        });

        this.nameSpace.addVariable({
            browseName: "Reference Switch TT Vacuum",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_reference_switch_tt_vacuum
            }
        });

        this.nameSpace.addVariable({
            browseName: "Reference Switch Vacuum Left",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_reference_switch_vacuum_left
            }
        });
        
        this.nameSpace.addVariable({
            browseName: "Reference Switch Vacuum Right",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_reference_switch_vacuum_right
            }
        });

        this.nameSpace.addVariable({
            browseName: "Reference Switch Oven In",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_reference_switch_oven_in
            }
        });
       
        this.nameSpace.addVariable({
            browseName: "Reference Switch Oven Out",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_reference_switch_oven_out
            }
        });

        this.nameSpace.addVariable({
            browseName: "Light Barrier Oven",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_light_barrier_oven
            }
        });

        this.nameSpace.addVariable({
            browseName: "Light Barrier Conveyor",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                get: this.get_light_barrier_conveyor
            }
        });

        return oven;
    }

    private get_motor_turn_table_clockwise = this.create_getter(DataType.Boolean, oven.motorTurnTableClockWise);    
    private get_motor_turn_table_counterclockwise = this.create_getter(DataType.Boolean, oven.motorTurnTableCounterClockWise);    
    private get_conveyor_belt = this.create_getter(DataType.Boolean, oven.conveyorBelt);    
    private get_motor_saw = this.create_getter(DataType.Boolean, oven.motorSaw);    
    private get_motor_oven_retract = this.create_getter(DataType.Boolean, oven.motorOvenRetract);    
    private get_motor_oven_extend = this.create_getter(DataType.Boolean, oven.motorOvenExtend);    
    private get_motor_vacuum_left = this.create_getter(DataType.Boolean, oven.motorVacuumLeft);    
    private get_motor_vacuum_right = this.create_getter(DataType.Boolean, oven.motorVacuumRight);    
    private get_light_oven = this.create_getter(DataType.Boolean, oven.lightOven);    
    private get_compressor = this.create_getter(DataType.Boolean, oven.compressor);    
    private get_valve_vacuum = this.create_getter(DataType.Boolean, oven.valveVacuum);
    private get_valve_lowering = this.create_getter(DataType.Boolean, oven.valveLowering);
    private get_valve_oven_door = this.create_getter(DataType.Boolean, oven.valveOvenDoor);
    private get_valve_feeder = this.create_getter(DataType.Boolean, oven.valveFeeder);
    private get_reference_switch_tt_belt = this.create_getter(DataType.Boolean, oven.referenceSwitchTurnTableBelt);
    private get_reference_switch_tt_saw = this.create_getter(DataType.Boolean, oven.referenceSwitchTurnTableSaw);
    private get_reference_switch_tt_vacuum = this.create_getter(DataType.Boolean, oven.referenceSwitchTurnTableVacuum);
    private get_reference_switch_vacuum_left = this.create_getter(DataType.Boolean, oven.referenceSwitchVacuumLeft);
    private get_reference_switch_vacuum_right = this.create_getter(DataType.Boolean, oven.referenceSwitchVacuumRight);
    private get_reference_switch_oven_in = this.create_getter(DataType.Boolean, oven.referenceSwitchOvenIn);
    private get_reference_switch_oven_out = this.create_getter(DataType.Boolean, oven.referenceSwitchOvenOut);
    private get_light_barrier_oven = this.create_getter(DataType.Boolean, oven.lightBarrierOven);
    private get_light_barrier_conveyor = this.create_getter(DataType.Boolean, oven.lightBarrierConveyor);
}