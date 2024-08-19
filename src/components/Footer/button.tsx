import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Button = ({slug, text, arrowImgLeftUrl, arrowImgRightUrl}: Record<string, any>) => (
   <div className="footer__button">
      <img className="footer__arrowImg footer__arrowImg--left" src={arrowImgRightUrl} alt="arrowImg" />
      <Link to={`/${slug}/`} style={{ textDecoration: 'none', color: 'black' }}>
         {text}
      </Link>
      <img className="footer__arrowImg footer__arrowImg--right" src={arrowImgLeftUrl} alt="arrowImg" />
   </div>
)

export default Button;