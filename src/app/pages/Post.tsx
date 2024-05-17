import PostDetail from '@/app/components/post/PostDetail';
import PostEditor from '@/app/components/post/PostEditor';
import isLogin from '@/app/utility/islogin';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PostList from '../components/post/PostList';
function Post() {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <>
      <Routes>
        {isLogin() && (
          <button onClick={() => setIsEditorOpen(!isEditorOpen)}>
            Add New Post
          </button>
        )}
        <Route path="post/:id" element={<PostDetail />} />
        {isEditorOpen && <PostEditor></PostEditor>}
        <Route path="" element={<PostList />} />
      </Routes>
    </>
  );
}
export default Post;
