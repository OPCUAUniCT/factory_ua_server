import { OPCUAServer, nodesets, OPCUACertificateManager, Variant, DataType } from "node-opcua";
import { S7Client, Area, WordLen } from 'node-snap7';
import path from "path";
import { SortingLineBuilder, OvenBuilder, VacuumGripperBuilder } from "./builders/builder";


let s7clientSortingLine = new S7Client();
let s7clientOven = new S7Client();
let s7clientVacuumGripper = new S7Client();

let isSortingLineConnected = s7clientSortingLine.ConnectTo('192.168.0.1', 0, 1);
let isOvenConnected = s7clientOven.ConnectTo('192.168.0.3', 0, 1);
let isVacuumConnected = s7clientVacuumGripper.ConnectTo('192.168.0.4', 0, 1);

if (!isSortingLineConnected) throw Error("Unable to connect to SortingLine!");
if (!isOvenConnected) throw Error("Unable to connect to Oven!");
if (!isVacuumConnected) throw Error("Unable to connect to Vacuum Gripper!");

let server = new OPCUAServer({
    nodeset_filename: nodesets.standard_nodeset_file,
    port: 4848,
    serverCertificateManager: new OPCUACertificateManager({ 
        automaticallyAcceptUnknownCertificate: true,
        rootFolder: path.join(__dirname, "../certs")
    })
})

function post_initialize() {

    let addressSpace = server.engine.addressSpace!;
    let namespace = addressSpace.getOwnNamespace();

    let factory = namespace.addObject({
        browseName: "Factory",
        organizedBy: addressSpace.rootFolder.objects
    });

    

    let sortingLineBuilder = new SortingLineBuilder(s7clientSortingLine, addressSpace, namespace);
    let sortingLine = sortingLineBuilder.build();    
    
    let ovenBuilder = new OvenBuilder(s7clientOven, addressSpace, namespace);
    let oven = ovenBuilder.build();
    
    let vacuumBuilder = new VacuumGripperBuilder(s7clientVacuumGripper, addressSpace, namespace);
    let vacuum = vacuumBuilder.build();

    factory.addReference({
        referenceType: "HasComponent",
        nodeId: vacuum
    });

    factory.addReference({
        referenceType: "HasComponent",
        nodeId: oven
    });

    factory.addReference({
        referenceType: "HasComponent",
        nodeId: sortingLine
    });

    server.start(function () {
        console.log("Server is now listening ... ( press CTRL+C to stop)");
        console.log("port ", server.endpoints[0].port);
        var endpointUrl = server.endpoints[0].endpointDescriptions()[0].endpointUrl;
        console.log(" the primary server endpoint url is ", endpointUrl );
    });
}

server.initialize(post_initialize);

