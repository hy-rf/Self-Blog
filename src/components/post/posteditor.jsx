import { useState } from 'react';
import Proptypes from 'prop-types';
import style from './posteditor.module.css';
function PostEditor({
  mode = 'create',
  currentPost = {},
  setIsPostEditorOpen,
  addPost,
}) {
  const [post, setPost] = useState(mode === 'create' ? {} : currentPost);
  function handleSubmitPost() {
    switch (mode) {
      case 'create':
        console.info('create post');
        break;
      case 'edit':
        console.info('edit post');
        break;
      default:
        break;
    }
  }
  return (
    <div className={style['post-editor']}>
      <button onClick={() => setIsPostEditorOpen(false)}>close</button>
      <p>
        {mode === 'create'
          ? 'you are user1 creating a new post'
          : ('editing post %d', currentPost.id)}
      </p>
      <input type="text" placeholder="title"></input>
      <textarea placeholder="content"></textarea>
      <input type="text" placeholder="tags"></input>
      <button onClick={handleSubmitPost}>submit</button>
    </div>
  );
}
PostEditor.propTypes = {
  mode: Proptypes.string,
  currentPost: Proptypes.object,
  setIsPostEditorOpen: Proptypes.func,
  addPost: Proptypes.func,
};
export default PostEditor;
