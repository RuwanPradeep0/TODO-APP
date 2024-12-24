import { useState, useEffect } from 'react';
import styles from './taskList.module.css';
import { getTasks } from '../../api/taskApi';
import TaskCard from '../taskCard/TaskCard ';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await getTasks(); 
        setTasks(fetchedTasks); 
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };

    fetchTasks();
  }, []); 

  return (
    <div className={styles.taskList}>
      <div className={styles.header}>
        <h2>All Tasks</h2>
      </div>
      <div className={styles.tasks}>
        {tasks?.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
