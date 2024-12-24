import { resend } from "./config.js";


export const sendVerificationEmail = async (email, verificationToken) => {
    try {
      const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [email],
        subject: "Verify Your Email Address Now",
        text: `Your verification code is: ${verificationToken}`,
      });
    } catch (error) {
      console.log("error sending verification email", error);
      throw new Error("Error sending verification email");
    }
  };
  


  export const sendWelcomeEmail = async (email, name) => {
    try {
      const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [email],
        subject: "Welcome to TO-DO Application",
        text: `Hello ${name},\n\nWelcome to the TO-DO Application! We're excited to have you on board.\n\nBest regards,\nAcme Team`,
      });
    } catch (error) {
      console.log("error sending welcome email", error);
    }
  };
  

  export const sendPasswordResetEmail = async (email, resetURL) => {
    try {
      const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [email],
        subject: "Reset Your Password",
        html: `Click <a href="${resetURL}">here</a> to reset your password`,
      });
    } catch (error) {
      console.log("error sending password reset email", error);
    }
  };


  export const sendResetSuccessEmail = async (email) => {
    try {
      const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [email],
        subject: "Password Reset Was Successful",
        html: `Your password was reset successfully`,
      });
    } catch (error) {
      console.log("error sending password reset successful email", error);
    }
  }