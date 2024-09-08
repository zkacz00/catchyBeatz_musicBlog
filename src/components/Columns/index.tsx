import React from "react";
import ColumnEl from './columnEl';
import { useStaticQuery, graphql } from "gatsby"

const Columns = () => {

   const data = useStaticQuery(
      graphql`
         query {
            allContentfulColumnsEl(sort: {order: ASC}) {
              edges {
                node {
                  title,
                  backgroundImg {
                     title,
                     url
                  },
                  type,
                  order
                }
              }
            }
         }
      `
   );

   const contentfulColumnsEl = data.allContentfulColumnsEl.edges;

   const columnsElements = contentfulColumnsEl.map((el: any, id : number) => (
      <ColumnEl {...el.node} key={id} id={id} />
   ))

   return (
      <div className="columns">
         {columnsElements}
      </div>
   )
}

export default Columns;