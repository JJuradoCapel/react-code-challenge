import { Request, Response } from 'express';

// eslint-disable-next-line import/prefer-default-export
export const getPhonesView = (req: Request, res: Response) => res.status(200).send([{
  id: 0,
  name: 'iPhone 7',
  manufacturer: 'Apple',
  description: 'lorem ipsum dolor sit amet consectetur.',
  color: 'black',
  price: 769,
  imageFileName: 'IPhone_7.png',
  screen: '4,7 inch IPS',
  processor: 'A10 Fusion',
  ram: 2,
}]);
