function PostDetail({ post, setCurrentOpenedPost }) {
  return (
    <div>
      <button onClick={() => setCurrentOpenedPost(null)}>close</button>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
export default PostDetail;
