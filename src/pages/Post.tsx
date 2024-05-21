import PostDetail from '../components/post/PostDetail';
import { Routes, Route } from 'react-router-dom';
import PostList from '../components/post/PostList';
function Post() {
  return (
    <>
      <Routes>
        <Route path=":id" element={<PostDetail />} />
        <Route path="" element={<PostList />} />
      </Routes>
    </>
  );
}
export default Post;
