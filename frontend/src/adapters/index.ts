import axios, { AxiosResponse } from 'axios';

export type PhoneInfo = {
  name: string,
  manufacturer: string,
  description: string,
  color: string,
  price: number,
  imageFileName: string,
  screen: string,
  processor: string,
  ram: number,
}

export const getPhones = async (callback: (res: AxiosResponse<PhoneInfo[]>) => any) => {
  try {
    const res = await axios.get<PhoneInfo[]>('http://localhost:8080/phones')
    callback(res);
  } catch (e) {
    console.error(e);
  }
};