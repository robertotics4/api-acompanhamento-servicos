import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';

function errorHandler(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction,
): Response {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'Error',
    message: 'Internal server error',
  });
}

export default errorHandler;
