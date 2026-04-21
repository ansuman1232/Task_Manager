import "../styles/Task.css"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { TaskContext } from "../context/TaskContex";
import { useContext } from "react";


function Task({title ,date ,completed ,id}){
    const {markDone ,deleteTask} = useContext(TaskContext);
    
    return(
        <div className="task">
    <Card sx={{ width:"39vw", backgroundColor:completed?"green":"#ff1744" ,color:"white"}}>
      <CardContent>
        
        <Typography variant="h5" component="div">
         Title: {title}
        </Typography>
        <Typography variant="body2">
          Date: {date}
        </Typography>
      </CardContent>
      <CardActions >
        <div className="buttons">
        <Button onClick={()=>{deleteTask(id)}} sx={{marginRight:"2vw"}} variant="contained" size="small">Delete</Button>
        <Button onClick={()=>{markDone(id)}} variant="contained" size="small">mark Done</Button>
        </div>
      </CardActions>
    </Card>
    </div>
    );
}

export default Task;