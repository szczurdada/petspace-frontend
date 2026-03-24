export interface User {
  id: string;
  username: string;
}

export interface Photo {
  _id: string;
  publicId: string;
  likes?: number;
  comments?: number;
  reposts?: number;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  likes?: number;
  comments?: number;
  reposts?: number;
  createdAt: Date;
}
