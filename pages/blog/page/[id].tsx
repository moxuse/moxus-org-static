import * as React from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { PageProps, getPostContent, listPages } from '../../../services/page';

const PostPage: React.FC<PageProps> = (props): JSX.Element => {
  return (
    <div>
      <h2>{props.posts[0].title}</h2>
    </div>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) =>  {
  const props = await getPostContent(context);
  
  if (props.length === 0) {
    throw new Error("page/[id].tsx > getStaticProps: Args are invalid.");
  }
  console.log('props in page', props)
  return { props: {
    posts: [{ title: props[0].title }] 
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: listPages(),
    fallback: false,
  };
};

export default PostPage;
