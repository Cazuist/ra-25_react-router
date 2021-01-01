import { useState } from 'react';
import PostsContext from '../../contexts/PostsContext';

export default function PostsWidget(props) { 
  const [posts, setPosts] = useState([{name: 'Vasya', content: 'Lorem ipsum...', id: 0}]);
  const [newPostContent, setNewPostContent] = useState('start');
  const [value, setValue] = useState('start');
  
  const onNewClick = () => {
    setValue('');
    setNewPostContent('');
  }

  const onNewChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <PostsContext.Provider value={{posts, onNewClick, newPostContent, onNewChange, value}} >
      <div className="posts-widget_container">
        {props.children}
      </div>
    </PostsContext.Provider>
  );
}