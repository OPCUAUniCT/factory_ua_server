import { SystemBuilder } from "./builder";

import { warehouse } from "./signalconfig.json";
import { DataType, UAObject, StatusCodes, OPCUABaseServer, Property } from "node-opcua";
import { buffer_ellipsis } from "node-opcua-utils";


export class WarehouseBuilder extends SystemBuilder{

    build(): UAObject{
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

        let startHome = this.nameSpace.addMethod(warehouseObject,{
            browseName: "Home/Start",
            description: "Start Home Cycle",
            inputArguments: [],
            outputArguments: []
        });

        let stopHome = this.nameSpace.addMethod(warehouseObject,{
            browseName: "Home/Stop",
            description: "Stop Home Cycle",
            inputArguments: [],
            outputArguments: []
        });

        let stopStart = this.nameSpace.addMethod(warehouseObject,{
            browseName: "Start/Stop",
            description: "Stop Start Cycle",
            inputArguments: [],
            outputArguments: []
        });

        let enableStart = this.nameSpace.addMethod(warehouseObject,{
            browseName: "Start/Enable",
            description: "Enable Start Cycle",
            inputArguments: [],
            outputArguments: []
        });

        let enableGo = this.nameSpace.addMethod(warehouseObject,{
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
            this.s7client.WriteArea(warehouse.home.area,warehouse.home.dbNumber,warehouse.home.start,
                warehouse.home.amount, warehouse.home.wordLen, Buffer.alloc(1,1), (err) => {
                let callMethodResult;
                if(err){
                    console.log("Method Home/Stop"+ err+" - "+ this.s7client.ErrorText(err));
                    callMethodResult = {
                        statusCode: StatusCodes.BadInternalError,
                    };
                    return callback(err, callMethodResult);
                }
                callMethodResult = {
                    statusCode: StatusCodes.Good,
                };
                console.log("Method Home/Stop Executed")
                return callback(null, callMethodResult);
            });
        });
        //set home true
        startHome.bindMethod((inputArgs, context, callback) => {
            this.s7client.WriteArea(warehouse.home.area,warehouse.home.dbNumber,warehouse.home.start,
                warehouse.home.amount, warehouse.home.wordLen, Buffer.alloc(1,0), (err) => {
                let callMethodResult;
                if(err){
                    console.log("Method Home/Start"+ err+" - "+ this.s7client.ErrorText(err));
                    callMethodResult = {
                        statusCode: StatusCodes.BadInternalError,
                    };
                    return callback(err, callMethodResult);
                }
                callMethodResult = {
                    statusCode: StatusCodes.Good,
                };
                console.log("Method Home/Stop Executed")
                return callback(null, callMethodResult);
            });
        });
        //set start false
        stopStart.bindMethod((inputArgs, context, callback) => {
            this.s7client.WriteArea(warehouse.start.area,warehouse.start.dbNumber,warehouse.start.start,
                warehouse.start.amount, warehouse.start.wordLen, Buffer.alloc(1,0), (err) => {
                let callMethodResult;
                if(err){
                    console.log("Method Start/Stop"+ err+" - "+ this.s7client.ErrorText(err));
                    callMethodResult = {
                        statusCode: StatusCodes.BadInternalError,
                    };
                    return callback(err, callMethodResult);
                }
                callMethodResult = {
                    statusCode: StatusCodes.Good,
                };
                console.log("Method Start/Stop Executed")
                return callback(null, callMethodResult);
            });
        });
        //set start true
        enableStart.bindMethod((inputArgs, context, callback) => {          
            this.s7client.WriteArea(warehouse.start.area,warehouse.start.dbNumber,warehouse.start.start,
                warehouse.start.amount, warehouse.start.wordLen, Buffer.alloc(1,1), (err) => {
                let callMethodResult;
                if(err){
                    console.log("Method Enable start"+ err+" - "+ this.s7client.ErrorText(err));
                    callMethodResult = {
                        statusCode: StatusCodes.BadInternalError,
                    };
                    return callback(err, callMethodResult);
                }
                callMethodResult = {
                    statusCode: StatusCodes.Good,
                };
                console.log("Method Enable Start Executed")
                return callback(null, callMethodResult);
            });
        });

        //set go position
        enableGo.bindMethod((inputArgs, context, callback) => {
            let inputValue;
            let selected = warehouse.go1;
            
            for(let arg of inputArgs.values()) {
                inputValue = arg.value;
                console.log("InputArgs Value :" + arg.value);
                console.log("InputValue :" + inputValue);
            }

            switch(inputValue){
                case "0x0":
                    selected = warehouse.go1; 
                    break;
                case "0x1":
                    selected = warehouse.go2;
                    break;
                case "0x2":
                    selected = warehouse.go3;
                    break;
                case "1x0":
                    selected = warehouse.go4;
                    break;
                case "1x1":
                    selected = warehouse.go5;
                    break;
                case "1x2":
                    selected = warehouse.go6;
                    break;
                case "2x0":
                    selected = warehouse.go7;
                    break;
                case "2x1":
                    selected = warehouse.go8;
                    break;
                case "2x2":
                    selected = warehouse.go9;
                    break;
            }
            let callMethodResult;    
            console.log("Selected :" + selected.start);

            this.s7client.ReadArea(warehouse.go1.area, warehouse.go1.dbNumber, 12, 2, 2, (err, res) => {
                if(err) {
                    callMethodResult = {
                        statusCode: StatusCodes.BadInternalError,
                    };
                    return callback(err, callMethodResult);
                }
        
                // reset all interested bits
               setBit(res, warehouse.go1.byte, warehouse.go1.bit, 0);
               setBit(res, warehouse.go2.byte, warehouse.go2.bit, 0);
               setBit(res, warehouse.go3.byte, warehouse.go3.bit, 0);
               setBit(res, warehouse.go4.byte, warehouse.go4.bit, 0);
               setBit(res, warehouse.go5.byte, warehouse.go5.bit, 0);
               setBit(res, warehouse.go6.byte, warehouse.go6.bit, 0);
               setBit(res, warehouse.go7.byte, warehouse.go7.bit, 0);
               setBit(res, warehouse.go8.byte, warehouse.go8.bit, 0);
               setBit(res, warehouse.go9.byte, warehouse.go9.bit, 0);

               //Set the selected bit
               setBit(res, selected.byte, selected.bit, 1);
        
               this.s7client.WriteArea(warehouse.go1.area, warehouse.go1.dbNumber, 12, 2, 2, res, function(err) {
                    if(err) {
                        callMethodResult = {
                            statusCode: StatusCodes.BadInternalError,
                        };
                        return callback(err, callMethodResult);
                    }
        
                    callMethodResult = {
                        statusCode: StatusCodes.Good,
                    };
                    return callback(null, callMethodResult); 
                }) ;
            });

            function setBit(buffer: Buffer, i: number, bit: number, value:number){
                if(value == 0){
                    buffer[i] &= ~(1 << bit);
                }else{
                    buffer[i] |= (1 << bit);
                }
            }          
                
        });
 
        return warehouseObject;
    }

    private get_home = this.create_refreshFunc(DataType.Boolean, warehouse.home);
    private get_start = this.create_refreshFunc(DataType.Boolean, warehouse.start);
    private get_go1 = this.create_refreshFunc(DataType.Boolean, warehouse.go1);
    private get_go2 = this.create_refreshFunc(DataType.Boolean, warehouse.go2);
    private get_go3 = this.create_refreshFunc(DataType.Boolean, warehouse.go3);
    private get_go4 = this.create_refreshFunc(DataType.Boolean, warehouse.go4);
    private get_go5 = this.create_refreshFunc(DataType.Boolean, warehouse.go5);
    private get_go6 = this.create_refreshFunc(DataType.Boolean, warehouse.go6);
    private get_go7 = this.create_refreshFunc(DataType.Boolean, warehouse.go7);
    private get_go8 = this.create_refreshFunc(DataType.Boolean, warehouse.go8);
    private get_go9 = this.create_refreshFunc(DataType.Boolean, warehouse.go9);
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