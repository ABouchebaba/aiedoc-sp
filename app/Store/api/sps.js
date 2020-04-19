import { BACKEND_URL } from "react-native-dotenv";
import axios from "axios";

export const getReadySps = async () => {
  return axios.get(`${BACKEND_URL}/api/serviceProviders/available`);
};
