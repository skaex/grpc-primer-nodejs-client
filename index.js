'use strict';

const path = require('path');
const PROTO_PATH = path.join('pb', 'messages.proto');
const SERVER_ADDR = 'localhost:50000';

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader')
const packageDefinition = protoLoader.loadSync(PROTO_PATH)
const HelloService = grpc.loadPackageDefinition(packageDefinition).HelloService;
const client = new HelloService(SERVER_ADDR, grpc.credentials.createInsecure());

function main() {
  client.sayHello({Name: 'Abdulmajid'}, function (error, response) {
    if (error) {
      console.log(error);
      return;
    }
    console.log(response.Message);
  });
}

main();
