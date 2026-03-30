import type { Metadata } from "next";
import { products } from "../data/products";
import {
  ComparisonTable,
  FeaturedProduct,
  ProsConsBox,
} from "../components/ProductComponents";
import { FAQ } from "../components/FAQ";
import { FAQSchema, BreadcrumbSchema, ItemListSchema } from "../components/JsonLd";

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
      "Pour les trajets domicile-travail, un vélo pliant comme le HITWAY BK6S ou le RCB GK4 est idéal pour le multimodal (train + vélo). Pour des trajets plus longs, l'Eleglide T1 Step-Thru offre plus de confort.",
  },
  {
    question: "Les vélos électriques Amazon sont-ils fiables ?",
    answer:
      "Oui, les marques vendues sur Amazon comme ENGWE, HITWAY, Eleglide ou RCB ont fait leurs preuves avec des milliers d'avis positifs. La politique de retour 30 jours d'Amazon offre une protection supplémentaire.",
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
      {/* JSON-LD Schemas */}
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "/" },
        { name: "Comparatif vélos électriques", url: "/meilleur-velo-electrique" }
      ]} />
      <ItemListSchema products={sorted.map(p => ({
        name: p.name, description: p.summary, image: p.image,
        brand: p.brand, price: p.price, rating: p.rating,
        reviewCount: p.reviewCount, url: p.affiliateUrl || `https://www.amazon.fr/dp/${p.asin}?tag=ebike-distrib-21`
      }))} />

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

        {/* Cross-linking - Maillage interne */}
        <section className="section">
          <h2>📂 Explorer par catégorie</h2>
          <p style={{ marginBottom: "1.5rem" }}>Affinez votre recherche selon votre usage :</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <a href="/meilleur-velo-electrique-ville" className="category-card" style={{ padding: "1.5rem" }}>
              <span className="category-icon">🏙️</span>
              <h3>Vélos de Ville</h3>
              <p>Les meilleurs VAE pour vos trajets quotidiens urbains</p>
            </a>
            <a href="/meilleur-velo-electrique-pliant" className="category-card" style={{ padding: "1.5rem" }}>
              <span className="category-icon">🔄</span>
              <h3>Vélos Pliants</h3>
              <p>Compacts et légers, idéaux pour le multimodal</p>
            </a>
            <a href="/meilleur-vtt-electrique" className="category-card" style={{ padding: "1.5rem" }}>
              <span className="category-icon">⛰️</span>
              <h3>VTT Électriques</h3>
              <p>Puissance et robustesse pour le tout-terrain</p>
            </a>
          </div>
        </section>

        {/* Related Guides - Maillage */}
        <section className="section">
          <h2>📖 Guides complémentaires</h2>
          <ul style={{ paddingLeft: "1.5rem", lineHeight: 2 }}>
            <li><a href="/guide/comment-choisir-velo-electrique">Comment choisir son vélo électrique en 2026 (guide complet)</a></li>
            <li><a href="/guide/aides-etat-achat-velo-electrique">Aides de l&apos;État : économisez jusqu&apos;à 3800€ sur votre achat</a></li>
            <li><a href="/guide/legislation-assurance-velo-electrique">Législation et assurance VAE : ce qu&apos;il faut savoir</a></li>
            <li><a href="/guide/entretien-velo-electrique">Comment entretenir son vélo électrique</a></li>
            <li><a href="/guide/reconditionnement-batterie-velo-electrique">Reconditionnement batterie : prix et conseils</a></li>
          </ul>
        </section>

        {/* CTA finale */}
        <div className="cta-banner" style={{ marginBottom: "3rem" }}>
          <h2>🚲 Prêt à choisir votre vélo électrique ?</h2>
          <p>
            Tous les vélos de notre sélection sont disponibles sur Amazon avec
            livraison gratuite et retours 30 jours.
          </p>
          <a href={`https://www.amazon.fr/dp/${featured.asin}?tag=ebike-distrib-21`} target="_blank" rel="nofollow noopener sponsored" className="btn btn-amazon">
            🛒 Voir les meilleurs prix sur Amazon
          </a>
        </div>
      </div>
    </>
  );
}
