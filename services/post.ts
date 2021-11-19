// @flow
import { GetStaticPropsContext } from 'next';
import fs from 'fs';
import { ParsedUrlQuery } from 'node:querystring';
let yaml = require('front-matter');

export type PostProps = {
  id: string;
  title: string;
  path: string;
  body: string;
}

interface PostPropsParsedUrlQuery extends ParsedUrlQuery {
  index: string;
};

export const getPostContent = ({ params }: GetStaticPropsContext<PostPropsParsedUrlQuery>): PostProps => {
  if (!params) { throw new Error('couldn`t get params at getPostContent.') }
  const data = fs.readFileSync('./contents/posts/' + params.id + '.md', 'utf8');
  const matter = yaml(data);
  return {
    // TODO: use layout [blog|work]
    // layout: matter.post, 
    id: params.id,
    title: matter.attributes.title,
    path: '/blog/post/' + params.id,
    body: matter.body
  } as PostProps;
}

export const listPosts = (): Array<string> => {
  const posts = JSON.parse(fs.readFileSync('./contents/data.json', 'utf8'));
  const paths = posts.map((post: PostProps) => {
    const p = fs.readFileSync('./contents/posts/' + post.path, 'utf8');
    return '/blog/post/' + post.path.split('.')[0];
  })
  return paths;
}
