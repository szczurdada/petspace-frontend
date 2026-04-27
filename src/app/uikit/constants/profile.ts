import AvatarImg from "@/public/avatar.jpg";
import FriendImg from "@/public/friend1.jpg";
import Img1 from "@/public/img1.jpg";
import Img2 from "@/public/img2.jpg";
import Img3 from "@/public/img3.jpg";
import Img4 from "@/public/img4.jpg";
import Img5 from "@/public/img5.jpg";
import { Friend } from "@/types";

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
    city: "New York",
    isOnline: true,
    friendsCount: 45,
  },
  {
    id: "13",
    avatar: FriendImg,
    name: "Bob",
    username: "fddff",
    breed: "Dachshund",
    city: "Warsaw",
    isOnline: true,
    friendsCount: 4,
  },
  {
    id: "16",
    avatar: FriendImg,
    name: "Tom",
    username: "ffddf",
    breed: "Dachshund",
    city: "Warsaw",
    isOnline: false,
    friendsCount: 89,
  },
];

//url params
