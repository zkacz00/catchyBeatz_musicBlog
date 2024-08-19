import React from "react"

const SocialIconEl = ({link, img}: Record<string, any>) => {
   return (
      <a href={link} target="blank">
         <img src={img.url} alt={img.title}/>
      </a>
   )
}

export default SocialIconEl;