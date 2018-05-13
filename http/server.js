var http=require('http')
var qs=require('querystring')
server=http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'})
  switch(req.url){
    case '/':{
      res.end([
        '<form method="POST" action="/url">'
        ,'<h1>form</h1>'
        ,'<fieldset>'
        ,'<label>info:</label>'
        ,'<p>name:</p>'
        ,'<input type="test" name="name"/>'
        ,'<p><button>submit</button></p>'
        ,'<form>'
      ].join(''))
      break;
    }
    case '/url':{
      var body='';
      req.on('data',function(chunk){
        body+=chunk
      })
      req.on('end',function(){
        // body=qs.parse(body)
        res.end( `you sent a <em>${req.method}</em> request,\n dody: <em>${body}</em>`)
      })
      break;
    }
    default:{
      res.writeHead(404)
      res.end('Not Found')
      break;
    }
  }
})
server.listen(3000,function(){
  console.log('created a http connection on: 3000')
})