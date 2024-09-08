import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const BottomImg = () => {

   const data = useStaticQuery(
      graphql`
         query {
            allContentfulBottomImg(sort: {contentful_id: DESC}) {
              edges {
                node {
                  img {
                    title,
                    url
                  }
                }
              }
            }
         }
      `
   );

   return data.allContentfulBottomImg.edges[0]?.node?.img ? (
      <img 
         src={data.allContentfulBottomImg.edges[0].node.img.url}
         className={data.allContentfulBottomImg.edges[0].node.img.title}
         alt="bottomImg"
      />
   ) : null;
}

export default BottomImg;