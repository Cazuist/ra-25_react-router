import { Link } from 'react-router-dom';

export default function PostItem({ post }) {
  return (
    <Link to={`/posts/${post.id}`} className='post-item_box'>
      <div className="post-item_header">
        <img className="post-item_avatar" 
          src={post.avatar} 
          alt={post.name} />
        
        <div className="post-item_info">
          <span className="post-item_info_name">{post.name}</span>
          <span className="post-item_info_time">{post.created}</span>
        </div>
      </div>

      <div className="post-item_content">{post.content}</div>
    </Link>
  );
}