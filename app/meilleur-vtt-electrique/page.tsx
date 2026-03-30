import type { Metadata } from "next";
import { getProductsByCategory } from "../data/products";
import { ComparisonTable, FeaturedProduct, ProsConsBox } from "../components/ProductComponents";
import { FAQ } from "../components/FAQ";

export const metadata: Metadata = {
  title: "Meilleur VTT Électrique 2026 : Comparatif & Avis",
  description: "Comparatif des meilleurs VTT électriques 2026. ENGWE, ESKUTE, COLORWAY... VTT e-bikes pour le tout-terrain. Avis et meilleurs prix Amazon.",
  alternates: { canonical: "/meilleur-vtt-electrique" },
};

const faqItems = [
  { question: "Quel est le meilleur VTT électrique à moins de 1000€ ?", answer: "L'ESKUTE Netuno Plus est notre recommandation à moins de 1000€. Son moteur Bafang fiable, ses freins hydrauliques et son autonomie de 120 km en font le meilleur choix dans cette gamme de prix." },
  { question: "Fat bike ou VTT classique ?", answer: "Les fat bikes (pneus larges comme l'ENGWE M20) offrent plus de stabilité et d'adhérence sur terrain meuble (sable, neige, boue). Les VTT classiques 27.5/29 pouces sont plus légers et meilleurs sur les sentiers secs." },
  { question: "Peut-on utiliser un VTT électrique en ville ?", answer: "Absolument ! Un VTT électrique est très polyvalent. Sa suspension et ses pneus larges absorbent parfaitement les défauts de la chaussée urbaine (pavés, nids de poule). C'est simplement un peu plus lourd qu'un vélo de ville." },
];

export default function VTTPage() {
  const vtts = getProductsByCategory("vtt");
  const featured = vtts.find(p => p.badge) || vtts[0];

  return (
    <>
      <div className="article-hero">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Accueil</a><span className="breadcrumb-separator">›</span>
            <a href="/meilleur-velo-electrique">Comparatifs</a><span className="breadcrumb-separator">›</span>
            <span>VTT électrique</span>
          </nav>
          <span className="section-label">⛰️ VTT 2026</span>
          <h1>Meilleur VTT Électrique 2026</h1>
          <p style={{ maxWidth: 650, margin: "0 auto", color: "var(--text-secondary)", fontSize: "1.15rem" }}>
            Puissance, robustesse et autonomie : notre sélection des VTT électriques pour conquérir tous les terrains.
          </p>
          <div className="article-meta">
            <span>📅 Mars 2026</span><span>⏱️ 8 min</span><span>🔍 {vtts.length} modèles</span>
          </div>
        </div>
      </div>

      <div className="container">
        <section style={{ marginTop: "2rem" }}>
          <h2>🥇 Notre choix VTT : {featured.name}</h2>
          <FeaturedProduct product={featured} />
          <ProsConsBox pros={featured.pros} cons={featured.cons} />
        </section>

        <section className="section">
          <h2>📊 Comparatif VTT électriques</h2>
          <ComparisonTable products={vtts} />
        </section>

        <section className="section">
          <h2>🔍 Avis détaillé</h2>
          {vtts.map((product, i) => (
            <div key={product.id} style={{ marginBottom: "3rem" }}>
              <h3>{i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `${i + 1}.`} {product.name}</h3>
              {product.image && product.image.startsWith("/images/products/") && (
                <div style={{ textAlign: "center", margin: "1.5rem 0", padding: "2rem", background: "var(--surface)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <img src={product.image} alt={product.name} style={{ maxWidth: "350px", width: "100%", height: "auto", objectFit: "contain", filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.4))" }} />
                </div>
              )}
              <p style={{ marginTop: "1rem" }}>{product.summary}</p>
              <ProsConsBox pros={product.pros} cons={product.cons} />
              <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
                <span className="product-price" style={{ marginRight: "1rem" }}>{product.price}<span className="product-price-currency">€</span></span>
                <a href={product.affiliateUrl || `https://www.amazon.fr/dp/${product.asin}?tag=ebike-distrib-21`} target="_blank" rel="nofollow noopener sponsored" className="btn btn-amazon">🛒 Voir sur Amazon</a>
              </div>
            </div>
          ))}
        </section>

        <section className="section">
          <h2>⛰️ Guide : bien choisir son VTT électrique</h2>
          <p>Le VTT électrique (ou e-MTB) ouvre de nouvelles possibilités pour les amateurs de plein air. Voici les critères à considérer :</p>
          <h3 style={{ marginTop: "1.5rem" }}>Taille des roues</h3>
          <ul style={{ paddingLeft: "1.5rem", marginTop: "0.75rem" }}>
            <li style={{ marginBottom: "0.5rem", color: "var(--text-secondary)" }}><strong style={{ color: "var(--text-primary)" }}>20 pouces (fat):</strong> Stabilité maximale, idéal tout-terrain</li>
            <li style={{ marginBottom: "0.5rem", color: "var(--text-secondary)" }}><strong style={{ color: "var(--text-primary)" }}>26 pouces:</strong> Polyvalent, bon compromis maniabilité/stabilité</li>
            <li style={{ marginBottom: "0.5rem", color: "var(--text-secondary)" }}><strong style={{ color: "var(--text-primary)" }}>27.5 pouces:</strong> Le standard VTT, excellent rendement</li>
          </ul>
          <h3 style={{ marginTop: "1.5rem" }}>Suspension</h3>
          <p>Pour le tout-terrain, une suspension avant de qualité est indispensable. Les modèles tout-suspendu (avant + arrière) sont réservés aux pratiques intensives et aux budgets plus importants.</p>
        </section>

        <section className="section">
          <div className="section-header"><h2>❓ FAQ — VTT électriques</h2></div>
          <FAQ items={faqItems} />
        </section>

        <div className="cta-banner" style={{ marginBottom: "3rem" }}>
          <h2>⛰️ L&apos;aventure électrique vous attend</h2>
          <p>Découvrez les VTT électriques au meilleur prix sur Amazon.</p>
          <a href={`https://www.amazon.fr/dp/${featured.asin}?tag=ebike-distrib-21`} target="_blank" rel="nofollow noopener sponsored" className="btn btn-amazon">🛒 Voir le meilleur prix</a>
        </div>
      </div>
    </>
  );
}
