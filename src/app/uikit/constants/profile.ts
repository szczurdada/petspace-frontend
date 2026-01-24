import AvatarImg from "@/public/avatar.jpg";

export const MOCK_PROFILE = {
  avatar: AvatarImg,
  name: "Barney",
  breed: "Dachshund",
  age: "1 year",
  city: "Warsaw",
  description: "Friendly and playful dachshund who loves long walks and treats!",
  friendsCount: 5,
  photosCount: 10,
  placesCount: 16,
} as const;

//url params