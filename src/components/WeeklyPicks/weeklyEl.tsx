import React from 'react';

const ThemeEl = ({backgroundImg, artist, songTitle, link, header, buttonText}: Record<string, any>) => (
   <div className="weeklyEl" style={{
      backgroundImage: `url(${backgroundImg.url})`,
   }}>
      <div className="weeklyEl__textBlock">
         <p className="weeklyEl__text">{header}</p>
         <p className="weeklyEl__songName">{artist} - {songTitle}</p>
         <div className="weeklyEl__button">
            <a href={link} target="_blank">{buttonText}</a>
         </div>
      </div>
   </div>
);


export default ThemeEl;