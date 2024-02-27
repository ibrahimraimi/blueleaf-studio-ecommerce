export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Blueleaf",
  description: "",
  url: "https://blueleaf.vercel.app",
  ogImage: "https://blueleaf.vercel.app/opengraph-image.png",
  links: {
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
  footer: [
    { name: "Home", href: "/" },
    { name: "About", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Shipping & Return Policy", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};
