var express=require('express')
var search=require('./search')
var app=express.createServer()
app.set('view engine','ejs')
app.set('ivews',__dirname+'/views')
app.set('view aptions',{layout:false})

app.get('/',function(req,res){
  res.render('index')
})
app.get('.search',function(req,res,next){
  search(req.query.q,function(err,tweets){
    if(err){
      return next(err);
      res.render('search',{
        results:tweets,
        search:req.query.q
      })
    }
  })
})
app.listen(3000,function(){console.log('express listning on： 3000')})