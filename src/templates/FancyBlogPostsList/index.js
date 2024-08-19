import React from "react"
import components from '../../components';
import { useStaticQuery, graphql, navigate } from "gatsby"

const FancyBlogPostsListPage = ({pageContext : {pageContent, backgroundImg, title, order}}) => {

   const {
      Layout,
      BlogPostsList,
      Separator,
   } = components;

   const data = useStaticQuery(
      graphql`
         query {
            allContentfulAsset(filter: {title: {in: ["whiteArrowImg--left", "whiteArrowImg--right"]}}) {
               edges {
                  node {
                    url
                    title
                  }
               }
            }
            allContentfulColumnsEl(sort: {fields: order}) {
               edges {
                  node {
                     type,
                     order,
                 }
               }
            }
         }
      `
   );

   const arrowLeft = data.allContentfulAsset.edges.find(el => el.node.title === "whiteArrowImg--left");
   const arrowRight = data.allContentfulAsset.edges.find(el => el.node.title === "whiteArrowImg--right");
   const columnsData = data.allContentfulColumnsEl.edges;
   const currentId = order-1;

   return (
      <Layout>
         <div className="fancyBlogPostsListPage">
            <div className="categoryTitleElement" style={{
               backgroundImage: `url(${backgroundImg.url})`,
            }}>
               <div className="categoryTitleElement__arrowImg" role="button" tabIndex={0} onKeyDown={null}
                  onClick={() => navigate(`/${columnsData[currentId === 0 ? 2 : currentId-1].node.type}`)}>
                  <img src={arrowLeft.node.url} alt={arrowLeft.node.title} />
               </div>
               
               <h2>/{title}</h2>
               <div className="categoryTitleElement__arrowImg" role="button" tabIndex={0} onKeyDown={null} 
                  onClick={() => navigate(`/${columnsData[currentId === 2 ? 0 :currentId+1].node.type}`)}>
                  <img  src={arrowRight.node.url} alt={arrowRight.node.title} />
               </div>
            </div>
            <Separator />
            <div className="fancyBlogPostsListPage__content">
               <BlogPostsList content={pageContent} />
            </div>
         </div>
      </Layout>
   )
}

export default FancyBlogPostsListPage;