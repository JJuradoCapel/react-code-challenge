import axios, {AxiosResponse} from 'axios';

export const getPhones = async (callback: (res: AxiosResponse<any>) => any) => {
  try {
    const res = await axios.get('http://localhost:8080/phones')
    callback(res);
  } catch (e) {
    console.error(e);
  }
};