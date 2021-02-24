import React from "react";
//
// import { Link } from "components/Router";
// import MD from 'react-markdown';
// import CodeBlock from '../components/CodeBlock';
// import Pagenator from '../components/Pagenator';

// import styles from '../containers/Post.css';

const NUM_POST_PAR_A_PAGE = 5;

export default function Blog() {
  // const { posts, currentPage, totalPages } = useRouteData();
  return (
    <div>
      {/* <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <title>moxus.org</title>
        <meta property="og:title" content="moxus.org" />
        <meta property="og:url" content="https://moxus.org" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="moxus-org :: blog" />
        <meta property="og:image" content="" />
        <link rel="stylesheet" type="text/css" href="/stylesheets/monokai-sublime.css"></link>
        <script src="/lib/LoadTwitterWidgets.js" defer />
      </head> */}
      <h1>blog</h1>
{/*       
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
      </ul> */}

      {/* <Pagenator 
        currentPage={currentPage} 
        dataLength={totalPages * NUM_POST_PAR_A_PAGE} 
        postParARange={NUM_POST_PAR_A_PAGE}
      /> */}
    </div>
  );
}
