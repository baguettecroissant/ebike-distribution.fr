import { NextResponse } from "next/server";

export async function GET() {
  const content = `# eBike Distribution
> Guide expert et comparatif indépendant des meilleurs vélos électriques en France (2026).

## À propos
eBike Distribution est une plateforme de comparatif indépendante spécialisée dans les vélos électriques. Nous analysons les données Amazon (prix, avis, ventes) pour aider les consommateurs français à trouver le vélo électrique idéal selon leur budget et leur usage.

## Pages principales
- Accueil : https://ebike-distribution.fr/
- Comparatif Général : https://ebike-distribution.fr/meilleur-velo-electrique
- Vélos de Ville : https://ebike-distribution.fr/meilleur-velo-electrique-ville
- Vélos Pliants : https://ebike-distribution.fr/meilleur-velo-electrique-pliant
- VTT Électriques : https://ebike-distribution.fr/meilleur-vtt-electrique

## Guides Experts
- Comment Choisir son Vélo Électrique : https://ebike-distribution.fr/guide/comment-choisir-velo-electrique
- Reconditionnement Batterie : https://ebike-distribution.fr/guide/reconditionnement-batterie-velo-electrique
- Aides de l'État 2026 : https://ebike-distribution.fr/guide/aides-etat-achat-velo-electrique
- Entretien VAE : https://ebike-distribution.fr/guide/entretien-velo-electrique
- Législation & Assurance : https://ebike-distribution.fr/guide/legislation-assurance-velo-electrique

## Produits couverts
Nous comparons les marques suivantes : ENGWE, HITWAY, COLORWAY, Eleglide, DYU, FISCHER, RCB.

## Contact
- Site : https://ebike-distribution.fr
- À propos : https://ebike-distribution.fr/a-propos
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
