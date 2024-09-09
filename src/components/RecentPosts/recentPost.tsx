import React from "react"
import HeartsCounter from "../HeartsCounter";
import ViewsCounter from "../ViewsCounter";
import { Link } from "gatsby"

const RecentPost = ({ slug, backgroundImg, title, likesNr, viewsNr }: Record<string, any>) => (
	<div className="recentPost">
      <Link className="recentPost__img" to={`/blog/${slug}`}>
         <img src={backgroundImg.url} alt={backgroundImg.title} />
      </Link>
      <div className="recentPost__mainContent">
         <Link to={`/blog/${slug}`}>{title}</Link>
         <hr />
         <div className="recentPost__footer">
            <ViewsCounter baseCount={viewsNr} />
            <HeartsCounter baseCount={likesNr} postId={slug} />
         </div>
      </div>
   </div>   
)

export default RecentPost;