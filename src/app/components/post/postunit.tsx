import { Card, Divider } from '@mui/material';
import './postunit.css';
import { type PostListViewModel } from '@/app/types/PostListViewModel';
import { Tag } from '@/app/types/Tag';
function PostUnit({ post }: { post: PostListViewModel }) {
  return (
    <Card className="postunit">
      <h3>{post.title}</h3>
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
