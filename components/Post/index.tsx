import * as React from 'react'
import Link from 'next/link';
import MD from 'react-markdown';
import { PostPageProps } from '../../pages/blog/post/[id]';
import CodeBlock from '../CodeBlock';

import styles from './styles.module.css';

const Post: React.FC<PostPageProps> = (props: PostPageProps) => {
  const showDateSection = (props.post.id.split('-').length < 4);
  const dateStyleNam = showDateSection ? '' : styles.hide;
  return (
    <div className={styles.post}>
      <div className={styles.content}>
      <h1><Link href={props.post.path}>{props.post.title}</Link></h1>
      <h3 className={dateStyleNam}>- {props.post.id}</h3>
      <MD
        source={props.post.body}
        escapeHtml={false}
        renderers={{
          code: CodeBlock
        }}
      />
      </div>
    </div>
  )
}

export default Post;
