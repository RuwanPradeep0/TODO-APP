import { useState } from 'react';
import styles from './taskForm.module.css';
import { createTask } from '../../api/taskApi';


const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = {
        title,
        description,
        startDateTime,
        endDateTime,
      };
      
      const response = await createTask(formData);
      console.log('Task created:', response);
    } catch (error) {
      console.error('Failed to create task:', error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Create New Task</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="taskName">Task Name</label>
          <input
            type="text"
            id="taskName"
            placeholder="Enter task name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="taskDescription">Description</label>
          <input
            type="text"
            id="taskDescription"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="taskDate">Start Date & Time</label>
          <input
            type="datetime-local"
            id="taskDate"
            value={startDateTime}
            onChange={(e) => setStartDateTime(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="endDate">End Date & Time</label>
          <input
            type="datetime-local"
            id="endDate"
            value={endDateTime}
            onChange={(e) => setEndDateTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Create Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
