import { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { services } from "@/config/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/about", "/contact"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes];
}
