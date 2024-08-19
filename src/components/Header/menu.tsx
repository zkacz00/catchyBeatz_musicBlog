import React from "react";
import { Link } from "gatsby"

const Menu = ({...contentfulHeaderMenuEl}) => (
   <div className="header__menu">
      {contentfulHeaderMenuEl.edges.sort((a: any, b: any) => a.node.order - b.node.order).map((edge: any, id : number) => (
         <div className="header__menuEl" key={id}>
            <Link to={`${edge.node.slug}`} style={{ textDecoration: 'none', color: 'white' }}>
               {edge.node.linkText}
            </Link>
         </div>
      ))}
   </div>
)

export default Menu;