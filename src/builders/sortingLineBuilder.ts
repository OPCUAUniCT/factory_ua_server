import { SystemBuilder } from "./builder";
import { Variant, DataType, StatusCode, StatusCodes } from "node-opcua";
import { sortingLine } from "./signalconfig.json";

export class SortingLineBuilder extends SystemBuilder {    

    build(): void {
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

    private get_pulse_counter = this.create_boolean_getter(sortingLine.pulseCounter);
    
    private get_lb_inlet = this.create_boolean_getter(sortingLine.lightBarrierInlet);
    
    private get_lb_behind = this.create_boolean_getter(sortingLine.lightBarrierBehind);
    
    private get_motor_conveyor_belt = this.create_boolean_getter(sortingLine.motorConveyorBelt);

    private get_compressor = this.create_boolean_getter(sortingLine.compressor);

    private get_color_sensor = this.create_int16_getter(sortingLine.colorSensor);
}