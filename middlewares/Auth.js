import ErrorHandler from "../utils/Errorhandler.js";

export const isAuthenticated = (req, res, next) => {
  const token = req.cookies["connect.sid"];
  //   if (!token) next(new Error("nice"));
  if (!token) next(new ErrorHandler("not logged in ", 401));

  next();
};

export const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== "admin")
    next(new ErrorHandler("Only admin Allowed", 405));
  next();
};
