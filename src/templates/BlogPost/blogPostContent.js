import React from 'react';
import components from '../../components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const BlogPostContent = ({ title, author, date, readingTime, category, likesNr, blogPostContent, slug, renderOptions }) => {

   const {
      Layout,
      BlogNavigation,
      HeartsCounter,
      ViewsCounter,
      RecentPosts,
   } = components;

   return (
      <Layout>
         <div className="blogPage">
            <div className="blogPage__content">
               <BlogNavigation />
               <div className="blogPost">
                  <div className="blogPost__content">
                     <div className="blogPost__header">
                        <p>{author}</p>
                        <p>&bull;</p>
                        <p>{date}</p>
                        <p>&bull;</p>
                        <p>{readingTime} min read</p>
                     </div>
                     <hr />
                     <h1>{title}</h1>
                     {
                        JSON.parse(blogPostContent.raw).content.map((el, i) => {
                           return (
                              <div key={i}>
                                 {documentToReactComponents(el, renderOptions)}
                              </div>
                           )
                        })
                     }
                     <hr />
                     <div className="blogPost__footer">
                        <p>{category.toUpperCase()}</p>                                
                        <div>
                           <ViewsCounter baseCount={140} />
                           <HeartsCounter baseCount={likesNr} />
                        </div>
                        
                     </div>
                  </div>                  
               </div>
               <RecentPosts currentSlug={slug} />
            </div>
         </div>
      </Layout>
   )
}

export default BlogPostContent;