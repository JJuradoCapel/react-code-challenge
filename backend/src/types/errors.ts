export enum HTTPErrors {
  NOT_FOUND = 'NOT_FOUND',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  METHOD_NOT_ALLOWED = 'METHOD_NOT_ALLOWED',
}

export type ErrorMessage = {
  title: string;
  code: number;
  message: string;
};

export const errorMessages: Record<HTTPErrors, ErrorMessage> = {
  [HTTPErrors.NOT_FOUND]: {
    title: 'Not found',
    code: 404,
    message: 'The requested resource couldn\'t be found in the server',
  },
  [HTTPErrors.INTERNAL_SERVER_ERROR]: {
    title: 'Internal server error',
    code: 500,
    message: 'Something went wrong in the server side of the application',
  },
  [HTTPErrors.METHOD_NOT_ALLOWED]: {
    title: 'Method not allowed',
    code: 405,
    message: 'The method used in the request is not supported in this route',
  },
};
