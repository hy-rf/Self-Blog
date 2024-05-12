import style from './postunit.module.css';
function PostUnit({ post }) {
  return (
    <div className={style.postunit}>
      <h3>{post.title}</h3>
      <p>{post.contentPreview}</p>
      <p>{post.created}</p>
      <p>{post.modified}</p>
      <p>{post.userName}</p>
      <p>
        {post.tags.map((ele) => {
          return ele;
        })}
      </p>
    </div>
  );
}

export default PostUnit;
