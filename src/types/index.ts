import { StaticImageData } from "next/image";

export interface User {
  id: string;
  username: string;
  name: string;
  avatar?: string | StaticImageData;
  city?: string;
  breed?: string;
  isOnline?: boolean;
}

export type Friend = User;

export interface Photo {
  id: string;
  publicId: string;
  likes?: number;
  comments?: number;
  reposts?: number;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  image?: StaticImageData | string;
  likes?: number;
  comments?: number;
  reposts?: number;
  createdAt: Date;
}

export interface Interests {
  favoriteToys?: string;
  favoriteTreats?: string;
  favoriteActivities?: string;
  crimes?: string;
  guiltyHabits?: string;
  humans?: string;
}

export interface BannerInfo {
  username: string;
  name: string;
  avatar?: string | StaticImageData;
  breed?: string;
  birthDate?: number;
  gender?: string;
  city?: string;
  bio?: string;
  interests?: Interests;
  photos?: Photo[];
  friends?: Friend[];
}
