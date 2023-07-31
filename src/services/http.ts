import axios from "axios";
import { BASE_URL } from "../constants";

const getSummary = async () => {
  const { data } = await axios.get(`${BASE_URL}/summary`);

  return data;
};

const getSoftSkills = async () => {
  const { data } = await axios.get(`${BASE_URL}/softSkills`);

  return data;
};

const getTechSkills = async () => {
  const { data } = await axios.get(`${BASE_URL}/techSkills`);

  return data;
};

const getEducation = async () => {
  const { data } = await axios.get(`${BASE_URL}/education`);

  return data;
};

const getWorkExperience = async () => {
  const { data } = await axios.get(`${BASE_URL}/workExperience`);

  return data;
};

const getProjects = async () => {
  const { data } = await axios.get(`${BASE_URL}/projects`);

  return data;
};

const getLanguages = async () => {
  const { data } = await axios.get(`${BASE_URL}/languages`);

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
