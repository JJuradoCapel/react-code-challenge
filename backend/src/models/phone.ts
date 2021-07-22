import mongoose from 'mongoose';

const phoneScheme = new mongoose.Schema({
  name: String,
  manufacturer: String,
  description: String,
  color: String,
  price: Number,
  imageFileName: String,
  screen: String,
  processor: String,
  ram: Number,
});
export default mongoose.model('Phones', phoneScheme);
