
import { Task } from "../model/task.js";
import { checkOverlap } from "../utills/checkTaskOverlap.js";

export const createTask = async (req, res) => {
    const { title, description, startDateTime, endDateTime } = req.body;
  
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


  export const getTasks = async (req, res) => {
    try {
      const today = new Date();
      today.setUTCHours(0, 0, 0, 0);
  
      const tasks = await Task.find({ 
        user: req.userId, 
        startDateTime: { $gte: today }
      }).sort({ startDateTime: 1 }); 
  
      res.status(200).json(tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };
  

export const updateTask = async (req, res) => {
    const { taskId } = req.params;
    const { title, description, startDateTime, endDateTime, finished } = req.body;
  
    try {
      const task = await Task.findOne({ _id: taskId, user: req.userId });
  
      if (!task) {
        return res.status(404).json({ success: false, message: 'Task not found or unauthorized' });
      }
  
      if ((startDateTime && startDateTime !== task.startDateTime) || 
          (endDateTime && endDateTime !== task.endDateTime)) {
        
        const overlappingTask = await checkOverlap(req.userId, startDateTime, endDateTime);
        
        if (overlappingTask) {
          return res.status(400).json({ success: false, message: 'Overlapping task exists.' });
        }
      }
  
      task.title = title || task.title;
      task.description = description || task.description;
      task.startDateTime = startDateTime || task.startDateTime;
      task.endDateTime = endDateTime || task.endDateTime;
      task.finished = finished || task.finished;
  
      await task.save();
      res.status(200).json({ success: true, task });
    } catch (error) {
      console.error('Error updating task:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };

export const deleteTask = async (req, res) => {
    const { taskId } = req.params;
  
    try {
      const task = await Task.findOneAndDelete({ _id: taskId, user: req.userId });
  
      if (!task) {
        return res.status(404).json({ success: false, message: 'Task not found or unauthorized' });
      }
  
      res.status(200).json({ success: true, message: 'Task deleted successfully' });
    } catch (error) {
      console.error('Error deleting task:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };