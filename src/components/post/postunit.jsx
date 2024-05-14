import style from './postunit.module.css';
import Proptypes from 'prop-types';
function PostUnit(props) {
  return (
    <div className={style.postunit}>
      <h3 onClick={() => props.openPost(props.post)}>{props.title}</h3>
      <p>{props.content}</p>
      <p>{props.created}</p>
      <p>{props.userName}</p>
      <p>
        {props.tags.map((ele) => {
          return <span key={ele}>#{ele} </span>;
        })}
      </p>
    </div>
  );
}
PostUnit.propTypes = {
  title: Proptypes.string,
  content: Proptypes.string,
  created: Proptypes.string,
  userName: Proptypes.string,
  tags: Proptypes.array,
};

export default PostUnit;
