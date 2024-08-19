import React from "react"
import components from '../components';
import { Link, useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types";

const ContactPage = () => {

   const {
      Layout,
      SocialIcons
   } = components;

   const data = useStaticQuery(
      graphql`
         query {
            allContentfulContactPage {
               edges {
                  node {
                     backgroundImg {
                        title,
                        url,
                     }
                     firstNameField,
                     emailField,
                     lastNameField,
                     messageField,
                     submitButtonText,
                     pageTitle,
                     formTitle,
                     contactImg {
                        title,
                        url,
                     },
                     bookVisitButton,
                     bookVisitLink,
                     bookVisitTitle,
                     bookVisitContent {
                        raw
                     },
                  }
               }
            }
         }
      `
   );

   const contactMeData = data.allContentfulContactPage.edges[0].node;

   const renderOptions = {
      renderNode: {
         [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p>{children}</p>,
      },
   };

   const renderRawText = (text: any) => ( JSON.parse(text.raw).content.map((el: any, i: any) => (
      <div key={i}>
         {documentToReactComponents(el, renderOptions)}
      </div>
   )));

   return (
      <Layout>
         <div className="contactPage">
            <div className="contactPage__header" style={{
               backgroundImage: `url(${contactMeData.backgroundImg.url})`,
            }}>
               <h2>{contactMeData.pageTitle}</h2>
            </div>
            <div className="contactPage__content">
               <div className="contactPage__contentEl contactPage__contentEl--1">
                  <div className="contactPage__contact">
                     <div className="contactPage__line"></div>
                     <h3>{contactMeData.formTitle}</h3>         
                     <SocialIcons />
                     <form autoComplete="off">
                        <label htmlFor="fname">{contactMeData.firstNameField}</label>
                        <input type="text" id="fname" required/>
                        <label htmlFor="lname">{contactMeData.lastNameField}</label>
                        <input type="text" id="lname" required/>
                        <label htmlFor="email">{contactMeData.emailField}</label>
                        <input type="email" id="email" required/>
                        <label htmlFor="message">{contactMeData.messageField}</label>
                        <textarea  id="message" required/>
                        <input className="contactPage__button" type="submit" value={contactMeData.submitButtonText} />
                     </form>
                  </div>
               </div>
               <div className="contactPage__contentEl contactPage__contentEl--2">
                  <div className="contactPage__letsTalk">
                     <div className="contactPage__line"></div>
                     <h3>{contactMeData.bookVisitTitle}</h3>
                     {renderRawText(contactMeData.bookVisitContent)}
                     <Link to={contactMeData.bookVisitLink} className="contactPage__button" 
                     style={{ textDecoration: 'none', color: 'white' }}>
                        {contactMeData.bookVisitButton}
                     </Link>
                  </div>  
               </div>
               <div className="contactPage__contentEl contactPage__contentEl--3">
                  <img src={contactMeData.contactImg.url} alt={contactMeData.contactImg.title} />
               </div>
            </div>
         </div>
      </Layout>
   )
}

export default ContactPage;