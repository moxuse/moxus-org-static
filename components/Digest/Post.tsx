// @flow
import React from 'react';
import { PostProps } from '../../services/post';

import styles from "./styles.module.css";

type PostPropsType = {
  posts: PostProps[]
}

const Post: React.FC<PostPropsType> = ({ posts }): JSX.Element => {
  const makeGrid = () => {
    return posts.map(item => {
      return (<li key={ item.title }>
        <h5>{ item.title }</h5>
      </li>);
    });
  };

  return (
    <div className={styles.post}>
      <div>
        <h4>{ `[recent posts]` }</h4>
      </div>
      <ul>
        { makeGrid() }
      </ul>
    </div>
  )
};

export default Post;