import React, { useState } from 'react'
import axios from 'axios'
import styles from './forgotPasswordPage.module.css'
import { forgotPassword } from '../../api/authApi'

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!email) {
            setError('Please enter a valid email address.')
            return
        }

        try {
            await forgotPassword(email)
        } catch (err) {
            setError('Failed to send reset email. Please try again later.')
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Forgot Password</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        className={styles.input}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Send Reset Link</button>
            </form>

            {message && <p className={styles.successMessage}>{message}</p>}
            {error && <p className={styles.errorMessage}>{error}</p>}
        </div>
    )
}

export default ForgotPasswordPage
