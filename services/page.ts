import { GetStaticPropsContext } from 'next';
import { PostProps } from './post';
import fs from 'fs';

let yaml = require('front-matter');

const CHUNK_NUM = 5;

export type PageProps = {
  posts: Array<PostProps>;
  currentPage: number;
  totalPages: number;  
}

export const getPostContent = ({ params }: GetStaticPropsContext<any>): PageProps => {
  const posts = JSON.parse(fs.readFileSync('./contents/data.json', 'utf8'));
  let chunkPost: Array<PostProps> = [];
  const startPage = (params.index - 1) * CHUNK_NUM;
  for (let i = 0; i < CHUNK_NUM; i++) {
    const id = posts[startPage + i];
    if (id ===  undefined) {
      break;
    }
    const data = fs.readFileSync('./contents/posts/' + id.path, 'utf8');
    const matter = yaml(data)
    const postData = {
      id: id.path.split('.')[0],
      title: matter.attributes.title,
      path: '/blog/post/' + id.path.split('.')[0],
      body: matter.body
    } as PostProps;
    chunkPost.push(postData);
  }
  return { 
    posts: chunkPost, 
    currentPage: params.index - 1, 
    totalPages: posts.length 
  } as PageProps;
}

export const listPages = (): Array<string> => {
  const posts = JSON.parse(fs.readFileSync('./contents/data.json', 'utf8'));
  const pageNum = Math.ceil(posts.length / CHUNK_NUM);
  let paths: Array<string> = [];
  for (let i = 1; i <= pageNum; i++) {
    paths.push('/blog/page/' + i);
  }
  return paths;
}
