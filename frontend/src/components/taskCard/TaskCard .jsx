import { FaEdit, FaTrashAlt } from 'react-icons/fa'; 
import styles from './taskCard.module.css';

const TaskCard = ({ task }) => {
  return (
    <div key={task._id} className={`${styles.task} ${task.isToday ? styles.todayTask : ''}`}>
      <div className={styles.taskInfo}>
        <h3>{task.title}</h3>
        <span className={styles.date}>{task.startDateTime}</span>
      </div>
      <p className={styles.description}>{task.description}</p> 
      <div className={styles.actions}>
        <button className={styles.editButton}>
          <FaEdit size={20} />
        </button>
        <button className={styles.deleteButton}>
          <FaTrashAlt size={20} />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
