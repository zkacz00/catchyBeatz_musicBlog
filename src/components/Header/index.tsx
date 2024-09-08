import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby"
import Menu from "./menu";
import Logo from "./logo";
import CanvasOffMenu from "./canvasOffMenu";

const Header = () => {

   const data = useStaticQuery(
      graphql`
         query {
            allContentfulHeaderLogo(sort: {contentful_id: DESC}) {
              edges {
                node {
                  gifSlow {
                    title,
                    url
                  }
                  gifFast {
                    title,
                    url
                  }
                  subtitle
                  title
                  id
                }
              }
            }
            allContentfulHeaderMenuResponsive {
               edges {
                  node {
                     menuImg {
                        title,
                        url
                     }
                  }
               }
            }
            allContentfulHeaderMenuEl {
               edges {
                  node {
                     linkText
                     slug
                     order
                  }
               }
            }
         }
      `
   );

   const contentfulHeaderMenuEl = data.allContentfulHeaderMenuEl;
   const contentfulHeaderLogo = data.allContentfulHeaderLogo.edges[0].node;
   const menuImg = data.allContentfulHeaderMenuResponsive.edges[0].node.menuImg;

   const [windowSize, setWindowSize] = useState(getWindowSize());
   
   useEffect(() => {
      function handleWindowResize() {
         setWindowSize(getWindowSize());
      }
      
      window.addEventListener('resize', handleWindowResize);
      
      return () => {
         window.removeEventListener('resize', handleWindowResize);
      };
   }, []);


   function getWindowSize() {
      if (typeof window !== 'undefined') {
         const {innerWidth, innerHeight} = window;
         return {innerWidth, innerHeight};
      }
   }

   const [showMenu, setShowMenu] = useState(false);

   return (
      <>
         <div className="header">
            <Logo {...contentfulHeaderLogo} />
            {typeof window !== 'undefined' && windowSize && windowSize.innerWidth > 1201 ?
               <Menu {...contentfulHeaderMenuEl} /> 
               :
               <>
                  <img src={menuImg.url} alt={menuImg.title} className="header__menuImg" 
                     onClick={() => {setShowMenu(!showMenu)}} />
               </>
            }
         </div>
         <CanvasOffMenu contentfulHeaderMenuEl={contentfulHeaderMenuEl} setShowMenu={setShowMenu} showMenu={showMenu} /> 
      </>
   )

}

export default Header;