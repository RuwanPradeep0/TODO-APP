import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './authPage.module.css'
import LoginForm from '../../components/loginForm/LoginForm'
import RegisterForm from '../../components/registerForm/RegisterForm'

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate() 

    const handleForgotPassword = () => {
        navigate('/forgot-password')
    }

    return (
        <div className={styles.container}>
            <div className={styles.formSection}>
                <div className={styles.logo}>
                    <span className={styles.logoText}>TO DO Application</span>
                </div>
                
                <div className={styles.card}>
                    {isLogin ? (
                        <LoginForm onToggle={() => setIsLogin(false)} />
                    ) : (
                        <RegisterForm onToggle={() => setIsLogin(true)} />
                    )}
                    <div className={styles.forgotPasswordSection}>
                        <a 
                            href="#!" 
                            onClick={handleForgotPassword} 
                            className={styles.forgotPasswordLink}
                        >
                            Forgot Password?
                        </a>
                    </div>
                </div>
            </div>
            
            <div className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <h2 className={styles.heroTitle}>Arrange Your Tasks</h2>
                        <p className={styles.heroDescription}>
                            Empower your day with clarity and focus—because every task deserves to be done right!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage
