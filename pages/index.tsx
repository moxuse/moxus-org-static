// @flow
import React from 'react'
import { NextPage, GetStaticProps } from "next";
import { WorkPageProps, getWorklistForDigest } from '../services/work';
import { PostProps } from '../services/post';
import { PageProps, getPostContentForDigest } from '../services/page';

import Digest from '../components/Digest';

export type IndexPageProps = {
  work: WorkPageProps,
  post: PostProps[]
};

const IndexPage: NextPage<IndexPageProps> = (props: IndexPageProps): JSX.Element => (
  <div style={{ textAlign: 'center' }}>
    <Digest {... props} />
  </div>
);


export const getStaticProps: GetStaticProps<IndexPageProps> = async () =>  {
  const propsPost: PageProps = await getPostContentForDigest();
  const propsWork: WorkPageProps = await getWorklistForDigest();
  if (!propsPost || propsPost.posts.length <= 0 || !propsWork) {
    throw new Error("couldn't get posts and work for Digest props!");
  }
  const props = { work: propsWork, post: propsPost.posts };
  return { props };
}

export default IndexPage;
