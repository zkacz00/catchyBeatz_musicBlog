import type { GatsbyConfig } from "gatsby";
import dotenv from 'dotenv';

dotenv.config();

const config: GatsbyConfig = {
  pathPrefix: "/catchyBeatz_musicBlog",
  siteMetadata: {
    title: `catchy vibez.`,
    description: `It's a blog about music!`,
    author: `@zkacz00`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-image",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `catchy vibez`,
        short_name: `catchyVibez`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/favicon/favicon.png`,
      },
    },
  ]
};

export default config;