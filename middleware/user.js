function user(app,db){
    console.log('The user is called')
    //REGISTRATION
     // for  POST operation
    app.post('/login',function(req,res){
        var loginObj = {
                    
                    userName:req.body.userName,
                    password:req.body.password,
         }
           
        db.query('insert into  tbl_login set?',loginObj,function(error,records,fields){
            
            if(records.affectedRows>0){ 
                res.send({
                    status:200,
                    result:'success',
                    response:'user registered successfully'
                })
            }else{
                res.send({
                    status:500,
                    result:'failure',
                    response:'user not registered'
                })
            }
        
    })
    })
    // for  POST operation

    
    // for  GET operation
    app.get('/loginlist',function(req,res){
    db.query('select *  from tbl_login',function(error,records,fields){ 
        if(records.length>0){
         res.send({
            status:200,
            result:'success',
            response:records
        })
    }else{
        res.send({
            status:404,
            result:'failure',
            response:'user List'
        })
    }

})
})
// for  GET operation



app.delete('/register/:id',function(req,res){
    db.query('delete from tbl_register where id=8',"+req.body.id+",function(error,records,fields){ 
        if(records.length>0){
            res.send({
               status:200,
               result:'success',
               response:records
           })
       }else{
           res.send({
               status:404,
               result:'failure',
               response:'user List'
           })
       }
   
   })
   })

}
 module.exports = user;
