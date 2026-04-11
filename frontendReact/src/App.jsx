import { useState ,useEffect, useContext } from 'react'
import './App.css'
import { TaskContext } from './context/TaskContex.jsx';
import Task from "./Task.jsx";
import InputTask from './InputTask.jsx';
function App() {
  const {getAllTasks}=useContext(TaskContext)
  const [tasks, setTasks] = useState([])
  useEffect(()=>{
    const fetchTasks= async ()=>{
      try{
        const tasks=await getAllTasks();
        setTasks(tasks);
      }catch(e){
        console.log(e);
      }
    }
    fetchTasks();
  },[tasks])

  return (
    <>
    <h1 color="white">Tasks</h1>
    {
      tasks.length>0 && 
      tasks.map((task)=>{
        return (
        <div>
          <Task key={task.id} title={task.title} date={task.createdAt} completed={task.completed} id={task.id} />
            </div>
          
        )
      })
    }
    <div>
    <InputTask></InputTask>
    </div>
    </>
  )
}

export default App
