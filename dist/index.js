"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_opcua_1 = require("node-opcua");
const node_snap7_1 = require("node-snap7");
const path_1 = __importDefault(require("path"));
const builder_1 = require("./builders/builder");
let s7client = new node_snap7_1.S7Client();
let isConnected = s7client.ConnectTo('192.168.0.1', 0, 1);
if (!isConnected)
    throw Error("Unable to connect!");
let server = new node_opcua_1.OPCUAServer({
    nodeset_filename: node_opcua_1.nodesets.standard_nodeset_file,
    port: 4848,
    serverCertificateManager: new node_opcua_1.OPCUACertificateManager({
        automaticallyAcceptUnknownCertificate: true,
        rootFolder: path_1.default.join(__dirname, "../certs")
    })
});
function post_initialize() {
    let addressSpace = server.engine.addressSpace;
    let namespace = addressSpace.getOwnNamespace();
    let sortingLineBuilder = new builder_1.SortingLineBuilder(s7client, addressSpace, namespace);
    sortingLineBuilder.build();
    server.start(function () {
        console.log("Server is now listening ... ( press CTRL+C to stop)");
        console.log("port ", server.endpoints[0].port);
        var endpointUrl = server.endpoints[0].endpointDescriptions()[0].endpointUrl;
        console.log(" the primary server endpoint url is ", endpointUrl);
    });
}
server.initialize(post_initialize);
//# sourceMappingURL=index.js.map