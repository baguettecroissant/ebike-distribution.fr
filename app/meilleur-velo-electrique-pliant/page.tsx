import type { Metadata } from "next";
import { getProductsByCategory } from "../data/products";
import { ComparisonTable, FeaturedProduct, ProsConsBox } from "../components/ProductComponents";
import { FAQ } from "../components/FAQ";
import { FAQSchema, BreadcrumbSchema } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Meilleur Vélo Électrique Pliant 2026 : Comparatif & Avis",
  description: "Comparatif des meilleurs vélos électriques pliants 2026. HITWAY, DYU, RCB... Vélos compacts parfaits pour le multimodal. Avis et meilleurs prix Amazon.",
  alternates: { canonical: "/meilleur-velo-electrique-pliant" },
};

const faqItems = [
  { question: "Quel est le meilleur vélo pliant électrique pas cher ?", answer: "Le HITWAY BK6S est le meilleur vélo pliant électrique à moins de 500€. Avec plus de 1200 avis positifs et une autonomie correcte de 35-70 km, c'est le best-seller incontesté de la catégorie." },
  { question: "Un vélo pliant électrique est-il autorisé dans le train ?", answer: "Oui, les vélos pliants sont autorisés dans tous les trains SNCF sans supplément, à condition d'être pliés et rangés dans une housse. C'est l'un des grands avantages du vélo pliant pour le multimodal." },
  { question: "Quel poids maximum pour un vélo pliant ?", answer: "Pour un usage multimodal quotidien (train, bus, escaliers), visez un vélo de moins de 20 kg. Le DYU D3F à 17 kg est le plus léger. Au-delà de 25 kg, le portage devient difficile." },
];

export default function VeloPliantPage() {
  const pliants = getProductsByCategory("pliant");
  const featured = pliants.find(p => p.badge) || pliants[0];

  return (
    <>
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "/" },
        { name: "Comparatifs", url: "/meilleur-velo-electrique" },
        { name: "Vélo pliant", url: "/meilleur-velo-electrique-pliant" }
      ]} />

      <div className="article-hero">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Accueil</a><span className="breadcrumb-separator">›</span>
            <a href="/meilleur-velo-electrique">Comparatifs</a><span className="breadcrumb-separator">›</span>
            <span>Vélo pliant</span>
          </nav>
          <span className="section-label">🔄 Pliants 2026</span>
          <h1>Meilleur Vélo Électrique Pliant 2026</h1>
          <p style={{ maxWidth: 650, margin: "0 auto", color: "var(--text-secondary)", fontSize: "1.15rem" }}>
            Compact, léger et pratique : notre sélection des vélos pliants électriques idéaux pour le multimodal et les espaces réduits.
          </p>
          <div className="article-meta">
            <span>📅 Mars 2026</span><span>⏱️ 7 min</span><span>🔍 {pliants.length} modèles</span>
          </div>
        </div>
      </div>

      <div className="container">
        <section style={{ marginTop: "2rem" }}>
          <h2>🥇 Notre choix pliant : {featured.name}</h2>
          <FeaturedProduct product={featured} />
          <ProsConsBox pros={featured.pros} cons={featured.cons} />
        </section>

        <section className="section">
          <h2>📊 Comparatif vélos pliants</h2>
          <ComparisonTable products={pliants} />
        </section>

        <section className="section">
          <h2>🔍 Avis détaillé</h2>
          {pliants.map((product, i) => (
            <div key={product.id} style={{ marginBottom: "3rem" }}>
              <h3>{i === 0 ? "🥇" : i === 1 ? "🥈" : `${i + 1}.`} {product.name}</h3>
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
          <h2>🔄 Pourquoi choisir un vélo pliant électrique ?</h2>
          <p>Le vélo pliant électrique est la solution idéale pour les citadins qui combinent plusieurs modes de transport. Train + vélo, bus + vélo, voiture + vélo... il s&apos;adapte à tous les usages multimodaux.</p>
          <div className="info-box">
            <h4>💡 Astuce rangement</h4>
            <p>Un vélo pliant se range sous un bureau, dans un placard ou dans le coffre d&apos;une voiture. C&apos;est aussi un atout anti-vol : vous l&apos;emmenez partout avec vous !</p>
          </div>
        </section>

        <section className="section">
          <div className="section-header"><h2>❓ FAQ — Vélos pliants</h2></div>
          <FAQ items={faqItems} />
        </section>

        <div className="cta-banner" style={{ marginBottom: "1rem" }}>
          <h2>🔄 Compact et électrique !</h2>
          <p>Découvrez les vélos pliants au meilleur prix sur Amazon.</p>
          <a href={featured.affiliateUrl || `https://www.amazon.fr/dp/${featured.asin}?tag=ebike-distrib-21`} target="_blank" rel="nofollow noopener sponsored" className="btn btn-amazon">🛒 Voir le meilleur prix</a>
        </div>

        <section className="section">
          <h2>🔗 Voir aussi</h2>
          <ul style={{ paddingLeft: "1.5rem", lineHeight: 2 }}>
            <li><a href="/meilleur-velo-electrique">Comparatif général vélos électriques 2026</a></li>
            <li><a href="/meilleur-velo-electrique-ville">Meilleurs vélos électriques de ville</a></li>
            <li><a href="/meilleur-vtt-electrique">Meilleurs VTT électriques</a></li>
            <li><a href="/guide/comment-choisir-velo-electrique">Guide d&apos;achat vélo électrique</a></li>
            <li><a href="/guide/aides-etat-achat-velo-electrique">Aides financières pour l&apos;achat d&apos;un VAE</a></li>
            <li><a href="/guide/entretien-velo-electrique">Comment entretenir son vélo électrique</a></li>
          </ul>
        </section>
      </div>
    </>
  );
}
