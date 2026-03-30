// Amazon Affiliate Tag - CHANGE THIS to your own tag
export const AMAZON_TAG = "ebike-distrib-21";

export function amazonLink(asin: string, affiliateUrl?: string): string {
  if (affiliateUrl) return affiliateUrl;
  return `https://www.amazon.fr/dp/${asin}?tag=${AMAZON_TAG}&linkCode=ogi&th=1`;
}

export interface Product {
  id: string;
  asin: string;
  name: string;
  brand: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  affiliateUrl?: string;
  category: "ville" | "vtt" | "pliant" | "trottinette" | "kit";
  badge?: string;
  autonomy: string;
  motor: string;
  weight: string;
  speed: string;
  pros: string[];
  cons: string[];
  summary: string;
}

export const products: Product[] = [
  {
    id: "engwe-m20",
    asin: "B0DKX183HC",
    name: "ENGWE M20 Vélo Électrique Fat Bike 20 Pouces",
    brand: "ENGWE",
    price: 1099,
    rating: 4.6,
    reviewCount: 287,
    image: "/images/products/engwe-m20.jpg",
    affiliateUrl: "https://amzn.to/47xU8Xv",
    category: "vtt",
    badge: "Meilleure Vente",
    autonomy: "75-170 km",
    motor: "750W",
    weight: "35 kg",
    speed: "25 km/h",
    pros: [
      "Double batterie pour une autonomie exceptionnelle",
      "Pneus fat 4.0 pouces tout-terrain",
      "Excellent rapport qualité-prix",
      "7 vitesses Shimano"
    ],
    cons: [
      "Poids assez élevé (35 kg)",
      "Encombrant pour le rangement"
    ],
    summary: "Le ENGWE M20 est le best-seller Amazon dans la catégorie vélos électriques. Avec sa double batterie offrant jusqu'à 170 km d'autonomie et ses pneus fat tout-terrain, c'est le choix idéal pour les trajets mixtes ville/campagne."
  },
  {
    id: "hitway-bk6s",
    asin: "B0CXYL8TKM",
    name: "HITWAY BK6S Vélo Électrique Pliant 20 Pouces",
    brand: "HITWAY",
    price: 499,
    rating: 4.3,
    reviewCount: 1240,
    image: "/images/products/hitway-bk6s.jpg",
    affiliateUrl: "https://amzn.to/4tfllXh",
    category: "pliant",
    badge: "Meilleur Prix",
    autonomy: "35-70 km",
    motor: "250W",
    weight: "22 kg",
    speed: "25 km/h",
    pros: [
      "Prix imbattable sous les 500€",
      "Pliant et compact pour le transport",
      "Léger (22 kg) pour un vélo électrique",
      "Plus de 1200 avis positifs"
    ],
    cons: [
      "Autonomie limitée en mode full-électrique",
      "Moteur 250W limité en côte"
    ],
    summary: "Le HITWAY BK6S est le vélo électrique pliant le plus vendu sur Amazon.fr. Son prix très attractif sous les 500€ et sa conception pliante en font le compagnon idéal des trajets domicile-travail et du multimodal."
  },
  {
    id: "colorway-26",
    asin: "B0D5J8FMKQ",
    name: "COLORWAY Vélo Électrique 26 Pouces VTT",
    brand: "COLORWAY",
    price: 619,
    rating: 4.2,
    reviewCount: 856,
    image: "/images/products/colorway-26.jpg",
    affiliateUrl: "https://amzn.to/4bGEsUm",
    category: "vtt",
    autonomy: "45-90 km",
    motor: "250W",
    weight: "25 kg",
    speed: "25 km/h",
    pros: [
      "Format VTT 26 pouces polyvalent",
      "Bon rapport qualité/prix",
      "Suspension avant confortable",
      "Batterie amovible"
    ],
    cons: [
      "Moteur 250W un peu juste en VTT",
      "Poids moyen"
    ],
    summary: "Le COLORWAY 26 pouces est un VTT électrique polyvalent qui convient aussi bien pour la ville que pour les chemins. Sa batterie amovible et sa bonne autonomie en font un choix fiable pour un premier achat."
  },
  {
    id: "eleglide-t1-step",
    asin: "B0CMQK7FN4",
    name: "Eleglide T1 Step-Thru Vélo Électrique Ville",
    brand: "ELEGLIDE",
    price: 799,
    rating: 4.4,
    reviewCount: 532,
    image: "/images/products/eleglide-t1.jpg",
    affiliateUrl: "https://amzn.to/4lZO3J9",
    category: "ville",
    badge: "Choix Premium",
    autonomy: "50-100 km",
    motor: "250W",
    weight: "23 kg",
    speed: "25 km/h",
    pros: [
      "Design Step-Thru élégant et pratique",
      "Cadre bas facile d'accès",
      "Très bon confort de conduite",
      "Application mobile companion"
    ],
    cons: [
      "Prix un peu élevé pour du 250W",
      "Pas de suspension arrière"
    ],
    summary: "L'Eleglide T1 Step-Thru est le vélo électrique urbain par excellence. Son cadre bas permet un enjambement facile, et son design épuré plaira aux cyclistes qui cherchent style et praticité."
  },
  {
    id: "dyu-d3f",
    asin: "B0B5BLVTV7",
    name: "DYU D3F Vélo Électrique Pliant 14 Pouces Mini",
    brand: "DYU",
    price: 419,
    rating: 4.1,
    reviewCount: 678,
    image: "/images/dyu-d3f.svg",
    category: "pliant",
    autonomy: "25-50 km",
    motor: "250W",
    weight: "17 kg",
    speed: "25 km/h",
    pros: [
      "Ultra-compact et ultra-léger (17 kg)",
      "Idéal pour le dernier kilomètre",
      "Se range partout",
      "Prix très accessible"
    ],
    cons: [
      "Roues 14 pouces peu confortables",
      "Autonomie limitée",
      "Pas adapté aux longues distances"
    ],
    summary: "Le DYU D3F est le vélo électrique le plus compact du marché. Avec seulement 17 kg et ses roues de 14 pouces, il se glisse partout : bureau, coffre de voiture, placard."
  },
  {
    id: "eskute-netuno-plus",
    asin: "B0CR1N2J5L",
    name: "ESKUTE Netuno Plus VTT Électrique 27.5 Pouces",
    brand: "ESKUTE",
    price: 899,
    rating: 4.5,
    reviewCount: 423,
    image: "/images/eskute-netuno.svg",
    category: "vtt",
    badge: "Top VTT",
    autonomy: "60-120 km",
    motor: "250W Bafang",
    weight: "24 kg",
    speed: "25 km/h",
    pros: [
      "Moteur Bafang de qualité",
      "Grande roue 27.5 pouces",
      "Excellente autonomie",
      "Freins à disque hydrauliques"
    ],
    cons: [
      "Limité à 250W",
      "Pas de suspension arrière"
    ],
    summary: "L'ESKUTE Netuno Plus se distingue par son moteur Bafang réputé pour sa fiabilité et ses freins à disque hydrauliques. Un VTT électrique sérieux pour les sorties nature."
  },
  {
    id: "fischer-cita-2206",
    asin: "B0BW4L3V2T",
    name: "FISCHER Cita 2.2i Vélo Électrique Urbain 28 Pouces",
    brand: "FISCHER",
    price: 1249,
    rating: 4.3,
    reviewCount: 189,
    image: "/images/fischer-cita.svg",
    category: "ville",
    autonomy: "80-140 km",
    motor: "250W Bafang",
    weight: "26 kg",
    speed: "25 km/h",
    pros: [
      "Marque allemande reconnue",
      "Autonomie impressionnante (140 km)",
      "Composants de qualité",
      "Moteur intégré discret"
    ],
    cons: [
      "Prix au-dessus de la moyenne",
      "Design classique"
    ],
    summary: "Le FISCHER Cita 2.2i est un vélo électrique de ville haut de gamme fabriqué par la marque allemande réputée. Avec une autonomie pouvant atteindre 140 km, c'est le champion de l'endurance."
  },
  {
    id: "rcb-rv10",
    asin: "B0CYL3JVLN",
    name: "RCB Vélo Électrique Pliant 20 Pouces RV10",
    brand: "RCB",
    price: 549,
    rating: 4.2,
    reviewCount: 945,
    image: "/images/rcb-rv10.svg",
    category: "pliant",
    autonomy: "40-80 km",
    motor: "250W",
    weight: "24 kg",
    speed: "25 km/h",
    pros: [
      "Bon compromis prix/autonomie",
      "Conception pliante pratique",
      "Batterie amovible",
      "Près de 1000 avis"
    ],
    cons: [
      "Un peu lourd pour un pliant (24 kg)",
      "Finitions perfectibles"
    ],
    summary: "Le RCB RV10 est un pliant populaire sur Amazon qui offre un bon compromis entre prix et autonomie. Sa batterie amovible est un vrai plus pour la recharge au bureau."
  }
];

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}

export function getTopProducts(count: number = 3): Product[] {
  return [...products].sort((a, b) => b.rating - a.rating).slice(0, count);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
