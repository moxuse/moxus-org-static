import * as React from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { PageProps, getPostContent, listPages } from '../../../services/page';
import Post from '../../../components/Post';
import Pagenator from '../../../components/Pagenator';
import Link from 'next/link';

import styles from './styles.module.css';

const PostPage: React.VFC<PageProps> = ({ posts, currentPage, totalPages }): JSX.Element => {
  return (
    <div className={styles.pages} key={`page-${currentPage}`}>
      <h1><Link href="/blog">blog</Link></h1>
      <ul>{
        posts.map(post => {
          return(
            <li key={'posts-' + post.id}>
              { <Post {...post}></Post> }
            </li>)
        }) 
      }</ul>
      <Pagenator
        currentPage={ currentPage } 
        dataLength={ totalPages }
      ></Pagenator>
    </div>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) =>  {
  const props: PageProps = await getPostContent(context);
  
  if (context === undefined || props.posts.length === 0) {
    throw new Error("page/[imdex].tsx > getStaticProps: Args are invalid.");
  }
  return { props };
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: listPages(),
    fallback: false,
  };
};

export default PostPage;
