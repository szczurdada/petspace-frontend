export interface User {
  id: string;
  username: string;
}

export interface Photo {
  _id: string;
  publicId: string;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  likes: number;
  comments: number;
  createdAt: Date;
}
