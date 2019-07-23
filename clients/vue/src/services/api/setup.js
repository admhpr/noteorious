// import axios from "axios";

// const baseDomain = "http://localhost";
// const baseURL = `${baseDomain}/api`;
// const headers = {
//   "Content-Type": "application/x-www-form-urlencoded",
//   "Access-Control-Allow-Origin": "http://localhost:8081"
// };

// export default axios.create({
//   baseURL,
//   headers
// });

// TODO: use axios
export default {
  get: () => new Promise(resolve => resolve({ data: [{ id: 1 }, { id: 2 }] })),
  post: params => new Promise(resolve => resolve({ data: params }))
};
