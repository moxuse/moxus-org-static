// @flow
import React from 'react';
import Link from "next/Link";
import { PostProps } from '../../services/post';

import styles from "./styles.module.css";

type PostPropsType = {
  posts: PostProps[]
}

const Post: React.FC<PostPropsType> = ({ posts }): JSX.Element => {
  const makeGrid = () => {
    return posts.map(item => {
      let path_name = '';
      
      if (item.path) {
        path_name = item.path;
      }

      return (<li key={item.title}>
        <Link href={`${path_name}`}>
          <h5>{ item.title }</h5>
        </Link>
      </li>);
    });
  };

  return (
    <div className={styles.post}>
      <div>
        <h4>{ `[recent post]` }</h4>
      </div>
      <ul>
        { makeGrid() }
      </ul>
    </div>
  )
};

export default Post;