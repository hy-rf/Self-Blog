import type CreateTagViewModel from './CreateTagViewModel';
export default interface CreatePostViewModel {
  Title: string;
  Content: string;
  NewTags: CreateTagViewModel[];
}
