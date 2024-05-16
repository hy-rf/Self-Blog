import { api } from '@/app/api';
import PostDetail from '@/app/components/post/postdetail';
import PostEditor from '@/app/components/post/posteditor';
import PostUnit from '@/app/components/post/postunit';
import { type PostListViewModel } from '@/app/types/PostListViewModel';
import isLogin from '@/app/utility/islogin';
import { useEffect, useState } from 'react';
function Post() {
  let posts: PostListViewModel[] = [];
  const [postlist, setPostList] = useState(posts);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  useEffect(() => {
    api.getPosts().then((res) => {
      setPostList(res);
    });
  }, []);
  return (
    <>
      {isLogin() && (
        <button onClick={() => setIsEditorOpen(!isEditorOpen)}>
          Add New Post
        </button>
      )}
      {isEditorOpen && <PostEditor></PostEditor>}
      {false && <PostDetail></PostDetail>}
      {postlist.map((ele) => {
        return <PostUnit post={ele} key={ele.id}></PostUnit>;
      })}
    </>
  );
}
export default Post;
