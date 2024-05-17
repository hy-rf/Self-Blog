import PostDetail from '@/app/components/post/PostDetail';
import { Routes, Route } from 'react-router-dom';
import PostList from '../components/post/PostList';
import { Link } from 'react-router-dom';
function Post() {
  return (
    <>
      <Link to={'/create/post'}>New Post</Link>
      <Routes>
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="" element={<PostList />} />
      </Routes>
    </>
  );
}
export default Post;
