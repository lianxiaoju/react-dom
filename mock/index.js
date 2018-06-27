var data = require('./data/data')

module.exports=function(app){
    app.get('/api/log',(req,res,next)=>{
        res.send(data)
    })
}