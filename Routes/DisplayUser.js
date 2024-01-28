const express=require('express');
const router=express.Router();
 
router.post("/displayData",(req,res)=>{
    try {
        res.send(global.displayData);  
    } catch (error) {
          console.error(error.message);
          res.send("server Error")
    }
})

module.exports=router;