import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Button from './button';
import Mail from './mail';

const Contact = ( {title, description, buttonText, slug, arrowImgLeft, arrowImgRight, contactImg, contentfulFooterMail}: Record<string, any>) => (
   <div className="footer__contact">
      <div className="footer__textContent footer__textContent--contact">
         <Mail {...contentfulFooterMail} />
         <p className="footer__title">{title}</p>
         <p className="footer__description">{description}</p>
         <Button text={buttonText} slug={slug} 
            arrowImgLeftUrl={arrowImgLeft.url} arrowImgRightUrl={arrowImgRight.url} />
      </div>
      <img className="footer__contactImg" src={contactImg.url} 
         alt={contactImg.title} />
   </div>
)

export default Contact;