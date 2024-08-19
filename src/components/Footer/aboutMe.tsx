import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Button from './button';

const AboutMe = ({aboutMeImg, title, description, arrowImgLeft, arrowImgRight, buttonText, slug}: Record<string, any>) => (
   <div className="footer__aboutMe">
      <img className="footer__aboutMeImg" src={aboutMeImg.url} 
         alt={aboutMeImg.title} />
      <div className="footer__textContent footer__textContent--aboutMe">
         <p className="footer__title">{title}</p>
         <p className="footer__description">{description}</p>
         <Button text={buttonText} slug={slug}
            arrowImgLeftUrl={arrowImgLeft.url} arrowImgRightUrl={arrowImgRight.url} />
      </div>
   </div>
)

export default AboutMe;