import * as express from "express";
import {prisma} from "@repo/db/client";

const app=express.default();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello");
}) 

app.post("/addrecord",async(req,res)=>{
    const user=await prisma.user.create({
    data: {
      username: req.body.username,
      password: req.body.password,
    }
  });

  
  res.json({
    message:"signup request successful",
    id:user.id,
  });
})
app.delete("/addrecord1",async(req,res)=>{
    const user = await prisma.user.delete({
   where: {
    id:"d2f39b64-0464-4909-be26-6de92b8b1e08"
  }
  
});
res.send("hello");

  });

app.listen(3009);