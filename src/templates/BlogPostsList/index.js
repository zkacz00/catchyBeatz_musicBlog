import React from "react"
import components from '../../components';

const BlogPostsListPage = ({pageContext : {pageContent}}) => {

   const {
      Layout,
      BlogNavigation,
      BlogPostsList,
   } = components;

   return (
      <Layout>
         <div className="blogPostsListPage">
            <div className="blogPostsListPage__content">
               <BlogNavigation />
               <BlogPostsList content={pageContent} />
            </div>
         </div>
      </Layout>
   )
}

export default BlogPostsListPage;