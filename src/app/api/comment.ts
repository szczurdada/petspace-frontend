import api from "@/config/axios";

export const createComment = async (content: string, postId?: string, photoId?: string) => {
  try {
    const { data } = await api.post("/comments", { content, postId, photoId });
    return data;
  } catch {
    return null;
  }
};

export const getComments = async (postId: string) => {
  try {
    const { data } = await api.get(`/comments/postwall/${postId}`);
    return data;
  } catch {
    return null;
  }
};

export const getPhotoComments = async (photoId: string) => {
  try {
    const { data } = await api.get(`/comments/photo/${photoId}`);
    return data;
  } catch {
    return null;
  }
};