import path from "path";
import fs from 'fs';
let yaml = require('front-matter');

// import axios from "axios";

import { makePageRoutes } from "react-static/node";

export default {
  getRoutes: async () => {
    const posts = JSON.parse(fs.readFileSync('./public/data.json', 'utf8'));
    const works = JSON.parse(fs.readFileSync('./public/project_data.json', 'utf8'));
    const matters = posts.map(post => {
      const p = fs.readFileSync('./public/posts/' + post.path, 'utf8');
      const mat = yaml(p);
      return {
        id: post.path.split('.')[0],
        title: mat.attributes.title,
        path: post.path,
        body: mat.body
      }
    })
    
    return [
      // for /index
      ...[{
        path: "/",
        template: "src/pages/index",
        getData: () => ({
          works,
          matters
        }) 
      }],
      // for pages under /blog/pages
      ...makePageRoutes({
        items: matters,
        pageSize: 5,
        pageToken: "page", // use page for the prefix, eg. blog/page/3
        route: {
          // Use this route as the base route
          path: "blog",
          template: "src/pages/blog"
        },
        decorate: (posts, i, totalPages) => ({
          // For each page, supply the posts, page and totalPages
          getData: () => ({
            posts,
            currentPage: i,
            totalPages
          })
        })
      }),
      // form /works
      ...[{
        path: "work",
        template: "src/containers/Work",
        getData: () => ({
          works
        }) 
      }],
      // for pages under /blog/post/
      ...matters.map(post => ({
        path: `/blog/post/${post.id}`,
        template: "src/containers/Post",
        getData: () => ({
          post
        }) 
      }))
    ];
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
    [
      require.resolve("react-static-plugin-css-modules"),
      {
         modules: true, // set true by default
         localIdentName: '[name]__[local]--[hash:base64:5]',
       }
    ]
  ]
};
