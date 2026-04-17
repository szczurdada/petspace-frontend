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
  createdAt: string;
  likes?: number;
  comments?: Comment[];
  reposts?: number;
}

export interface Post {
  id: string;
  user: User;
  content: string;
  image?: string;
  likes: number;
  comments?: Comment[];
  reposts?: number;
  createdAt: Date;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  image?: string;
  likes: number;
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
  avatar?: string;
  breed?: string;
  birthDate?: number;
  gender?: string;
  city?: string;
  bio?: string;
  interests?: Interests;
  photos?: Photo[];
  friends?: Friend[];
  postwallId?: string;
  posts?: Post[];
}
