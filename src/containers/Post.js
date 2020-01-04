import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'
import MD from 'react-markdown';
import CodeBlock from '../components/CodeBlock.jsx';

import styles from './Post.css';

export default function Post() {
  const { post } = useRouteData()
  return (
    <div className={styles.post}>
      <div className={styles.content}>
      {/* <Link to="/blog/">{'<'} Back</Link> */}
      <h1>{post.title}</h1>

      <MD
        source={post.body}
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
