import { PostImage } from './PostImages';
import { User } from './User';

export interface Post {
  postId: number;
  User: User;
  content: string;
  Images: PostImage[];
  createdAt: Date;
}
