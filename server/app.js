import express from "express"
import userRouter from "./routers/user.route.js"

const app = express();


app.get("/" , (req , res)=>{
    res.send("I am HOMEPAGE ")
})


app.use("/user" , userRouter)



app.listen(3000 , ()=>{
    console.log("app is listening on 3000")
})