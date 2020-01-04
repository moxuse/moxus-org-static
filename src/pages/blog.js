import React from "react";
import { useRouteData } from "react-static";
//
import { Link } from "components/Router";
import MD from 'react-markdown';
import CodeBlock from '../components/CodeBlock.jsx';
import Pagenator from '../components/Pagenator.jsx';
import LoadTwitterWidgets from '../lib/LoadTwitterWidgets'

import styles from '../containers/Post.css';

const NUM_POST_PAR_A_PAGE = 5;

export default function Blog() {
  const { posts, currentPage, totalPages } = useRouteData();
  return (
    <div>
      <h1>blog</h1>
      <ul>
        {posts.map(post => (
          
          <li key={post.id}>
            <div className={styles.post}>
                <div className={styles.content}>
                <Link to={`/blog/post/${post.id}/`}>
                  <h3>{post.title}</h3>
                </Link>
              
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
          </li>
          
        ))}
      </ul>

      <Pagenator 
        currentPage={currentPage} 
        dataLength={totalPages * NUM_POST_PAR_A_PAGE} 
        postParARange={NUM_POST_PAR_A_PAGE}
      />
    </div>
  );
}
