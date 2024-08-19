import React from "react"
import Layout from '../components/Layout';
import { useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types";

const About = () => {

   const data = useStaticQuery(
      graphql`
         query {
            allContentfulAboutMePage {
               edges {
                  node {
                     pageTitlePart1,
                     pageTitlePart2,
                     bookVisitButton,
                     bookVisitLink,
                     bookVisitTitle,
                     bookVisitContent {
                        raw
                     },
                     introductionContent {
                        raw
                     },
                     introductionTitle,
                     longDescriptionContent {
                        raw
                     },
                     longDescriptionTitle,
                     personImg {
                        title,
                        url,
                     },
                     backgroundImg {
                        title,
                        url,
                     }
                  }
               }
            }
         }
      `
   );

   const aboutMeData = data.allContentfulAboutMePage.edges[0].node;

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
         <div className="aboutPage">
            <div className="aboutPage__header" style={{
               backgroundImage: `url(${aboutMeData.backgroundImg.url})`,
            }}>
               <h2>{aboutMeData.pageTitlePart1}</h2>
            </div>
            <div className="aboutPage__content">
               <div className="aboutPage__contentEl aboutPage__contentEl--1">
                  <div className="aboutPage__intro">
                     <div className="aboutPage__line"></div>
                     <h3>{aboutMeData.introductionTitle}</h3>
                     {renderRawText(aboutMeData.introductionContent)}
                  </div>
               </div>
               <div className="aboutPage__contentEl aboutPage__contentEl--2">
                  <div className="aboutPage__longDescription">
                     <div className="aboutPage__line"></div>
                     <h3>{aboutMeData.longDescriptionTitle}</h3>
                     {renderRawText(aboutMeData.longDescriptionContent)}
                  </div>
               </div>
               <div className="aboutPage__contentEl aboutPage__contentEl--3">
                  <img src={aboutMeData.personImg.url} alt={aboutMeData.personImg.title} />
               </div>
            </div>
         </div>
      </Layout>
   )
}

export default About;