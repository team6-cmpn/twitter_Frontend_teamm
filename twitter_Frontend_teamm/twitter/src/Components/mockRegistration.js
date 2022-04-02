import axios from 'axios';

export const post = async payload => {
  const URL = `http://localhost:8000/signUpUsers`;
  try {
    const response = await axios(URL, {
      method: 'post',
      data: payload,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logInPost = async payload => {
  const URL = `http://localhost:8000/logInUsers`;
  try {
    const response = await axios(URL, {
      method: 'post',
      data: payload,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const googlePost = async payload => {
  const URL = `http://localhost:8000/googleUsers`;
  try {
    const response = await axios(URL, {
      method: 'post',
      data: payload,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const googleProfilePost = async payload => {
  const URL = `http://localhost:8000/googleProfiles`;
  try {
    const response = await axios(URL, {
      method: 'post',
      data: payload,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};