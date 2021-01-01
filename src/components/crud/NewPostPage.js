import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NewPostPage(props) {
  const { content } = props;
  const [value, setValue] = useState(content);

  const onInputChange = (e) => {
    setValue(e.target.value);
  }

  const onCloseClick = () => {
    setValue('');
  }

  const onPublishClick = () => {
    setValue('');
    props.onPublishClick(value);
  }

  return (
    <div className="new-post_card">
      <textarea 
        className="new-post_card_input" 
        value={value}
        onChange={onInputChange}></textarea>


      <div className="btn_row">
        <Link to='/' 
          className={`btn publish_btn${!value.trim() ? ' inactive' : ''}`}
          onClick={() => onPublishClick(value)}
        >Опубликовать</Link>

        <Link to='/'
          className="btn close-btn"
          onClick={onCloseClick}
        >Закрыть</Link>
      </div>      
    </div>
  )
}
