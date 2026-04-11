/** Base URL for canonical links, OG URLs, and sitemap (set in production). */
export const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL ?? "https://next.energizemusic.com").replace(
    /\/$/,
    "",
  );

export const defaultDescription =
  "Africa's boldest Afrogospel talent competition and music incubator. Submit your music, vote for your favorites, and be part of history with Energize Music's NEXT competition.";

export const ogImageUrl =
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&h=630&auto=format&fit=crop";

export const seoKeywords = [
  "Afrogospel",
  "African gospel music",
  "talent competition Africa",
  "Energize Music",
  "gospel music Africa",
  "NEXT competition",
  "afrogospel artists",
] as const;
