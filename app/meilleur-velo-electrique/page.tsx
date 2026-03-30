import type { Metadata } from "next";
import { products } from "../data/products";
import {
  ComparisonTable,
  FeaturedProduct,
  ProsConsBox,
} from "../components/ProductComponents";
import { FAQ } from "../components/FAQ";

export const metadata: Metadata = {
  title: "Meilleur Vélo Électrique 2026 : Comparatif & Guide d'Achat",
  description:
    "Comparatif des meilleurs vélos électriques 2026. Tests, avis et meilleurs prix Amazon. ENGWE, HITWAY, Eleglide... Trouvez le vélo idéal pour votre budget.",
  alternates: { canonical: "/meilleur-velo-electrique" },
};

const faqItems = [
  {
    question: "Quel est le meilleur vélo électrique rapport qualité-prix en 2026 ?",
    answer:
      "Le HITWAY BK6S est le meilleur rapport qualité-prix en 2026 à moins de 500€. Pour un budget plus conséquent, l'ENGWE M20 avec double batterie offre des prestations exceptionnelles autour de 1100€.",
  },
  {
    question: "Quel vélo électrique choisir pour aller au travail ?",
    answer:
      "Pour les trajets domicile-travail, un vélo pliant comme le HITWAY BK6S ou le RCB RV10 est idéal pour le multimodal (train + vélo). Pour des trajets plus longs, l'Eleglide T1 Step-Thru offre plus de confort.",
  },
  {
    question: "Les vélos électriques Amazon sont-ils fiables ?",
    answer:
      "Oui, les marques vendues sur Amazon comme ENGWE, HITWAY, Eleglide ou ESKUTE ont fait leurs preuves avec des milliers d'avis positifs. La politique de retour 30 jours d'Amazon offre une protection supplémentaire.",
  },
  {
    question: "Quelle puissance de moteur choisir ?",
    answer:
      "En France, la réglementation limite les VAE à 250W et 25 km/h. Tous les modèles de notre comparatif respectent cette norme. Un moteur 250W suffit pour la ville et les pentes modérées. Pour du tout-terrain intensif, privilégiez un moteur avec un couple élevé.",
  },
];

export default function MeilleurVeloElectriquePage() {
  const featured = products.find((p) => p.id === "engwe-m20")!;
  const sorted = [...products].sort((a, b) => b.rating - a.rating);

  return (
    <>
      {/* Hero */}
      <div className="article-hero">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Accueil</a>
            <span className="breadcrumb-separator">›</span>
            <span>Comparatif vélos électriques</span>
          </nav>
          <span className="section-label">🏆 Comparatif 2026</span>
          <h1>Meilleur Vélo Électrique 2026 : Notre Comparatif Complet</h1>
          <p style={{ maxWidth: 650, margin: "0 auto", color: "var(--text-secondary)", fontSize: "1.15rem" }}>
            Après avoir analysé les ventes et les avis de milliers d&apos;utilisateurs sur Amazon.fr,
            voici notre sélection des {products.length} meilleurs vélos électriques de 2026.
          </p>
          <div className="article-meta">
            <span>📅 Mis à jour : Mars 2026</span>
            <span>⏱️ 12 min de lecture</span>
            <span>🔍 {products.length} produits comparés</span>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Featured Product */}
        <section style={{ marginTop: "2rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>🥇 Notre choix n°1 : {featured.brand} {featured.name.split(" ").slice(1, 4).join(" ")}</h2>
          <FeaturedProduct product={featured} />
          <ProsConsBox pros={featured.pros} cons={featured.cons} />
        </section>

        {/* Comparison Table */}
        <section className="section">
          <h2>📊 Tableau comparatif complet</h2>
          <p>Voici un récapitulatif de tous les vélos électriques de notre sélection, classés par note.</p>
          <ComparisonTable products={sorted} />
        </section>

        {/* All Products */}
        <section className="section">
          <h2>🔍 Analyse détaillée de chaque modèle</h2>
          <p style={{ marginBottom: "2rem" }}>
            Découvrez notre avis détaillé sur chaque vélo électrique de la sélection.
          </p>

          {sorted.map((product, index) => (
            <div key={product.id} style={{ marginBottom: "3rem" }}>
              <h3>
                {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `${index + 1}.`}{" "}
                {product.name}
              </h3>
              {product.image && product.image.startsWith("/images/products/") && (
                <div style={{ 
                  textAlign: "center", 
                  margin: "1.5rem 0", 
                  padding: "2rem", 
                  background: "var(--surface)", 
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid rgba(255,255,255,0.06)"
                }}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    style={{ 
                      maxWidth: "350px", 
                      width: "100%", 
                      height: "auto", 
                      objectFit: "contain",
                      filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.4))"
                    }} 
                  />
                </div>
              )}
              <div style={{ display: "flex", gap: "1rem", margin: "0.5rem 0", flexWrap: "wrap" }}>
                <span className="spec-tag">⚡ {product.motor}</span>
                <span className="spec-tag">🔋 {product.autonomy}</span>
                <span className="spec-tag">⚖️ {product.weight}</span>
                <span className="spec-tag">🏎️ {product.speed}</span>
              </div>
              <p style={{ marginTop: "1rem" }}>{product.summary}</p>
              <ProsConsBox pros={product.pros} cons={product.cons} />
              <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
                <span className="product-price" style={{ marginRight: "1rem" }}>
                  {product.price}<span className="product-price-currency">€</span>
                </span>
                <a
                  href={product.affiliateUrl || `https://www.amazon.fr/dp/${product.asin}?tag=ebike-distrib-21`}
                  target="_blank"
                  rel="nofollow noopener sponsored"
                  className="btn btn-amazon"
                >
                  🛒 Voir le prix sur Amazon
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Guide d'achat rapide */}
        <section className="section">
          <h2>📖 Mini guide d&apos;achat : comment choisir ?</h2>
          <div className="info-box">
            <h4>💡 Les 5 critères essentiels</h4>
            <p>Avant d&apos;acheter, vérifiez ces points clés :</p>
          </div>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "1rem" }}>
            <li style={{ marginBottom: "1rem", color: "var(--text-secondary)" }}>
              <strong style={{ color: "var(--text-primary)" }}>L&apos;autonomie :</strong> Évaluez vos trajets quotidiens. Prévoyez 30% de marge par rapport à vos besoins réels.
            </li>
            <li style={{ marginBottom: "1rem", color: "var(--text-secondary)" }}>
              <strong style={{ color: "var(--text-primary)" }}>Le poids :</strong> Crucial si vous devez porter le vélo (escaliers, transport en commun). De 17 kg (DYU D3F) à 35 kg (ENGWE M20).
            </li>
            <li style={{ marginBottom: "1rem", color: "var(--text-secondary)" }}>
              <strong style={{ color: "var(--text-primary)" }}>Le moteur :</strong> 250W est la norme légale en France. Privilégiez un moteur de marque (Bafang, Shimano) pour la fiabilité.
            </li>
            <li style={{ marginBottom: "1rem", color: "var(--text-secondary)" }}>
              <strong style={{ color: "var(--text-primary)" }}>Le type de frein :</strong> Les freins à disque hydrauliques sont plus efficaces et nécessitent moins d&apos;entretien que les freins mécaniques.
            </li>
            <li style={{ marginBottom: "1rem", color: "var(--text-secondary)" }}>
              <strong style={{ color: "var(--text-primary)" }}>Le SAV :</strong> Acheter sur Amazon garantit une politique de retour de 30 jours et un SAV réactif.
            </li>
          </ol>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="section-header">
            <span className="section-label">❓ FAQ</span>
            <h2>Questions fréquentes</h2>
          </div>
          <FAQ items={faqItems} />
        </section>

        {/* CTA finale */}
        <div className="cta-banner" style={{ marginBottom: "3rem" }}>
          <h2>🚲 Prêt à choisir votre vélo électrique ?</h2>
          <p>
            Tous les vélos de notre sélection sont disponibles sur Amazon avec
            livraison gratuite et retours 30 jours.
          </p>
          <a href="#" className="btn btn-amazon" onClick={undefined}>
            🛒 Voir les meilleurs prix sur Amazon
          </a>
        </div>
      </div>
    </>
  );
}
