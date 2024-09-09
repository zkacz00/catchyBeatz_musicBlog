import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import AboutMe from './aboutMe';
import Contact from './contact';
import BottomImg from "../BottomImg";

const Footer = () => {

   const data = useStaticQuery(
      graphql`
         query {
            allContentfulSiteAuthor {
               edges {
                  node {
                     name
                  }
              }
            }
            allContentfulFooterMail {
               edges {
                  node {
                    placeholder
                    submitValue
                    title
                  }
               }
            }
            allContentfulFooterContact {
               edges {
                  node {
                     buttonText
                     contactImg {
                        title
                        url
                     }
                     arrowImgLeft {
                        title
                        url
                     }
                     arrowImgRight {
                        title
                        url
                     }
                     description
                     slug
                     title
                 }
               }
            }
            allContentfulFooterAboutMe {
               edges {
                  node {
                     description
                     slug
                     title
                     buttonText
                     aboutMeImg {
                        title
                        url
                     }
                     arrowImgLeft {
                        title
                        url
                     }
                     arrowImgRight {
                        title
                        url
                     }
                  }
               }
            }
         }
      `
   );

   const contentfulSiteAuthor = data.allContentfulSiteAuthor.edges[0].node;
   const contentfulFooterMail = data.allContentfulFooterMail.edges[0].node;
   const contentfulFooterContact = data.allContentfulFooterContact.edges[0].node;
   const contentfulFooterAboutMe = data.allContentfulFooterAboutMe.edges[0].node;

   return (
      <div className="footer">
         <BottomImg />
         <div className="footer__content">
            <AboutMe {...contentfulFooterAboutMe} />
            <Contact {...contentfulFooterContact} contentfulFooterMail={contentfulFooterMail} />
         </div>
         <div className="footer__footer">
            <p>Site developed by {contentfulSiteAuthor.name}</p>
         </div>
      </div>
   )
}

export default Footer;