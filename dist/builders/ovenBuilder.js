"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("./builder");
const signalconfig_json_1 = require("./signalconfig.json");
const node_opcua_1 = require("node-opcua");
class OvenBuilder extends builder_1.SystemBuilder {
    constructor() {
        super(...arguments);
        this.get_motor_turn_table_clockwise = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.motorTurnTableClockWise);
        this.get_motor_turn_table_counterclockwise = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.motorTurnTableCounterClockWise);
        this.get_conveyor_belt = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.conveyorBelt);
        this.get_motor_saw = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.motorSaw);
        this.get_motor_oven_retract = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.motorOvenRetract);
        this.get_motor_oven_extend = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.motorOvenExtend);
        this.get_motor_vacuum_left = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.motorVacuumLeft);
        this.get_motor_vacuum_right = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.motorVacuumRight);
        this.get_light_oven = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.lightOven);
        this.get_compressor = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.compressor);
        this.get_valve_vacuum = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.valveVacuum);
        this.get_valve_lowering = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.valveLowering);
        this.get_valve_oven_door = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.valveOvenDoor);
        this.get_valve_feeder = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.valveFeeder);
        this.get_reference_switch_tt_belt = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.referenceSwitchTurnTableBelt);
        this.get_reference_switch_tt_saw = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.referenceSwitchTurnTableSaw);
        this.get_reference_switch_tt_vacuum = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.referenceSwitchTurnTableVacuum);
        this.get_reference_switch_vacuum_left = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.referenceSwitchVacuumLeft);
        this.get_reference_switch_vacuum_right = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.referenceSwitchVacuumRight);
        this.get_reference_switch_oven_in = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.referenceSwitchOvenIn);
        this.get_reference_switch_oven_out = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.referenceSwitchOvenOut);
        this.get_light_barrier_oven = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.lightBarrierOven);
        this.get_light_barrier_conveyor = this.create_refreshFunc(node_opcua_1.DataType.Boolean, signalconfig_json_1.oven.lightBarrierConveyor);
    }
    build() {
        let oven = this.nameSpace.addObject({
            browseName: "Oven",
        });
        this.nameSpace.addVariable({
            browseName: "Motor Turn Table Clockwise",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_turn_table_clockwise
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Turn Table CounterClockwise",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_turn_table_counterclockwise
            }
        });
        this.nameSpace.addVariable({
            browseName: "Conveyor Belt",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_conveyor_belt
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Saw",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_saw
            }
        });
        this.nameSpace.addVariable({
            browseName: "Compressor",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_compressor
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Oven Retract",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_oven_retract
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Oven Extend",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_oven_extend
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Vacuum Left",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_vacuum_left
            }
        });
        this.nameSpace.addVariable({
            browseName: "Motor Vacuum Right",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_vacuum_right
            }
        });
        this.nameSpace.addVariable({
            browseName: "Light Oven",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_light_oven
            }
        });
        this.nameSpace.addVariable({
            browseName: "Valve Vacuum",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_valve_vacuum
            }
        });
        this.nameSpace.addVariable({
            browseName: "Valve Lowering",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_valve_lowering
            }
        });
        this.nameSpace.addVariable({
            browseName: "Valve Oven Door",
            propertyOf: oven,
            dataType: "Int16",
            value: {
                refreshFunc: this.get_valve_oven_door
            }
        });
        this.nameSpace.addVariable({
            browseName: "Valve Feeder",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_valve_feeder
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch TT Belt",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_reference_switch_tt_belt
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch TT Saw",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_reference_switch_tt_saw
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch TT Vacuum",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_reference_switch_tt_vacuum
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Vacuum Left",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_reference_switch_vacuum_left
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Vacuum Right",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_reference_switch_vacuum_right
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Oven In",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_reference_switch_oven_in
            }
        });
        this.nameSpace.addVariable({
            browseName: "Reference Switch Oven Out",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_reference_switch_oven_out
            }
        });
        this.nameSpace.addVariable({
            browseName: "Light Barrier Oven",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_light_barrier_oven
            }
        });
        this.nameSpace.addVariable({
            browseName: "Light Barrier Conveyor",
            propertyOf: oven,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_light_barrier_conveyor
            }
        });
        return oven;
    }
}
exports.OvenBuilder = OvenBuilder;
//# sourceMappingURL=ovenBuilder.js.map