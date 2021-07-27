import { checkSchema } from 'express-validator';

export type PhoneBody = {
  name: string,
  manufacturer: string,
  description: string,
  color: string,
  price: number,
  screen: string,
  processor: string,
  ram: number,
};

export const phoneValidator = (optional: boolean) => checkSchema({
  name: {
    in: ['body'],
    isString: true,
    optional: {
      options: {
        nullable: optional,
      },
    },
  },
  manufacturer: {
    in: ['body'],
    isString: true,
    optional: {
      options: {
        nullable: optional,
      },
    },
  },
  description: {
    in: ['body'],
    isString: true,
    optional: {
      options: {
        nullable: optional,
      },
    },
  },
  color: {
    in: ['body'],
    isString: true,
    optional: {
      options: {
        nullable: optional,
      },
    },
  },
  price: {
    in: ['body'],
    isNumeric: true,
    optional: {
      options: {
        nullable: optional,
      },
    },
  },
  screen: {
    in: ['body'],
    isString: true,
    optional: {
      options: {
        nullable: optional,
      },
    },
  },
  processor: {
    in: ['body'],
    isString: true,
    optional: {
      options: {
        nullable: optional,
      },
    },
  },
  ram: {
    in: ['body'],
    isInt: true,
    toInt: true,
    optional: {
      options: {
        nullable: optional,
      },
    },
  },
});
