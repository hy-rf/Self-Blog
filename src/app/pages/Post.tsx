import PostDetail from '@/app/components/post/PostDetail';
import PostEditor from '@/app/components/post/PostEditor';
import isLogin from '@/app/utility/islogin';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PostList from '../components/post/PostList';
import { Link } from 'react-router-dom';
function Post() {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <>
      <Link to={'/create/post'}>New Post</Link>
      <Routes>
        <Route path="/post/:id" element={<PostDetail />} />
        {isEditorOpen && <PostEditor></PostEditor>}
        <Route path="" element={<PostList />} />
      </Routes>
    </>
  );
}
export default Post;
