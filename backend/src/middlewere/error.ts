import { NextFunction, Request, Response } from 'express';
import { errorMessages, HTTPErrors } from '../types/errors';
import { HTTPVerbs } from '../types/common';

export const errorStatusHandle = (res: Response, errorType?: HTTPErrors, extraInfo: Record<string, any> = {}) => {
  const msg = errorType ? errorMessages[errorType] : errorMessages.INTERNAL_SERVER_ERROR;
  return res.status(msg.code).send({ error: { ...msg, ...extraInfo } });
};

export const error404Middleware = (req: Request, res: Response) => errorStatusHandle(res, HTTPErrors.NOT_FOUND);

export const error500Middleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  // When the response is already sent
  // the error must be delegated to the default express error handler
  if (res.headersSent) {
    return next(err);
  }
  return errorStatusHandle(res, HTTPErrors.INTERNAL_SERVER_ERROR);
};

export const allowedMethods = (methods = [HTTPVerbs.GET]) => (req: Request, res: Response, next: NextFunction) => {
  if (methods.includes(req.method as HTTPVerbs)) return next();
  res.set('Allow', methods);
  return errorStatusHandle(res, HTTPErrors.METHOD_NOT_ALLOWED, { methods });
};
