import AvatarImg from "@/public/avatar.jpg";
import Img1 from "@/public/img1.jpg";
import Img2 from "@/public/img2.jpg";
import Img3 from "@/public/img3.jpg";
import Img4 from "@/public/img4.jpg";
import Img5 from "@/public/img5.jpg";
import Avatar from "@/public/avatar.jpg";
import Avatar2 from "@/public/avatar2.jpg";
import dayjs from "dayjs";
import postImage from "@/public/postImage.jpg";
import { Friend, Post } from "@/types";

export const MOCK_PROFILE = {
  avatar: AvatarImg,
  name: "Vova",
  username: "Luthirija",
  breed: "Dachshund",
  age: "1 year",
  city: "Warsaw",
  bio: "Still learning to type with paws...",
  friendsCount: 5,
  photosCount: 10,
  placesCount: 16,
} as const;

export const MOCK_PHOTOS = {
  img1: Img1,
  img2: Img2,
  img3: Img3,
  img4: Img4,
  img5: Img5,
  img6: Img5,
};

export const MOCK_FRIENDS: Friend[] = [
  {
    id: "14",
    avatar: AvatarImg,
    name: "Barney",
    username: "fff",
    breed: "Affenpinscher",
  },
  {
    id: "13",
    avatar: AvatarImg,
    name: "Bob",
    username: "fddff",
    breed: "Dachshund",
  },
  {
    id: "16",
    avatar: AvatarImg,
    name: "Tom",
    username: "ffddf",
    breed: "Dachshund",
  },
];

export const MOCK_POSTS: Post[] = [
  {
    id: "1",
    author: { id: "1", username: "ddd", name: "Vova", avatar: Avatar },
    content: "I hate Natasha",
    createdAt: dayjs().toDate(),
    likes: 2174,
    comments: 5,
    reposts: 1,
  },
  {
    id: "2",
    author: { id: "2", username: "ddd", name: "Natasha", avatar: Avatar2 },
    content: "I love Vova",
    image: postImage,
    createdAt: dayjs().subtract(5, "day").toDate(),
    likes: 10,
    comments: 2,
    reposts: 4,
  },
];

//url params
