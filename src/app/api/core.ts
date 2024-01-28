import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = async (url: string) => {
  try {
    const res = await instance.get(url);
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
