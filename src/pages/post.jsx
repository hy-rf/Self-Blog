import api from '@/api';
import PostDetail from '@/components/post/postdetail';
import PostEditor from '@/components/post/posteditor';
import PostUnit from '@/components/post/postunit';
import isLogin from '@/utility/islogin';
import { useState } from 'react';
function Post() {
  const [posts, setPosts] = useState(api.mockPostApi);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [currentOpenedPost, setCurrentOpenedPost] = useState(null);
  console.log(isLogin());
  return (
    <>
      {isLogin() && (
        <button onClick={() => setIsEditorOpen(!isEditorOpen)}>
          Add New Post
        </button>
      )}
      {isEditorOpen && (
        <PostEditor setIsPostEditorOpen={setIsEditorOpen}></PostEditor>
      )}
      {currentOpenedPost != null && (
        <PostDetail
          post={currentOpenedPost}
          setCurrentOpenedPost={setCurrentOpenedPost}
        ></PostDetail>
      )}
      {posts.map((ele) => {
        return (
          <PostUnit
            openPost={setCurrentOpenedPost}
            post={ele}
            key={ele.id}
            title={ele.title}
            contentPreview={ele.contentPreview}
            created={ele.created}
            userName={ele.userName}
            tags={ele.tags}
          />
        );
      })}
    </>
  );
}
export default Post;
