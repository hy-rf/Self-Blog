import { api } from '@/app/api';
import { type PostListViewModel } from '@/app/types/PostListViewModel';
import { useEffect, useState } from 'react';
import PostUnit from './postunit';
function PostList() {
  let posts: PostListViewModel[] = [];
  const [postlist, setPostList] = useState(posts);
  useEffect(() => {
    api.getPosts().then((res) => {
      setPostList(res);
    });
  }, []);
  return postlist.map((ele) => {
    return <PostUnit post={ele} key={ele.id}></PostUnit>;
  });
}
export default PostList;
