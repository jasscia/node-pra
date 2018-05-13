var http=require('http')
var qs=require('querystring')

function send(thename){
  http.request({
    host:'127.0.0.1',
    port:3000,
    url:'/',
    method:'POST'
  },function(res){
    res.setEncoding('utf8')
    var body='';
    res.on('data',function(chunk){
      body+=chunk
      console.log(body)
    })
    res.on('end',function(){
      console.log('\n  \033[90m request complete!\033[39m\n')
      process.stdout.write('\n your name: ')
    })
  }).end(qs.stringify({name:thename}))
}
process.stdout.write('\n enter your name: ')
process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data',function(name){
  console.log('before send',qs.stringify({name:name.replace('\n','')}))
  send(name.replace('\n',''))
})