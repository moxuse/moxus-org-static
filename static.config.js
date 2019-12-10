import path from "path";
import axios from "axios";

import { makePageRoutes } from "react-static/node";

export default {
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return [
      ...makePageRoutes({
        items: posts,
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
      // {
      //   path: "/blog",
      //   getData: () => ({
      //     posts
      //   }),
      ...posts.map(post => ({
        path: `/post/${post.id}`,
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
    require.resolve("react-static-plugin-sitemap")
  ]
};
