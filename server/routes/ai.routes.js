import generateContent from '../services/ai.service.js';
import express from 'express';
const router=express.Router()
router.post("/get-review", async (req,res)=>{
    const code=req.body.code;
    if(!code){
         return res.status(404).send("prompt is required")
    }
    const response=await generateContent(code);
     res.send(response)
})

export default router;