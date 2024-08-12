const mqtt = require('mqtt');
let client = mqtt.connect('mqtt://broker.hivemq.com');

client.on("connect", () => {
    client.subscribe('test');
    console.log("Subscribed to the MQTT topic");
});

client.on('message', (topic,message) => {
    console.log("🚀 ~ client.on ~ message:", message.toString());
});