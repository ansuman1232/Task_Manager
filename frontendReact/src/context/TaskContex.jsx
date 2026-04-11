import axios from "axios";
import {createContext,useContext,useState,useMemo} from "react";
export const TaskContext=createContext({});
import server from "../enviroment.js"
const client=axios.create({
    baseURL:`${server}/api/v1`
})

export const TaskProvider=({children})=>{
const taskContext=useContext(TaskContext);
const [data, setData]=useState(taskContext);
const getAllTasks =async()=>{
    try{
        let res=await client.get("/tasks",{});
    //   console.log(res);
        return res.data.tasks;
    }
    catch(e){throw e;}
}

const markDone =async (id)=>{
    try{
        
        let res=await client.patch(`/tasks/${id}`)
    }
    catch(e){throw e;}
}

const deleteTask= async (id)=>{
    try{
        let res=await client.delete(`/tasks/${id}`)
    }
    catch(e){throw e};
}


const addTask =async (title)=>{
    try{
        let res=await client.post('/tasks' ,{title});
    }
    catch(e){throw e};
}



const backendData= useMemo(()=>({data,setData,getAllTasks,markDone ,deleteTask,addTask}),[data])

return (
    <TaskContext.Provider value={backendData}>
        {children}
    </TaskContext.Provider>
)

}

