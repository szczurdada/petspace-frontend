import api from "@/config/axios";

export const createPost = async (content: string, postwallId: string) => {
  try {
    const { data } = await api.post("/posts", { content, postwallId });
    return data;
  } catch {
    return null;
  }
};

export const getPosts = async (postwallId: string) => {
  try {
    const { data } = await api.get(`/posts/postwall/${postwallId}`);
    return data;
  } catch {
    return null;
  }
};
