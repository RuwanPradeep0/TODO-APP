import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './emailVerification.module.css'; 
import { verifyEmail } from '../../api/authApi';

const EmailVerification = () => {
    const [token, setToken] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate(); 

    const onInputChange = (e) => {
        const { value } = e.target;
        if (/^\d{0,6}$/.test(value)) {
            setToken(value);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await verifyEmail(token); 
            if (response.success) {
                setSuccess(true);
                setTimeout(() => {
                    navigate('/login'); 
                }, 1000);
            } else {
                console.log('Invalid token. Please try again.');
            }
        } catch (err) {
            console.log('An error occurred. Please try again.');
        } 
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Email Verification</h1>
                <p className={styles.subtitle}>Please enter the 6-digit verification code sent to your email.</p>
            </div>

            <form onSubmit={onSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="token" className={styles.label}>Verification Code</label>
                    <input
                        id="token"
                        type="text"
                        className={styles.input}
                        placeholder="Enter 6-digit code"
                        required
                        value={token}
                        onChange={onInputChange}
                        maxLength="6"
                    />
                </div>

              
                {success && <div className={styles.success}>Your email has been verified successfully!</div>}

                <button className={styles.button} type="submit" >
                   verify email
                </button>
            </form>
        </div>
    );
};

export default EmailVerification;
