import axios from "axios";

export const getUser = async (username: string) => {
  try {
    const { data } = await axios.get(`http://localhost:3005/user/${username}`);
    console.log("username:", username)
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};