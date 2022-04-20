import axios from 'axios';

export const searchh = async payload => {
  const URL = `http://localhost:8001/search`;
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
