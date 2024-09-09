import React from 'react';
import { Link, navigate } from "gatsby";
import HeartsCounter from '../HeartsCounter';
import ViewsCounter from '../ViewsCounter';

const BlogPostPreview = ({slug, lastTxt, lastArrowImg, lastSlug, title, description, author, date, readingTime, 
   backgroundImg, likesNr, viewsNr, type, content}: {
      slug: string;
      lastTxt?: string;
      lastArrowImg: { url: string; title: string };
      lastSlug?: string;
      title: string;
      description: string;
      author: string;
      date: string;
      readingTime: number;
      backgroundImg: { url: string; title: string };
      likesNr: number;
      viewsNr: number;
      type?: string;
      content?: string;
    }) => {

   type == "last" ? content = "all" : content;

   return (
      <div className={`blogPostPreview ${type ? `blogPostPreview--${type}` : `` }`}>
         <div className="blogPostPreview__mainImg" onClick={() => {type !== "last" && navigate(`/blog/${slug}/`)}}>
            {backgroundImg && <img src={backgroundImg.url} alt={backgroundImg.title} />}
         </div>
         <div className="blogPostPreview__mainContent">
            <div className="blogPostPreview__header">
               <p>{date} &bull; {readingTime} min</p>
               <p>author : {author}</p>
            </div>
            <div className="blogPostPreview__text" onClick={() => {type !== "last" && navigate(`/blog/${slug}/`)}}>
               <p className="blogPostPreview__title">{title}</p>
               <p className="blogPostPreview__description">{description}</p>
            </div>
            <div className="blogPostPreview__footer">
               <hr />
               <div>
                  <ViewsCounter baseCount={viewsNr} />
                  <HeartsCounter baseCount={likesNr} postId={slug} />
               </div>
            </div>               
         </div>
         {type === "last" && 
            <div className="blogPostPreview__after" >
               <div>
                  <Link to={`/${lastSlug}`} state={{ content: {content} }} style={{ textDecoration: 'none', color: 'white' }}>
                     {lastTxt}
                  </Link>
                  <img src={lastArrowImg.url} alt={lastArrowImg.title} />
               </div>
            </div>
         }
      </div>
   );
}

export default BlogPostPreview;