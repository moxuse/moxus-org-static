import { GetStaticPropsContext } from 'next';
import fs from 'fs';
import WorkPage from '../pages/work';
let yaml = require('front-matter');

export type WorkProps = {
  title: string;
  thumb: string;
  path: string | undefined;
  ex_path: string | undefined;
}

export type WorkPageProps = {
 works :Array<WorkProps>;
}

export const getWorklist = (): WorkPageProps => {
  const posts = JSON.parse(fs.readFileSync('./contents/project_data.json', 'utf8'));
  const works = posts.map((item: WorkProps) => {
    const path = item.path || '';
    const ex_path = item.ex_path || '';
    return {
      title: item.title,
      thumb: item.thumb,
      path: path,
      ex_path: ex_path
    } as WorkProps;
  });
  return { works: works }
}