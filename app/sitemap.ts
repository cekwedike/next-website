import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const routes = [
  "/",
  "/about",
  "/how-it-works",
  "/artists",
  "/producers",
  "/vote",
  "/block-parties",
  "/album",
  "/kca",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
