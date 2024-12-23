import { User } from "../model/user.js";
import bcrypt from "bcryptjs";
import { generateJWTToken } from "../utills/generateJWTToken.js";
import { generateVerificationToken } from "../utills/generateVerificationToken.js";
import { sendVerificationEmail } from "../emailService/email.js";


export const signup = async (req, res) => {
    const { firstName, lastName,email, password } = req.body;
    try {
      if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
      const userAlreadyExists = await User.findOne({ email });
      if (userAlreadyExists) {
        return res.status(400).json({ message: "User already exists in Database" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const verificationToken = generateVerificationToken();
      const user = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        verificationToken: verificationToken,
        verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
      });
  
      await user.save();
  
      generateJWTToken(res, user._id);
  
      await sendVerificationEmail(user.email, verificationToken);
  
      res.status(201).json({
        success: true,
        message: "User created successfully",
        user: {
          ...user._doc,
          password: undefined,
        },
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
  