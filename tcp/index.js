var net=require('net');
var count=0;
var users={};
var server=net.createServer(function(conn){
  conn.setEncoding('utf8')
  var nickname;
  conn.write(
    '\n>welcome to\033[92m tcp-chat\033[39m!'
    +'\n>'+count +' other people are connected at this time.'
    +'\n>place write your name and press enter:'
  )
  count++;
  conn.on('close',function(){
    count--;
    delete users[nickname]
  })
  conn.on('data',function(data){
    data=data.replace('\r\n','');
    if(!nickname){
      if(users[data]){
        conn.write('\033[90m this nickname already in use.try again\033[39m')
        return
      }else{
        nickname=data;
        users[data]=conn;
        for(var key in users){
          users[key].write('\033[90m>' + nickname +' joined the room\n \033[39m')
        }
      }
    }else{
      for(var key in users){
        if(nickname!==key){
          users[key].write('\033[90m>' + nickname +': \033[39m'+data+'\n')
        }
      }
    }
  })
  conn.on('end',function(){
    console.log('nickname:',data)
  })
})
server.listen(3000,function(){
  console.log('\033[96m server listening on*:3000!\033[39m')
})
