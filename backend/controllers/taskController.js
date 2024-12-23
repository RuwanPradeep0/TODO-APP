
import { Task } from "../model/task.js";
import { checkOverlap } from "../utills/checkTaskOverlap.js";

export const createTask = async (req, res) => {
    const { title, description, startDateTime, endDateTime } = req.body;
  
    // Check for overlapping tasks
    try {
      const overlappingTask = await checkOverlap(req.userId, startDateTime, endDateTime);
  
      if (overlappingTask) {
        return res.status(400).json({ success: false, message: 'Overlapping task exists.' });
      }
  
      const newTask = new Task({
        user: req.userId,
        title,
        description,
        startDateTime,
        endDateTime,
        finished: false,
      });
  
      await newTask.save();
      res.status(201).json({ success: true, task: newTask });
      
    } catch (error) {
      console.error('Error creating task:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };