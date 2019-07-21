import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost.com:3000/api/"
});

export { http };
