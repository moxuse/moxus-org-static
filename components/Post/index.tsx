import * as React from 'react'
import Link from 'next/link';
import MD from 'react-markdown';
import { PostPageProps } from '../../pages/blog/post/[date]';
import CodeBlock from '../CodeBlock';

import styles from './styles.module.css';

const Post: React.FC<PostPageProps> = (props: PostPageProps) => {
  return (
    <div className={styles.post}>
      <div className={styles.content}>
      <Link href="/blog/">{'Blog'}</Link>
      <h1>{props.post.title}</h1>
      
      <MD
        source={props.post.body}
        escapeHtml={false}
        renderers={{
          CodeBlock: CodeBlock,
          Code: CodeBlock
        }}
      />
      </div>
    </div>
  )
}

export default Post;
