import React, { useState, useEffect } from "react";
import Heart from "react-heart";

const HeartsCounter = ({ baseCount, postId }: { baseCount: number, postId: string }) => {
   const [heartsCount, setHeartsCount] = useState(baseCount);
   const [active, setActive] = useState(() => {
      if (typeof window !== "undefined") {
         const saved = localStorage.getItem(`heart-${postId}`);
         return saved ? JSON.parse(saved) : false;
      }
      return false;
   });

   useEffect(() => {
      if (typeof window !== "undefined") {
         if (active) {
            setHeartsCount(heartsCount + 1);
         } else if (heartsCount > 0) {
            setHeartsCount(heartsCount - 1);
         }
         localStorage.setItem(`heart-${postId}`, JSON.stringify(active));
      }
   }, [active]);

   return (
      <div className="heartsCounter">
         <p>{heartsCount}</p>
         <Heart isActive={active} onClick={() => setActive(!active)} 
            className={`animatedHeart animatedHeart--${active ? " active" : ""}`}
            inactiveColor="white"
            animationScale={1.2} 
            animationDuration={.6} 
         />  
      </div>
   );
}

export default HeartsCounter;