// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

const siteConfig = {
  baseUrl: "/",
  colors: {
    primaryColor: "#223351",
    secondaryColor: "#3160af",
  },
  cleanUrl: true,
  copyright: "Copyright © " + new Date().getFullYear() + " FuseBox",
  favicon: "img/favicon.ico",
  footerIcon: "img/logo.svg",
  headerIcon: "img/logo.svg",
  headerLinks: [
    {
      doc: "getting-started/installation",
      label: "Documentation",
    },
  ],
  highlight: {
    theme: "default",
  },
  ogImage: "img/docusaurus.png",
  onPageNav: "separate",
  organizationName: "FuseBox",
  projectName: "fuse-box",
  tagline: "A bundler that does it right",
  title: "FuseBox",
  twitterImage: "img/docusaurus.png",
  url: "https://fuse-box.org",
};

module.exports = siteConfig;
