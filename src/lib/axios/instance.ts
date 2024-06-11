import axios from "axios";

// Create an Axios instance
const instance = axios.create({
  baseURL: "https://dog.ceo/api",
});

export default instance;
