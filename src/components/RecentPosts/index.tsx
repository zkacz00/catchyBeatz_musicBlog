import React from "react"
import RecentPost from "./recentPost";
import { Link, useStaticQuery, graphql } from "gatsby"

const RecentPosts = ({currentSlug}: Record<string, any>) => {

   const data = useStaticQuery(
      graphql`
         query {
            allContentfulBlogPostEl(sort: {fields: date, order: DESC}) {
               edges {
                  node {
                     backgroundImg {
                        url,
                        title
                     },
                     likesNr,
                     title,
                     slug
                  }
               }
            }
            allContentfulRecentPostsGeneral {
               edges {
                  node {
                     title,
                     linkText,
                     linkSlug,
                     numberOfPosts
                  }
               }
            }
         }
      `
   );

   const {
      title,
      linkText,
      linkSlug,
      numberOfPosts
   } = data.allContentfulRecentPostsGeneral.edges[0].node;

   const recentPostsData = data.allContentfulBlogPostEl.edges.filter((el: any) => {
      return el.node.slug !== currentSlug;
   });

   const recentPosts = recentPostsData.slice(0, numberOfPosts).map((el: any, id : number) => (
      <RecentPost {...el.node} key={id} />
   ))

   return (
		<div className="recentPostsList">
         <div className="recentPostsList__header">
            <p>{title}</p>
            <Link to={linkSlug} style={{ textDecoration: 'none', color: 'white' }}>{linkText}</Link>
         </div>
         <div className="recentPostsList__content">
            {recentPosts}
         </div>
      </div>
   )
}

export default RecentPosts;