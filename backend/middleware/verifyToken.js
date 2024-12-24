import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ success: false, message: "Token not found, Unauthorized User" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ success: false, message: "Invalid token, Unauthorized User" });
    }
    console.log("Decoded JWT:", decoded);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, message: "Token expired, please log in again" });
    }
    return res.status(401).json({ success: false, message: "Invalid token, Unauthorized User" });
  }
};
