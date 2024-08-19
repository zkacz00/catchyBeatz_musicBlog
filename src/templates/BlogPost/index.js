import React from "react"
import BlogPostContent from './blogPostContent';
import { useStaticQuery, graphql } from "gatsby";
import { BLOCKS } from "@contentful/rich-text-types";

const BlogPost = ({pageContext : {pagePath}}) => {

   const data = useStaticQuery(
      graphql`
         query {
            allContentfulBlogPostEl {
               edges {
                  node {
                     id,
                     slug,
                     title,
                     author,
                     date(formatString: "MMM D, YYYY"),
                     readingTime,
                     category,
                     likesNr,
                     blogPostContent { 
                        raw,
                        references {
                          title
                          url
                          contentful_id
                        }
                     }
                  }
               }
            }
         }
      `
   );

   const blogPostData = data.allContentfulBlogPostEl.edges.filter(edge => edge.node.slug === pagePath)[0].node;

   const renderOptions = {
      renderNode: {
         [BLOCKS.PARAGRAPH]: (node, children) => <p className="blogPost__text">{children}</p>,
         [BLOCKS.QUOTE]: (node, children) => <div className="blogPost__highlight">{children}</div>,
         [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const img = blogPostData.blogPostContent.references.find(i => i.contentful_id === node.data.target.sys.id);
            return (
               <img src={img?.url} alt={img?.title} />
         )}
      },
   };

   return (
      <BlogPostContent {...blogPostData} renderOptions={renderOptions} />
   )
}

export default BlogPost;