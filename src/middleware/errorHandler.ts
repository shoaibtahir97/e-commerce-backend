import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

// notFound function will be called if no other middleware has handled the request. It will create a new Error object and set the code to 404 not found
const notFound = (req: Request, res: Response, next: NextFunction) => {
  // Created a new variable set it to error and pass the text not found with requested URL
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404); // Returning the response of 404
  next(error); // Call the next piece of middleware passing in the error variable
};

// To overwrite the default express error handler we are going to create our custom errorHandler
const errorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Check if response.statusCode
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;
  //   Check for Mongoose bad ObjectId or CastError
  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
};
export { notFound, errorHandler };
