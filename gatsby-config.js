const path = require("path");
const pathPrefix = "/";
const siteMetadata = {
  title: "Digital Garden",
  shortName: "Digital Garden",
  description: "Digital Garden for Volatile Memory",
  siteUrl: "https://ssibongee.github.io/digital-garden",
};

module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `./content`,
      },
    },
    {
      resolve: "gatsby-theme-primer-wiki",
      options: {
        nav: [

          {
            title: "Github",
            url: "https://github.com/ssibongee",
          },
        ],
        editUrl: "https://github.com/ssibongee/digital-garden/blob/master/",
        sidebarComponents: ["latest", "tag"],
        lastUpdatedText: "최근 업데이트",
        shouldSupportLatest: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#2596be`,
        display: `standalone`,
	icon: path.resolve(__dirname, './static/logo.png'),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
