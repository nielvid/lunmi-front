import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const register = async (body) => {
  const { data } = await instance.post(`/register`, body);
  return data;
};

export const speaker = async (body) => {
  const { data } = await instance.get(`/speaker/${body}`);
  return data;
};
