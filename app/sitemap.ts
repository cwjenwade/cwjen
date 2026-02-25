import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cwjen.vercel.app",
      lastModified: new Date(),
    },
  ];
}