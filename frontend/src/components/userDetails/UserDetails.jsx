import React, { useEffect, useState } from 'react';
import styles from './userDetails.module.css';
import { getUserDetails } from '../../api/authApi';

const UserDetails = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userDetails = await getUserDetails();
      setUser(userDetails);
    };
    fetchUserDetails();
  }, []);

  if (!user) {
    return <p>Loading user details...</p>;
  }

  const { firstName, lastName, email } = user;

  return (
    <div className={styles.userDetails}>
        
      <div className={styles.card}>
        <h2>{`${firstName} ${lastName}`}</h2>
        <p className={styles.email}>{email}</p>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <label>Full Name</label>
            <p>{`${firstName} ${lastName}`}</p>
          </div>
          <div className={styles.infoItem}>
            <label>Email</label>
            <p>{email}</p>
          </div>
          <div className={styles.infoItem}>
            <label>Role</label>
            <p>User</p> {/* Default role, update dynamically if required */}
          </div>
          <div className={styles.infoItem}>
            <label>Member Since</label>
            <p>January 2024</p> {/* Default member date, update dynamically if available */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
