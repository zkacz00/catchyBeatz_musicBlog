import React from "react";
import { Link } from "gatsby";

const Menu = ({contentfulHeaderMenuEl, showMenu, setShowMenu}: Record<string, any>) => (
   <>
      <div className={`header__canvasOffMenu header__canvasOffMenu--${showMenu}`}>
         {contentfulHeaderMenuEl.edges.sort((a: any, b: any) => a.node.order - b.node.order).map((edge: any, id : number) => (
            <div className="header__menuEl" key={id}>
               <Link to={`${edge.node.slug}`}>
                  {edge.node.linkText}
               </Link>
            </div>
         ))}
      </div>
      <div className={`header__pageFilter header__pageFilter--${showMenu}`}
         onClick={() => {setShowMenu(!showMenu)}}>
      </div>
   </>
)

export default Menu;