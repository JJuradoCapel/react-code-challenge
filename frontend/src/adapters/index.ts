import axios, { AxiosResponse } from 'axios';
import { backendURL } from '../config';

export type PhoneInfo = {
  _id: string,
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
    const res = await axios.get<PhoneInfo[]>(`${backendURL}/phones`)
    callback(res);
  } catch (e) {
    console.error(e);
  }
};

export const postPhone = async (data: FormData) => {
  try {
    return axios.post<PhoneInfo[]>(`${backendURL}/phones`, data);
  } catch (e) {
    console.error(e);
  }
};

export const deletePhone = async (id: string) => {
  try {
    return axios.delete<PhoneInfo[]>(`${backendURL}/phones/${id}`);
  } catch (e) {
    console.error(e);
  }
};