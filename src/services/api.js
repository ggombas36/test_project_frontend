import axios from 'axios';

const API_BASE_URL = 'https://test-project-backend-a49q.onrender.com';

export const getIMUData = async () => {
  const response = await axios.get(`${API_BASE_URL}/imu`);
  return response.data;
};

export const getDBWData = async () => {
  const response = await axios.get(`${API_BASE_URL}/dbw`);
  return response.data;
};