import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ebike-distribution.fr";
  const now = new Date().toISOString();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/meilleur-velo-electrique`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/meilleur-velo-electrique-ville`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/meilleur-velo-electrique-pliant`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/meilleur-vtt-electrique`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/guide/comment-choisir-velo-electrique`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/guide/reconditionnement-batterie-velo-electrique`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/politique-de-confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
