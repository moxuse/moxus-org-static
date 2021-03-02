import * as React from 'react'
import Link from 'next/link';
import MD from 'react-markdown';
import { PostPageProps } from '../../pages/blog/post/[id]';
import CodeBlock from '../CodeBlock';

import styles from './styles.module.css';

const Post: React.FC<PostPageProps> = (props: PostPageProps) => {
  console.log(props.post.path)
  return (
    <div className={styles.post}>
      <div className={styles.content}>
      <h1><Link href={props.post.path}>{props.post.title}</Link></h1>
      
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