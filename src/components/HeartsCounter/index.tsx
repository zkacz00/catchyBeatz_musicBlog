import React, { useState, useEffect } from "react";
import AnimatedHeart from "./animatedHeart";
// import Heart from "react-heart";

const HeartsCounter = ({baseCount}: Record<string, any>) => {

   const [heartsCount, setHeartsCount] = useState(baseCount+1);
   const [active, setActive] = useState(false);

   useEffect(() => {
      active ? setHeartsCount(heartsCount+1) : setHeartsCount(heartsCount-1);
   },[active]);

   return (
      <div className="heartsCounter">
         <p>{heartsCount}</p>
         {/* <Heart isActive={active} onClick={() => setActive(!active)} 
            className = {`animatedHeart animatedHeart--${active ? " active": ""}`}
            inactiveColor = "white"
            animationScale = {1.2} 
            animationDuration = {.6} 
         />   */}
      </div>
   );
}

export default HeartsCounter;