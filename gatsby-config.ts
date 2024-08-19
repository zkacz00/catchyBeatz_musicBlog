import type { GatsbyConfig } from "gatsby";
import dotenv from 'dotenv';

dotenv.config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `catchy vibez.`,
    description: `It's a blog about music!`,
    author: `@z_kacz`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    }
  }, "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-transformer-sharp", "gatsby-image", "gatsby-transformer-remark" ]
};

export default config;