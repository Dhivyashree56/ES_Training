const mqtt = require('mqtt');
let client = mqtt.connect('mqtt://broker.hivemq.com');

client.on("connect", () => {
    setInterval(() => {
        console.log("Publishing message ====>");
        client.publish('test', "----- Hi subscriber --");
    }, 5000);
});