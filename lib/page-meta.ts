import type { Metadata } from "next";
import { defaultDescription, ogImageUrl, siteUrl } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description?: string;
  path: string;
};

export function buildPageMetadata({
  title,
  description = defaultDescription,
  path,
}: PageMetaInput): Metadata {
  const url = `${siteUrl}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "NEXT live music" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}
