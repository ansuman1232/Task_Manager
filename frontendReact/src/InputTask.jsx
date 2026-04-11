import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { TaskContext } from './context/TaskContex';
import { useContext,useState } from 'react';

function InputTask(){
    const {addTask}=useContext(TaskContext);
    const [inputVal,setInputVal]=useState("");
    
    async function onClickHandler(val){
     await addTask(val)
     setInputVal("");
    }

    return(
        <>
         <TextField sx={{input:{color:'white'},
                   "& .MuiInputLabel-root": {
      color: "white",
    }}}  id="filled-basic" label="Add Task" variant="filled" onChange={(e)=>{setInputVal(e.target.value)}} value={inputVal} />
         <Button onClick={()=>{onClickHandler(inputVal)}} sx={{height:"4vh"}} variant="contained" size="medium">Add</Button>
  
       </>
    )
}


export default InputTask;