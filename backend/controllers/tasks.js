import {v4 as uuidv4} from 'uuid';
let database=[{id:"122", title:"work" ,completed:false,createdAt:new Date().toDateString()}]
import httpStatus from "http-status";

const getAllTasks = (req,res,next)=>{
 res.status(httpStatus.OK).json({tasks:database})
}

const addTask=(req,res,next)=>{
const {title}=req.body;
if(!title)return res.status(httpStatus.BAD_REQUEST).json({message:"title is required"});
const task={id:uuidv4(),title:title,completed:false,createdAt:new Date().toDateString()}
database.push(task);
 res.status(httpStatus.CREATED).json({"message":"task is added"});

}

const updateTask=(req,res,next)=>{
const {id}=req.params;

let task=database.find(task=>id===task.id);
if(task===undefined)return res.status(httpStatus.NOT_FOUND).json({"message":"task not found"});
task.completed=true;
res.status(httpStatus.OK).json({"message":"task status updated"});
}

const deleteTask=(req,res,next)=>{
const {id}=req.params;

database=database.filter(task=>task.id!==id);

res.status(httpStatus.OK).json({"message":"task is deleted"});
}

export {getAllTasks,addTask,updateTask,deleteTask};