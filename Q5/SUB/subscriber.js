var mqtt = require('mqtt')
const client = mqtt.connect("mqtt://broker:1883")


var topic = "test/sensor-data"

client.on("connect", function(res, err) {
    if(err) {
        console.log(err)
    } else {
        console.log("broker connect successfulllll")
        client.subscribe(topic, function(err) {
            if(err) {
                console.log(err)
            } else {
                console.log("subscribed succesfully!")
            }
        })
    }
})

client.on("message", function(topic, data) {
    console.log(data.toString())
})
