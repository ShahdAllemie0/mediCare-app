import axios from "axios";

const instance = axios.create({
  baseURL: "http://10.190.1.223:8000",
});
export default instance;
