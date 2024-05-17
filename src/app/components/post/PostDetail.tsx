import { useParams } from 'react-router-dom';
import { type PostDetailViewModel } from '@/app/types/PostDetailViewModel';
import { useState } from 'react';
import { api } from '@/app/api';
import { Link } from 'react-router-dom';
function PostDetail() {
  const { id } = useParams();
  let emptyPost: PostDetailViewModel = {
    id: 0,
    title: '',
    content: '',
    created: '',
    updated: '',
    userId: 0,
    userName: '',
    tags: [],
    likeUsers: [],
    numberOfLikes: 0,
    numberOfReplies: 0,
  };
  const [post, setPost] = useState<PostDetailViewModel>(emptyPost);
  useState(() => {
    api.getPostDetail(Number(id)).then((res) => {
      setPost(res);
    });
  });
  return (
    <>
      <Link to="/post">back</Link>
      <h5>{post.title}</h5>
      <p>{post.content}</p>
      <p>Created: {post.created}</p>
      <p>Updated: {post.updated}</p>
    </>
  );
}
export default PostDetail;
