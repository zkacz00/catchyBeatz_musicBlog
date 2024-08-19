import React, { useState } from "react";
import { navigate } from "gatsby";

const Logo = ( {gifSlow, gifFast, title, subtitle}: Record<string, any>) => {

   const [isGifSlowVisible, setIsGifSlowVisible] = useState(true);
   const [isGifFastVisible, setIsGifFastVisible] = useState(false);

   const setGifs = () => {
      setIsGifSlowVisible(prev => !prev);
      setIsGifFastVisible(prev => !prev);
   }

   return (
      <div className="header__logo" onClick={() => navigate('/')}
         onMouseOver={() => setGifs()} onMouseOut={() => setGifs()} >
         <img src={gifSlow.url} alt={gifSlow.title} 
            className={`header__gif header__gif--slow header__gif--${isGifSlowVisible}Visible`} />
         <img src={gifFast.url} alt={gifFast.title}
            className={`header__gif header__gif--fast header__gif--${isGifFastVisible}Visible`} />
         <div className="header__logoText">
            <h1>{title}</h1>
            <p>{subtitle}</p>
         </div>
      </div>  
   )
}

export default Logo;