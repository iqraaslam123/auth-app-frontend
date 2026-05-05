// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://auth-app-backend-inky.vercel.app/api', // apna backend port yahan likhو
// });

// export default api;

import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export default api;