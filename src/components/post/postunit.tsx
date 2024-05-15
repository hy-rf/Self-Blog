import { Card, Divider } from '@mui/material';
import './postunit.css';
import Proptypes from 'prop-types';
function PostUnit(props: any) {
  return (
    <Card className="postunit">
      <h3>{props.title}</h3>
      <Divider />
      <p>{props.content}</p>
      <Divider />
      <p>{props.created}</p>
      <p>{props.userName}</p>
      <p>
        {props.tags.map((ele: string) => {
          return <span key={ele}>#{ele} </span>;
        })}
      </p>
    </Card>
  );
}
PostUnit.propTypes = {
  post: Proptypes.object,
  title: Proptypes.string,
  content: Proptypes.string,
  created: Proptypes.string,
  userName: Proptypes.string,
  tags: Proptypes.array,
  openPost: Proptypes.func,
};

export default PostUnit;
