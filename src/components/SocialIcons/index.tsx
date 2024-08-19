import React from "react"
import SocialIconEl from "./socialIconEl";
import { useStaticQuery, graphql } from "gatsby";

const SocialIcons = () => {

   const data = useStaticQuery(
      graphql`
         query {
            allContentfulSocialIcons(sort: {fields: order, order: ASC}) {
               edges {
                  node {
                     img {
                       title,
                       url,
                     },
                     title,
                     link,
                  }
               }
            }
         }
      `
   );

   const socialIconsData = data.allContentfulSocialIcons.edges;
   const socialIcons = socialIconsData.map((el: any, id : number) => (
      <SocialIconEl {...el.node} key={id} />
   ))

   return (
      <div className="socialIcons">
         {socialIcons}
      </div>
   )
}

export default SocialIcons;