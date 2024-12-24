import { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import TaskForm from '../taskForm/TaskForm'
import styles from './layout.module.css'
import TaskList from '../taskList/TaskList'
import UserDetails from '../userDetails/UserDetails'

const Layout = ( {children}) => {
    const [activeTab, setActiveTab] = useState('dashboard')

    return (
      <div className={styles.layout}>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className={styles.main}>
          {activeTab === 'dashboard' ? (
            <div className={styles.dashboard}>
              <div className={styles.taskListContainer}>
                <TaskList />
              </div>
              <div className={styles.taskFormContainer}>
                <TaskForm />
              </div>
            </div>
          ) : (
            <UserDetails />
          )}
        </main>
      </div>
    )
}

export default Layout
