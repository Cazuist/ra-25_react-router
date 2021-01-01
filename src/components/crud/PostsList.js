import PostItem from './PostItem';

export default function PostsList({posts}) {
  return (
    posts.map((post) => <PostItem key={post.id} post={post} />)
  );
}
