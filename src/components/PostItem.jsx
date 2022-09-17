import React from 'react';
import MyButton from './UI/button/MyButton';
import cl from './PostItem.module.css'

function PostItem(props) {
  return (
    <div className={cl.post}>
      <div className={cl.post__content}>
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className={cl.post__btns}>
        <MyButton className={cl.post__btn}>Открыть</MyButton>
        <MyButton className={cl.post__btn} onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
}

export default PostItem;
