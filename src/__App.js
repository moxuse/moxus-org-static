import React from "react";
import { Root, Routes, Head, addPrefetchExcludes } from "react-static";
import { Link, Router } from "components/Router";

import Header from './components/Header'
import Footer from './components/Footer'
import styles from "./app.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(["work"]);

function App() {
  return (
    <div className={`${styles.app}`}>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <title>moxus.org</title>
        <meta property="og:title" content="moxus.org" />
        <meta property="og:url" content="https://moxus.org" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="moxus-org" />
        <meta property="og:image" content="" />
        <link rel="stylesheet" type="text/css" href="/stylesheets/monokai-sublime.css"></link>
        <script src="/lib/LoadTwitterWidgets.js" defer />
        <script src="/lib/ga.js" defer />
      </Head>
      <Root>
        <nav>
          <Header />
        </nav>
        <div className="content">
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
      </Root>
      <Footer />
    </div>
  );
}

export default App;
