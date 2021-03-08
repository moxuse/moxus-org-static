import * as React from 'react'
import Link from 'next/link';
import MD from 'react-markdown';
import { PostProps } from '../../services/post';
import CodeBlock from '../CodeBlock';

import styles from './styles.module.css';

const Post: React.FC<PostProps> = (props) => {
  const showDateSection = (props.id.split('-').length < 4);
  const dateStyleNam = showDateSection ? '' : styles.hide;
  return (
    <div className={styles.post}>
      <div className={styles.content}>
      <h1><Link href={props.path}>{props.title}</Link></h1>
      <h3 className={dateStyleNam}>- {props.id}</h3>
      <MD
        source={props.body}
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
