import React from 'react';
import { Link } from "gatsby";

const ColumnEl = ({order, backgroundImg, title, type, id}: Record<string, any>) => (
   <div className={`column column--${id}`} style={{
      backgroundImage: `url(${backgroundImg.url})`,
   }}>
      <div>
         <p>0{order}</p>
         <div className="column__line"></div>
         <Link to={`${type}`} state={{ content: type, title: title, backgroundImg: backgroundImg.url }} style={{ textDecoration: 'none', color: 'white' }}>
            {title}
         </Link>
      </div>
   </div>
);

export default ColumnEl;