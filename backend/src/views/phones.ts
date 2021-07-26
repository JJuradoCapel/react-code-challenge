import { Request, Response } from 'express';
import PhoneModel from '../models/phone';

// eslint-disable-next-line import/prefer-default-export
export const getPhonesView = async (req: Request, res: Response) => {
  const phones = await PhoneModel.find({});
  return res.status(200).send(phones);
};
