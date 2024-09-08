import React, {useState} from "react"
import BlogPostPreview from '../BlogPostPreview';
import { useStaticQuery, graphql } from "gatsby"

const BlogPostsList = ({content}: {content: any}) => {

   const data = useStaticQuery(
      graphql`
         query {
            allContentfulBlogPostEl(sort: {date: DESC}) {
              edges {
                node {
                  author,
                  backgroundImg {
                     url,
                     title
                  },
                  date(formatString: "MMM D, YYYY"),
                  description,
                  likesNr,
                  readingTime,
                  title,
                  category,
                  slug
                }
              }
            }
            allContentfulBlogPostPreviewGeneral {
              edges {
                node {
                  lastArrowImg {
                     url,
                     title
                  },
                  lastSlug,
                  lastTxt,
                 }
              }
            }
         }
      `
   );

   const contentfulPreviewGeneral = data.allContentfulBlogPostPreviewGeneral.edges[0].node;
   const contentfulPreviewElements = data.allContentfulBlogPostEl.edges;

   const showPreviewItems = contentfulPreviewElements.length;
   content === "mainPage" ? contentfulPreviewElements[showPreviewItems-1].node.type = 'last' : contentfulPreviewElements[showPreviewItems-1].node.type = '';
      
   const allBlogPosts = contentfulPreviewElements.slice(0, showPreviewItems).map((el: any, id : number) => (
      <BlogPostPreview {...el.node} {...contentfulPreviewGeneral} key={id} category={content} content={content} />
   ))
const categoryBlogPosts = contentfulPreviewElements.filter((el: any) => el.node.category === content).map((el: any, id: number) => (
  <BlogPostPreview {...el.node} {...contentfulPreviewGeneral} key={id} category={content} />
))
   
   return (
      <div className="blogPostsList">
         {content === "all" || content === "mainPage" ? allBlogPosts : categoryBlogPosts}
      </div>
   )
}

export default BlogPostsList;