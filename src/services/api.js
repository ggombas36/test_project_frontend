import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000';

export const getIMUData = async () => {
  const response = await axios.get(`${API_BASE_URL}/imu`);
  return response.data;
};

export const getDBWData = async () => {
  const response = await axios.get(`${API_BASE_URL}/dbw`);
  return response.data;
};