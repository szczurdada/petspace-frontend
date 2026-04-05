import { API_URL } from "@/config/env";
import axios from "axios";

export const getUser = async (username: string) => {
  try {
    const { data } = await axios.get(`${API_URL}/user/${username}`);
    return data;
  } catch (e) {
    return null;
  }
};
