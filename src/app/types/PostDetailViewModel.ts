import { type Tag } from './Tag';
import { type UserBriefViewModel } from './UserBriefViewModel';
export interface PostDetailViewModel {
  id: number;
  title: string;
  contentPreview: string;
  created: string;
  updated: string;
  userId: number;
  userName: string;
  tags: Tag[];
  usersWhoLike: UserBriefViewModel[];
  likes: number;
  replies: number;
}
