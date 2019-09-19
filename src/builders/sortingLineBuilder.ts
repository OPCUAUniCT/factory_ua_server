import { SystemBuilder } from "./builder";
import { Variant, DataType, StatusCode, StatusCodes, UAObject } from "node-opcua";
import { sortingLine } from "./signalconfig.json";

export class SortingLineBuilder extends SystemBuilder {    

    build(): UAObject {
        let sortingline = this.nameSpace.addObject({
            browseName: "Sorting Line",
        });
    
        this.nameSpace.addVariable({
            browseName: "Pulse Counter",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_pulse_counter
            }
        });
    
        this.nameSpace.addVariable({
            browseName: "Light Barrier Inlet",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_lb_inlet
            }
        });
    
        this.nameSpace.addVariable({
            browseName: "Light Barrier Behind",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_lb_behind
            }
        });
    
        this.nameSpace.addVariable({
            browseName: "Motor Conveyor Belt",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_motor_conveyor_belt
            }
        });

        this.nameSpace.addVariable({
            browseName: "Compressor",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_compressor
            }
        });

        this.nameSpace.addVariable({
            browseName: "Valve Ejector 1",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_valve_ejector1
            }
        });

        this.nameSpace.addVariable({
            browseName: "Valve Ejector 2",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_valve_ejector2
            }
        });

        this.nameSpace.addVariable({
            browseName: "Valve Ejector 3",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_valve_ejector3
            }
        });
        
        this.nameSpace.addVariable({
            browseName: "Conuter",
            propertyOf: sortingline,
            dataType: "Int16",
            value: {
                refreshFunc: this.get_counter
            }
        });

        this.nameSpace.addVariable({
            browseName: "Light Barrier White",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_lb_white
            }
        });

        this.nameSpace.addVariable({
            browseName: "Light Barrier Red",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                refreshFunc: this.get_lb_red
            }
        });
        
        this.nameSpace.addVariable({
            browseName: "Light Barrier Blue",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                timestamped_get: this.get_lb_blue
            }
        });
        
        this.nameSpace.addVariable({
            browseName: "Color Sensor",
            propertyOf: sortingline,
            dataType: "Int16",
            value: {
                refreshFunc: this.get_color_sensor
            }
        });

        this.nameSpace.addVariable({
            browseName: "White State",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                timestamped_get: this.get_white_state
            }
        });

        this.nameSpace.addVariable({
            browseName: "Red State",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                timestamped_get: this.get_red_state
            }
        });

        this.nameSpace.addVariable({
            browseName: "Blue State",
            propertyOf: sortingline,
            dataType: "Boolean",
            value: {
                timestamped_get: this.get_blue_state
            }
        });
        
        return sortingline;
    }

    private get_pulse_counter = this.create_refreshFunc(DataType.Boolean, sortingLine.pulseCounter);    
    private get_lb_inlet = this.create_refreshFunc(DataType.Boolean, sortingLine.lightBarrierInlet);    
    private get_lb_behind = this.create_refreshFunc(DataType.Boolean, sortingLine.lightBarrierBehind);    
    private get_motor_conveyor_belt = this.create_refreshFunc(DataType.Boolean, sortingLine.motorConveyorBelt);
    private get_compressor = this.create_refreshFunc(DataType.Boolean, sortingLine.compressor);
    private get_valve_ejector1 = this.create_refreshFunc(DataType.Boolean, sortingLine.valveEjector1);
    private get_valve_ejector2 = this.create_refreshFunc(DataType.Boolean, sortingLine.valveEjector2);
    private get_valve_ejector3 = this.create_refreshFunc(DataType.Boolean, sortingLine.valveEjector3);
    private get_counter = this.create_refreshFunc(DataType.Int16, sortingLine.counter);
    private get_lb_white = this.create_refreshFunc(DataType.Boolean, sortingLine.lightBarrierWhite);
    private get_lb_red = this.create_refreshFunc(DataType.Boolean, sortingLine.lightBarrierRed);
    private get_lb_blue = this.create_timestamped_get(DataType.Boolean, sortingLine.lightBarrierBlue);
    private get_color_sensor = this.create_refreshFunc(DataType.Int16, sortingLine.colorSensor);
    private get_white_state = this.create_timestamped_get(DataType.Boolean, sortingLine.white);
    private get_red_state = this.create_timestamped_get(DataType.Boolean, sortingLine.red);
    private get_blue_state = this.create_timestamped_get(DataType.Boolean, sortingLine.blue);

}