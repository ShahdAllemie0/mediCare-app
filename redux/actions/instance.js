import axios from "axios";

const instance = axios.create({
  //atheen's url
  //baseURL: "http://192.168.100.21:8000/",
  baseURL: "http://10.190.1.223:8000/",
});
export default instance;
