var http=require('http')
var qs=require('querystring')
var fs=require('fs')
var server=http.createServer(function(req,res){
  if(req.method==="GET" && req.url.substr(0,7)==='/images' && req.url.substr(-4)==='.jpg'){
    fsStat()
    return
  }
  if(req.method==="GET" && req.url==='/'){
    serve(__dirname+'/websit/index.html','text/html')
    return}
  res.writeHead(404);
  res.end('Not Found')



function fsStat(){
  fs.stat(__dirname+'/websit'+req.url,function(err,stat){
    console.log(__dirname+'/websit'+req.url)
  if(err || !stat.isFile()){
    res.writeHead(404);
    res.end('Not Found')
    return
  }
  serve(__dirname+'/websit/'+req.url,'application/jpg')
  })
}
function serve(path,type){
  res.writeHead(200,{'Content-Type':type})
  fs.createReadStream(path).pipe(res)
}
  
})
server.listen(3000,function(){
  console.log('created a http connection on: 3000')
})