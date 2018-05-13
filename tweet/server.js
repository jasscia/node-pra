var http=require('http')
var qs=require('querystring')
server=http.createServer(function(req,res){
  var body="";
  req.on('data',function(chunk){
    body+=chunk;
    console.log('i get:',body)
  })
  req.on('end',function(data){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('Done!')

    console.log('i got:',body,'--',data)
    console.log('\n got name \033[90m' + qs.parse(body).name+'\033[39m\n')
  })
  
})