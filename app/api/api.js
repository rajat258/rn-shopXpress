import axios from 'axios';
import {ApiStrings, baseURL} from '../constants';

const header = {
  'X-Authorization': 'sk_51823b0fedbb33b950ccad805bbd123257e10cc1f3041',
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const api = axios.create({
  baseURL: baseURL,
  headers: header,
});

export const getData = async endpoint => {
  const res = await api.get(endpoint);
  return res.data;
};

export const postData = async ({endpoint, body}) => {
  const res = await api.post(endpoint, JSON.stringify(body));
  return res.data;
};

export const putData = async ({endpoint, body}) => {
  const res = await api.put(endpoint, JSON.stringify(body));
  return res.data;
};

export const deleteData = async endpoint => {
  const res = await api.delete(endpoint);
  return res.data;
};

export const getCart = async () => {
  const res = await api.get(ApiStrings.cart);
  return res.data;
};

export const isEmailAvailable = async email => {
  const res = await getData(`${ApiStrings.customer}?query=${email}`);
  if (res?.data) {
    return res.data;
  } else {
    return false;
  }
};

export default api;
