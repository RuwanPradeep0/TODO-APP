import React, { useState } from 'react';
import styles from './loginForm.module.css';
import { login } from '../../api/authApi';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onToggle }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
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
    
      await login(formData);
      navigate('/dashboard');
    } catch (err) {
      console.log('Invalid email or password. Please try again.');
    } 
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Welcome back</h1>
        <p className={styles.subtitle}>
          Enter your email to sign in to your account
        </p>
      </div>

      <form onSubmit={onSubmit} className={styles.form}>
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
          {isLoading ? 'Please wait' : 'Sign in'}
        </button>
      </form>

      <div className={styles.toggle}>
        Don't have an account?
        <button onClick={onToggle} className={styles.toggleButton}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
