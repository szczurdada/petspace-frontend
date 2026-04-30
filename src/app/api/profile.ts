import api from "@/config/axios";
import type { Dayjs } from "dayjs";

interface UpdateProfileData {
  bio: string;
  gender: string;
  birthDate?: Dayjs;
  country: string;
  city: string;
  breed: string;
}

export const updateProfile = (username: string, data: UpdateProfileData) => {
  return api.put(`/user/${username}`, {
    ...data,
    birthDate: data.birthDate?.valueOf(),
  });
};