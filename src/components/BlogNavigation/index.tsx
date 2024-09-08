import React from "react"
import BlogNavigationEl from './blogNavigationEl';
import { useStaticQuery, graphql } from "gatsby"

const BlogNavigation = () => {

   const data = useStaticQuery(
      graphql`
         query {
            allContentfulBlogNavigationEl(sort: {order: ASC}) {
               edges {
                  node {
                     title,
                     content,
                     order,
                     slug
                  }
               }
            }
         }
      `
   );

   const contentfulBlogNavigationEl = data.allContentfulBlogNavigationEl.edges;

   const navigationElements = contentfulBlogNavigationEl.map((el: any, id : number) => (
      <BlogNavigationEl {...el.node} key={id} />
   ));

   return (
      <div className="blogNavigation">
         {navigationElements}
      </div>
   )
}

export default BlogNavigation;