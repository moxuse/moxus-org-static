import { GetStaticPropsContext } from 'next';
import fs from 'fs';
let yaml = require('front-matter');

export type PostProps = {
  id: string;
  title: string;
  path: string;
  body: string;
}

export const getPostContent = ({ params }: GetStaticPropsContext<any>): PostProps => {
  const data = fs.readFileSync('./contents/posts/' + params.id + '.md', 'utf8');
  const matter = yaml(data);
  return {
    // TODO: use layout [blog|work]
    // layout: matter.post, 
    id: params.id,
    title: matter.attributes.title,
    path: '/blog/post/' + params.id,
    body: matter.body
  };
}

export const listPosts = (): Array<string> => {
  const posts = JSON.parse(fs.readFileSync('./contents/data.json', 'utf8'));
  const paths = posts.map((post: PostProps) => {
    const p = fs.readFileSync('./contents/posts/' + post.path, 'utf8');
    return '/blog/post/' + post.path.split('.')[0];
  })
  return paths;
}
