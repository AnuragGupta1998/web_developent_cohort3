import jwt from "jsonwebtoken";

export const adminAuthMiddleware = async (req, res, next) => {
  const token = req.headers.authorization ? req.headers.authorization : req.cookies.AdminUserToken;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_ADMIN_SECRET);
    if (!decodedToken) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const adminId = decodedToken.ID;
    req.adminUserID = adminId;
    next();
  } catch (error) {
    res.status(401).json({
      msg: "Unauthorized",
      error: error.message,
    });
  }
};
