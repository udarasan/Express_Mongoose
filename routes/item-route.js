const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('Item GET OK')
    
})
router.post('/',(req,res)=>{
    res.send('Item POST OK')
    
})
router.put('/',(req,res)=>{
    res.send('Item PUT OK')
    
})
router.delete('/',(req,res)=>{
    res.send('Item DELETE OK')
    
})
module.exports=router
