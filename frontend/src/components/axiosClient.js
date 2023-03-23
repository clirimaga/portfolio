import axios from "axios";
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BE_URL,
});

export default axiosClient;
