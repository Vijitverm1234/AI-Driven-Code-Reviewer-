import generateContent from '../services/ai.service.js';
import express from 'express';
const router=express.Router()
router.get("/get-response", async (req,res)=>{
    const prompt=req.query.prompt;
    if(!prompt){
         return res.status(404).send("prompt is required")
    }
    const response=await generateContent(prompt);
     res.send(response)
})

export default router;