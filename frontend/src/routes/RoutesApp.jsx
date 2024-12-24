import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthPage from '../pages/authPage/AuthPage'
import Dashboard from '../pages/dashboard/Dashboard'
import EmailVerification from '../pages/emailVerificationPage/EmailVerification'
import ForgotPasswordPage from '../pages/forgotPasswordPage/ForgotPasswordPage'

const RoutesApp = () => {
  return (
    <Routes>
     <Route path ='/' element ={<AuthPage/>}/>
     <Route path ='/dashboard' element ={<Dashboard/>}/>
     <Route path ='/email-verification' element ={<EmailVerification/>}/>
     <Route path="/forgot-password" element={<ForgotPasswordPage />} />

   </Routes>
  )
}

export default RoutesApp
