import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'; 
dotenv.config();


// console.log("JWT_SECRET Loaded: ", process.env.JWT_SECRET);
// export const generateJWTToken = (res, userId) => {
//  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
//     expiresIn: "7d"
//  })

//  res.cookie('token', token, {
//     httpOnly: true, // cookie cannot be accessed by client side scripts
//     secure: process.env.NODE_ENV === 'production', // cookie will only be set on https
//     sameSite: 'None',// cookie will only be set on the same site
//     maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
//  })

//  return token;
// }

// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv'; 
// dotenv.config();

// console.log("JWT_SECRET Loaded: ", process.env.JWT_SECRET);

// export const generateJWTToken = (res, userId) => {
//   const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
//     expiresIn: "7d"  // Token will expire in 7 days
//   });

//   // For localhost development
//   const isDevelopment = process.env.NODE_ENV !== 'production';

//   res.cookie('token', token, {
//     httpOnly: true,  // Cookie cannot be accessed by client-side scripts
//     secure: !isDevelopment,  // Only set cookies on HTTPS in production
//     sameSite: isDevelopment ? 'Lax' : 'None',  // Adjust SameSite for local development
//     maxAge: 7 * 24 * 60 * 60 * 1000  // Cookie will expire in 7 days
//   });

//   return token;
// };

export const generateJWTToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
  
    res.cookie('token', token, {
        httpOnly: true,
        secure: false, 
        sameSite: 'None',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });
  
    return token;
  };
  
