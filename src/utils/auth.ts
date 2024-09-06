import axios from 'axios';

const apiEndpoint = 'https://example.com/api';

const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${apiEndpoint}/login`, {
      username,
      password,
    });
    return response.data.token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const logout = async () => {
  try {
    await axios.post(`${apiEndpoint}/logout`);
  } catch (error) {
    console.error(error);
  }
};

export { login, logout };