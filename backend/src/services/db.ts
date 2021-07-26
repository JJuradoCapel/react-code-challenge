import mongoose from 'mongoose';

import { dbUri } from '../config/config';
import PhoneModel from '../models/phone';

import initialData from '../../initialData/initialPhones.json';

export const loadInitialData = () => PhoneModel.insertMany(initialData);

export const initializeDB = async () => {
  await mongoose.connect(`mongodb://${dbUri}`);
  const firstPhone = await loadInitialData();
  if (!firstPhone) await PhoneModel.insertMany(initialData);
};
