import { Request, Response } from 'express';
import PhoneModel from '../models/phone';
import { PhoneBody } from '../middlewere/validators';
import { HTTPErrors } from '../types/errors';
import { errorStatusHandle } from '../middlewere/error';

export const getPhonesView = async (req: Request, res: Response) => {
  const phones = await PhoneModel.find({});
  return res.status(200).send(phones);
};

export const postPhonesView = async (req: Request, res: Response) => {
  const data = req.body as PhoneBody;
  const { image } = req.files;
  if (!image || Array.isArray(image)) {
    return errorStatusHandle(res, HTTPErrors.BAD_INPUT, { description: 'Invalid phone photo' });
  }
  await image.mv(`images/${image.name}`);
  const newData = await PhoneModel.create({
    name: data.name,
    manufacturer: data.manufacturer,
    description: data.description,
    color: data.color,
    price: data.price,
    imageFileName: image.name,
    screen: data.screen,
    processor: data.processor,
    ram: data.ram,
  });
  return res.status(201).send(newData);
};

export const deletePhoneView = async (req: Request, res: Response) => {
  await PhoneModel.findByIdAndDelete(req.params.id);
  return res.status(200);
};
