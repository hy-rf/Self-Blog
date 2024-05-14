import './postunit.css';
import Proptypes from 'prop-types';
function PostUnit(props: any) {
  return (
    <div className="postunit">
      <h3 onClick={() => props.openPost(props.post)}>{props.title}</h3>
      <p>{props.content}</p>
      <p>{props.created}</p>
      <p>{props.userName}</p>
      <p>
        {props.tags.map((ele: string) => {
          return <span key={ele}>#{ele} </span>;
        })}
      </p>
    </div>
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
