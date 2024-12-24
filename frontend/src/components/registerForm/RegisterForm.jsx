import React, { useState } from 'react';
import styles from './registerForm.module.css';
import { signup } from '../../api/authApi';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({ onToggle }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);
      navigate('/email-verification');
    } catch (err) {
      console.log('An error occurred during registration. Please try again.');
    } 
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Create an account</h1>
        <p className={styles.subtitle}>
          Sign up to create an account and arrange your daily tasks
        </p>
      </div>

      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName" className={styles.label}>First Name</label>
          <input
            id="firstName"
            className={styles.input}
            placeholder="First name"
            required
            disabled={isLoading}
            value={formData.firstName}
            onChange={onInputChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="lastName" className={styles.label}>Last Name</label>
          <input
            id="lastName"
            className={styles.input}
            placeholder="Last name"
            required
            disabled={isLoading}
            value={formData.lastName}
            onChange={onInputChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            id="email"
            type="email"
            className={styles.input}
            placeholder="name@example.com"
            required
            disabled={isLoading}
            value={formData.email}
            onChange={onInputChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            id="password"
            type="password"
            className={styles.input}
            required
            disabled={isLoading}
            value={formData.password}
            onChange={onInputChange}
          />
        </div>

        <button className={styles.button} type="submit" disabled={isLoading}>
          {isLoading ? 'Please wait' : 'Sign up'}
        </button>
      </form>

      <div className={styles.toggle}>
        Already have an account?
        <button onClick={onToggle} className={styles.toggleButton}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
