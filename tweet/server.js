var http=require('http')
var qs=require('querystring')
server=http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'})
  res.end('hello world!')
})
server.listen('3000',function(){
  console.log('listening on:3000')
})