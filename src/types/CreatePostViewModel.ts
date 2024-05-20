import type CreateTagViewModel from './CreateTagViewModel';
export default interface CreatePostViewModel {
  title: string;
  content: string;
  NewTags: CreateTagViewModel[];
}
