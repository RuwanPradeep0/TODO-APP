import express from 'express';
import { createTask} from '../controllers/taskController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/createtasks', verifyToken, createTask);
// router.get('/tasks', verifyToken, getTasks);
// router.put('/tasks/:taskId', verifyToken, updateTask);
// router.delete('/tasks/:taskId', verifyToken, deleteTask);

export default router;
