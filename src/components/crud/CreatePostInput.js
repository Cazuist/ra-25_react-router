import { Link } from 'react-router-dom';

import { useContext } from 'react';
import PostsContext from '../../contexts/PostsContext';

export default function CreatePostInput(props) {
  const {onNewClick, onNewChange, value } = useContext(PostsContext);

  return (
    <div className='create-box'>
      <textarea 
        name='new-post' 
        className='new-post_input'
        onChange={onNewChange} 
        value={value}></textarea>   

      <Link to='/posts/new' 
        className={`btn new-post_btn${!value.trim() ? ' inactive' : ''}`}
        onClick={onNewClick}
      >Создать</Link>
    </div>
  );
}