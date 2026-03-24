import axios from "axios";

export const getUser = async (username: string) => {
  try {
    const { data } = await axios.get(`http://localhost:3005/user/${username}`);
    return data;
  } catch (e) {
    throw e;
  }
};