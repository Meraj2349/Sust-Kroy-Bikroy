
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
    
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;
    if (err.name === "CastError") {
      message = "Resource not found";
      statusCode = 404;
    }

    if (err.name === "ValidationError") {
        message = Object.values(err.errors).map((val) => val.message);
        statusCode = 400;
        }
    res.status(statusCode);
    res.json({
        message: message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });

};


export { notFound, errorHandler };
// Path: backend/server.js
