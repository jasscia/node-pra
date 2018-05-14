var express=require('express')
var sio=require('socket.io')

var app=express.createServer()
app.use(express.bodyParser())
app.use(express.static('public'))
app.listen(3000,function(){console.log('server start on: 3000')})

var io=sio.listen(app)
io.sockets.on('connect',function(socket){
  console.log('someone connected!')
})