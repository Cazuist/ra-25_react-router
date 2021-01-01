import { useContext } from 'react';
import PostsContext from '../../contexts/PostsContext';

import CreatePostInput from './CreatePostInput';
import PostsList from './PostsList';

export default function StartPage() {  
 const { posts } = useContext(PostsContext);
  
  return (
    <>
      <CreatePostInput />
      <PostsList posts={ posts } />
    </>
  );
}
