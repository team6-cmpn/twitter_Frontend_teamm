import axios from 'axios';

export const searchh = async payload => {
  const URL = `http://www.twi-jay.xyz:8000/search`;
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