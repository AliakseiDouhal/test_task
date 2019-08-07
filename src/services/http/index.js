import axios from 'axios';
import Config from 'react-native-config';

const baseURL = 'https://api.football-data.org/v2/';

const http = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json', 'X-Auth-Token': Config.API_KEY,
  },
});

http.interceptors.request.use(async (request) => {
  return { ...request };
}, error => Promise.reject(error));

export default http;
