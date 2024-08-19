import React from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby"
import WeeklyEl from './weeklyEl';

const WeeklyPicks = () => {

   const data = useStaticQuery(
      graphql`
         query {
            allContentfulWeeklyPick {
               edges {
                 node {
                  songTitle,
                  artist,
                  link,
                  backgroundImg {
                    title,
                    url
                  }
                }
              }
            },
            allContentfulWeeklyPicksGeneral {
              edges {
                node {
                  header,
                  buttonText
                }
              }
            }
         }
      `
   );

   const contentfulWeeklyPick = data.allContentfulWeeklyPick.edges;
   const contentfulWeeklyPicksGeneral = data.allContentfulWeeklyPicksGeneral.edges[0].node;

   const sliderSettings = {
      dots: false,
      arrows: false,
      speed: 1000,
      autoplaySpeed: 6000,
      autoplay: true,
      centerPadding: '0',
      pauseOnHover: false,
   };

   const weeklyPicks = contentfulWeeklyPick.map((el: any, id : number) => (
      <WeeklyEl {...contentfulWeeklyPick[id].node} {...contentfulWeeklyPicksGeneral} key={id} />
   ));

   return (
      <div className="weeklyPicks">
         <Slider {...sliderSettings}>
            {weeklyPicks}
         </Slider>
      </div>
   )
}

export default WeeklyPicks;