import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.100.26:8000",
});

export default instance;
