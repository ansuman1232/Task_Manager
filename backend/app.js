import express from "express";
import cors from "cors";
import {createServer} from "node:http";
import router from "./routes/routes.js";

const app=express();

const server=createServer(app);

app.set("port",3000);
app.use(cors());


app.use(express.urlencoded({limit:"40kb",extended:true}));
app.use(express.json({limit:"40kb"}));

app.use("/api/v1/",router);




server.listen(app.get("port"),()=>{
    console.log("server listening on  port ",app.get("port"));
})

app.use((err,req,res,next)=>{
console.log("==error stack:==",err.stack);
const statusCode=err.status|| 500;
const message=err.message || "Internal Server Error";

return res.status(statusCode).json({
    success:false,
    message:message
})

})