import { API_URL } from "@/config/env";
import axios from "axios";

export const createComment = async (content: string, postId?: string, photoId?: string) => {
  try {
    const { data } = await axios.post(
      `${API_URL}/comments`,
      { content, postId, photoId },
      { headers: { Authorization: localStorage.getItem("token") } },
    );
    return data;
  } catch {
    return null;
  }
};

export const getComments = async (postId: string) => {
  try {
    const { data } = await axios.get(`${API_URL}/comments/postwall/${postId}`);
    return data;
  } catch {
    return null;
  }
};

export const getPhotoComments = async (photoId: string) => {
  try {
    const { data } = await axios.get(`${API_URL}/comments/photo/${photoId}`);
    return data;
  } catch {
    return null;
  }
};