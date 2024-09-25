import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const isProduction = process.env.NODE_ENV === 'production';

const config: GatsbyConfig = {
  pathPrefix: process.env.GATSBY_PATH_PREFIX || `/`,
  siteMetadata: {
    title: process.env.GATSBY_SITE_TITLE || `Default Title`,
    siteUrl: process.env.GATSBY_SITE_URL || `https://example.com`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: isProduction ? [process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID] : [],
        gtagConfig: {
          anonymize_ip: true, 
          cookie_expires: 0,  
        },
        pluginConfig: {
          head: true,        
          respectDNT: true,  
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    // {
    //   resolve: "gatsby-source-hubspot-forms",
    //   options: {
    //     apiKey: process.env.HUBSPOT_API_KEY,
    //   },
    // },
  ],
};

export default config;