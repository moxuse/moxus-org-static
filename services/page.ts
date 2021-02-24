import { GetStaticPropsContext } from 'next';
import { PostProps } from './post';
import path from "path";
import fs from 'fs';
let yaml = require('front-matter');

export type PageProps = {
  posts: Array<PostProps>;
}

export const getPostContent = (params: GetStaticPropsContext<any>): Array<PostProps> => {
  console.log('each post', params);
  return [
    { title: "竹取物語" }
  ] as Array<PostProps>
}

export const listPages = (): Array<string> => {
  return ["/blog/page/0", "/blog/page/1"]
}
