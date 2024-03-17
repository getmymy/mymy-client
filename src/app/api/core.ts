import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// axios setting 어떻게 할 건지

export const get = async (url: string) => {
  try {
    const res = await instance.get(url);
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};

export const post = async (url: string, data: unknown) => {
  try {
    const res = await instance.post(url, data);
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
