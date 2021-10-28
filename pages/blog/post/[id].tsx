// @flow
import * as React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { PostProps, getPostContent, listPosts } from '../../../services/post';
import Post from '../../../components/Post';

const PostPage: React.VFC<PostProps> = (props): JSX.Element => {
    return (
      <div>
        <Post {...props}></Post>
      </div>
    )
}

export const getStaticProps: GetStaticProps<PostProps> = async (context) =>  {
  const props = await getPostContent(context);
  if (!props.title || typeof props.title !== "string") {
    throw new Error("post/[date].tsx > getStaticProps: Args are invalid.");
  }
  return { props };
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: listPosts(),
    fallback: false,
  };
};

export default PostPage;
