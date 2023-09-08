import axios from "axios";
import { BASE_URL } from "../constants";

export const getSummary = async () => {
  const { data } = await axios.get(`${BASE_URL}/summary`);
  return data;
};

export const getSoftSkills = async () => {
  const { data } = await axios.get(`${BASE_URL}/softSkills`);

  return data;
};

export const getTechSkills = async () => {
  const { data } = await axios.get(`${BASE_URL}/techSkills`);

  return data;
};

export const getEducation = async () => {
  const { data } = await axios.get(`${BASE_URL}/education`);

  return data;
};

export const getWorkExperience = async () => {
  const { data } = await axios.get(`${BASE_URL}/workExperience`);

  return data;
};

export const getProjects = async () => {
  const { data } = await axios.get(`${BASE_URL}/projects`);

  return data;
};

export const getLanguages = async () => {
  const { data } = await axios.get(`${BASE_URL}/languages`);

  return data;
};

// TG

export const getTgKeys = async () => {
  const { data } = await axios.get(`${BASE_URL}/keys`);

  return data;
};

export const sendMessage = async (reqBody: any, token: string) => {
  const TG_URL = `https://api.telegram.org/bot${token}/sendMessage`;
  //  const reqData = {
  //    chat_id: CHAT_ID,
  //    text: message,
  //  };
  const { data } = await axios.post(TG_URL, reqBody);
  return data;
};

export const httpRequests = {
  getSummary,
  getSoftSkills,
  getTechSkills,
  getEducation,
  getProjects,
  getLanguages,
  getWorkExperience,
};
