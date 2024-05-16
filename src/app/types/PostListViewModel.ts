import { type Tag } from './Tag';
import { type UserBriefViewModel } from './UserBriefViewModel';
export interface PostListViewModel {
  id: number;
  title: string;
  contentPreview: string;
  created: string;
  modified: string;
  userId: number;
  userName: string;
  tags: Tag[];
  usersWhoLike: UserBriefViewModel[];
}
