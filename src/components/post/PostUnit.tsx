import { Card, CardContent, Divider, Button, CardActions } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import './PostUnit.css';
import { type PostListViewModel } from '@/types/PostListViewModel';
import { Tag } from '@/types/Tag';
import { Link } from 'react-router-dom';
function PostUnit({ post }: { post: PostListViewModel }) {
  const handleLikePost = () => {
    console.log('like');
  };
  const handleClickReport = () => {
    console.log('report');
  };
  return (
    <Card className="postunit">
      <CardContent>
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
      </CardContent>
      <CardActions disableSpacing>
        {' '}
        <Button onClick={handleLikePost}>
          {true ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
        </Button>
        <Button onClick={handleClickReport}>Report</Button>
      </CardActions>
    </Card>
  );
}

export default PostUnit;
