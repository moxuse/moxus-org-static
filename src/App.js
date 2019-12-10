import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
//
import { Link, Router } from "components/Router";
import Work from "containers/Work";

import "./app.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["work"]);

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">top</Link>
        <Link to="/about">cv</Link>
        <Link to="/work">work</Link>
        <Link to="/blog">blog</Link>
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Work path="work" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;
