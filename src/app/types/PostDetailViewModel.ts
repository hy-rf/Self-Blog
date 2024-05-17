import { type Tag } from './Tag';
import { type UserBriefViewModel } from './UserBriefViewModel';
export interface PostDetailViewModel {
  id: number;
  title: string;
  content: string;
  created: string;
  updated: string;
  userId: number;
  userName: string;
  tags: Tag[];
  likeUsers: UserBriefViewModel[];
  numberOfLikes: number;
  numberOfReplies: number;
}
