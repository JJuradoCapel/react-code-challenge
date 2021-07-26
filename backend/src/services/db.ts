import mongoose from 'mongoose';

import { bypassInitialDataLoad, dbUri } from '../config/config';
import PhoneModel from '../models/phone';

import initialData from '../../initialData/initialPhones.json';

export const loadInitialData = () => PhoneModel.insertMany(initialData);

export const initializeDB = async () => {
  await mongoose.connect(`mongodb://${dbUri}`);
  const firstPhone = await loadInitialData();
  if (!firstPhone && !bypassInitialDataLoad) await PhoneModel.insertMany(initialData);
};
