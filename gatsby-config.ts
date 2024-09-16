import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `iverson`,
    siteUrl: `https://www.yourdomain.tld`,
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
        trackingIds: [], // Leave this empty until you get your tracking ID
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-source-hubspot-forms",
      options: {
        apiKey: process.env.HUBSPOT_API_KEY, // Use environment variable for security
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/ // Include the directory where your SVG files are stored
        }
      }
    },
  ],
};

export default config;
