import { OPCUAServer, nodesets, OPCUACertificateManager, Variant, DataType } from "node-opcua";
import { S7Client, Area, WordLen } from 'node-snap7';
import path from "path";
import { SortingLineBuilder } from "./builders/builder";

let s7client = new S7Client();
let isConnected = s7client.ConnectTo('192.168.0.1', 0, 1);

if (!isConnected) throw Error("Unable to connect!");

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

    let sortingLineBuilder = new SortingLineBuilder(s7client, addressSpace, namespace);
    sortingLineBuilder.build();

    server.start(function () {
        console.log("Server is now listening ... ( press CTRL+C to stop)");
        console.log("port ", server.endpoints[0].port);
        var endpointUrl = server.endpoints[0].endpointDescriptions()[0].endpointUrl;
        console.log(" the primary server endpoint url is ", endpointUrl );
    });
}

server.initialize(post_initialize);

