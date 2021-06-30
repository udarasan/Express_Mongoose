var express =require('express')
var router=express.Router()
var connection=require('./database/database')
const user=require('../model/users')



router.get('/n',async (req,res)=>{
    const users = await user.find();
    res.send(users);
})

//------------------------------------------------------------------------->
router.put('/',(req,res)=>{
    res.send('Customer PUT OK!')
})
router.delete('/',(req,res)=>{
    res.send('Customer DELETE OK!')
})
router.post('/',(req,res)=>{

    connection.query('INSERT INTO COURSE VALUES(?,?,?,?)',
    
    [req.body.code, req.body.courseName, req.body.courseType, req.body.duration],
    
    function(err,rows,fields){
        if(err)throw err
        res.send(rows)
    })
})
//------------------------------------------------------------------------->
module.exports=router