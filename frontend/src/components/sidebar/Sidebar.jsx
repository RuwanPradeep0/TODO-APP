import React, { useState } from 'react';
import styles from './sidebar.module.css';

const Sidebar = ({ activeTab, setActiveTab }) => {
    return (
        <aside className={styles.sidebar}>
          <div className={styles.logo}>
            <h1>Task Manager</h1>
          </div>
          <nav className={styles.nav}>
            <button 
              className={`${styles.navButton} ${activeTab === 'dashboard' ? styles.active : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
            <button 
              className={`${styles.navButton} ${activeTab === 'userDetails' ? styles.active : ''}`}
              onClick={() => setActiveTab('userDetails')}
            >
              User Details
            </button>
          </nav>
        </aside>
      )
    }
export default Sidebar;
