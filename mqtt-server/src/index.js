const aedes = require('aedes')();
const server = require('node:net').createServer(aedes.handle)
const port = 9000

aedes.on('client', function () {
    console.log('client connected')
})

server.listen(port, function () {
  console.log('MQTT SERVER on port ', port)
})
