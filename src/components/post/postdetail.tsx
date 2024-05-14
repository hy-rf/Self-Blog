import style from './postdetail.module.css';
import { type Post } from '@/types/post';
function PostDetail(post: Post, setCurrentOpenedPost: any) {
  return (
    <div className={style.container}>
      <button onClick={() => setCurrentOpenedPost(null)}>close</button>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
export default PostDetail;
