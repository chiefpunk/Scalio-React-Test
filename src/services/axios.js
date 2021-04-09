import axios from "axios";
import * as config from "../utils/config";

const { API_ENDPOINT } = config;

const apiClient = axios.create({
  baseURL: `${API_ENDPOINT}`
});

export default apiClient;
