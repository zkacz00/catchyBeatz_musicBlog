import React, { useEffect } from "react"
import '../styles/themes/default/theme.scss';
import components from '../components';
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {

   const {
      Layout,
      Columns,
      WeeklyPicks,
      BlogPostsList,
      BlogNavigation,
      Separator,
   } = components;

const data = useStaticQuery(
      graphql`
         query {
            allContentfulHeaderLogo(sort: {fields: contentful_id, order: DESC}) {
              edges {
                node {
                  title
                }
              }
            }
         }
      `
   );

   const pageTitle = data.allContentfulHeaderLogo.edges[0].node.title;

   useEffect(() => {
      document.title = pageTitle;
   })

   return (
      <Layout>
         <div className="mainPage">
            <WeeklyPicks />
            <Separator />
            <Columns />
            <Separator />
            <div className="mainPage__content">
               <BlogPostsList content="mainPage"/>
            </div>
         </div>
      </Layout>
   )
}

export default IndexPage;