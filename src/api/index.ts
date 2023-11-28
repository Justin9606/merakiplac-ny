// api.ts
import axios from 'axios';

const NYT_API_KEY = 'lWgc32XlF3jKmGbISYX1120OCHRAtw3G';
const BASE_URL = 'https://api.nytimes.com/svc';

const API = axios.create({
  baseURL: BASE_URL,
  params: {
    'api-key': NYT_API_KEY,
  },
});

export default API;
