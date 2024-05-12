import api from '@/api';
import PostUnit from '@/components/post/postunit';
function Post() {
  let test = api.mockPostApi;
  return (
    <>
      {test.map((i) => {
        return <PostUnit key={i.id} post={i} />;
      })}
    </>
  );
}
export default Post;
