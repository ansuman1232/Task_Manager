import {Router} from "express";
import {addTask,getAllTasks,updateTask,deleteTask} from "../controllers/tasks.js"

const router=Router();
router.route("/tasks").get(getAllTasks);
router.route("/tasks").post(addTask);
router.route("/tasks/:id").patch(updateTask);
router.route("/tasks/:id").delete(deleteTask);

export default router;