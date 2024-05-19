import { Card, Divider } from '@mui/material';
import './PostUnit.css';
import { type PostListViewModel } from '@/types/PostListViewModel';
import { Tag } from '@/types/Tag';
import { Link } from 'react-router-dom';
function PostUnit({ post }: { post: PostListViewModel }) {
  return (
    <Card className="postunit">
      <Link to={`/post/${post.id}`}>{post.title}</Link>
      <Divider />
      <p>{post.contentPreview}</p>
      <Divider />
      <p>{post.created}</p>
      <p>{post.userName}</p>
      <p>
        {post.tags.map((ele: Tag) => {
          return <span key={ele.id}>#{ele.name} </span>;
        })}
      </p>
    </Card>
  );
}

export default PostUnit;
