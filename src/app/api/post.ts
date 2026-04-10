import { API_URL } from "@/config/env";
import axios from "axios";

export const createPost = async (content: string, postwallId: string) => {
  try {
    const { data } = await axios.post(
      `${API_URL}/posts`,
      { content, postwallId },
      { headers: { Authorization: localStorage.getItem("token") } },
    );
    return data;
  } catch {
    return null;
  }
};

export const getPosts = async (postwallId: string) => {
  try {
    const { data } = await axios.get(`${API_URL}/posts/postwall/${postwallId}`);
    return data;
  } catch {
    return null;
  }
};
