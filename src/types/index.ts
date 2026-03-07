export interface User {
    id: string;
    username: string;
}

export interface Post {
    id: string;
    author: User;
    content: string;
    likes: number;
    comments: number;
    createdAt: Date;
}