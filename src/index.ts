import { OPCUAServer, nodesets, OPCUACertificateManager, Variant, DataType } from "node-opcua";
import { S7Client, Area, WordLen } from 'node-snap7';
import path from "path";
import { SortingLineBuilder, OvenBuilder } from "./builders/builder";


let s7clientSortingLine = new S7Client();
let s7clientOven = new S7Client();
let isSortingLineConnected = s7clientSortingLine.ConnectTo('192.168.0.1', 0, 1);
let isOvenConnected = s7clientOven.ConnectTo('192.168.0.3', 0, 1);

if (!isSortingLineConnected) throw Error("Unable to connect to SortingLine!");
if (!isOvenConnected) throw Error("Unable to connect to Oven!");

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

    let sortingLineBuilder = new SortingLineBuilder(s7clientSortingLine, addressSpace, namespace);
    sortingLineBuilder.build();
    
    let ovenBuilder = new OvenBuilder(s7clientOven, addressSpace, namespace);
    ovenBuilder.build();

    server.start(function () {
        console.log("Server is now listening ... ( press CTRL+C to stop)");
        console.log("port ", server.endpoints[0].port);
        var endpointUrl = server.endpoints[0].endpointDescriptions()[0].endpointUrl;
        console.log(" the primary server endpoint url is ", endpointUrl );
    });
}

server.initialize(post_initialize);

