import express from 'express';
import { createTask, deleteTask, getTasks, updateTask} from '../controllers/taskController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/createtasks', verifyToken, createTask);
router.get('/gettasks',verifyToken, getTasks);
router.put('/tasks/:taskId', verifyToken, updateTask);
router.delete('/tasks/:taskId', verifyToken, deleteTask);

export default router;
