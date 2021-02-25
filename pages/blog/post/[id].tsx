import * as React from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { PostProps, getPostContent, listPosts } from '../../../services/post';
import Post from '../../../components/Post';

export type PostPageProps = {
  post: PostProps;
};

const PostPage: React.FC<PostPageProps> = (props): JSX.Element => {
    return (
      <div>
        <Post post={props.post}></Post>
      </div>
    )
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (context) =>  {
  const props = await getPostContent(context);
  if (!props.title || typeof props.title !== "string") {
    throw new Error("post/[date].tsx > getStaticProps: Args are invalid.");
  }
  return { props: { post: props } };
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: listPosts(),
    fallback: false,
  };
};

export default PostPage;
