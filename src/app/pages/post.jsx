import { api } from '@/app/api';
import PostDetail from '@/app/components/post/postdetail';
import PostEditor from '@/app/components/post/posteditor';
import PostUnit from '@/app/components/post/postunit';
// import { type Post } from '@/types/post';
import isLogin from '@/app/utility/islogin';
import { useEffect, useState } from 'react';
function Post() {
  const [posts, setPosts] = useState(api.mockPostApi);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [currentOpenedPost, setCurrentOpenedPost] = useState(null);
  function addPost(post) {
    setPosts([...posts, post]);
  }
  useEffect(() => {
    api.getPosts().then((res) => {
      console.log(res);
      setPosts(res);
    });
  }, []);
  return (
    <>
      {isLogin() && (
        <button onClick={() => setIsEditorOpen(!isEditorOpen)}>
          Add New Post
        </button>
      )}
      {isEditorOpen && (
        <PostEditor
          addPost={addPost}
          setIsPostEditorOpen={setIsEditorOpen}
        ></PostEditor>
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
            openPost={() => setCurrentOpenedPost(ele)}
            post={ele}
            key={ele.id}
            title={ele.title}
            content={ele.content}
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
