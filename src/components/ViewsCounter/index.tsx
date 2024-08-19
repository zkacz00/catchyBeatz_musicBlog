import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const ViewsCounter = ({baseCount}: Record<string, any>) => {

   const data = useStaticQuery(
      graphql`
         query {
            allContentfulViewsCounter {
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

   const { title, url } = data.allContentfulViewsCounter.edges[0].node.img;

   return (
      <div className="viewsCounter">
         <p>{baseCount}</p>
         <img src={url} alt={title} />
      </div>
   );
}

export default ViewsCounter;