import type { Metadata } from "next";
import { getProductsByCategory } from "../data/products";
import {
  ComparisonTable,
  FeaturedProduct,
  ProsConsBox,
} from "../components/ProductComponents";
import { FAQ } from "../components/FAQ";
import { FAQSchema, BreadcrumbSchema } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Meilleur Vélo Électrique de Ville 2026 : Comparatif & Avis",
  description:
    "Comparatif des meilleurs vélos électriques de ville 2026. Eleglide, FISCHER... Trouvez le vélo urbain idéal pour vos trajets quotidiens. Avis et meilleurs prix Amazon.",
  alternates: { canonical: "/meilleur-velo-electrique-ville" },
};

const faqItems = [
  {
    question: "Quel est le meilleur vélo électrique de ville en 2026 ?",
    answer:
      "L'Eleglide T1 Step-Thru est notre choix n°1 pour la ville grâce à son cadre bas accessible, son confort de conduite et son application mobile. Le FISCHER Cita 2.2i est le choix premium pour ceux qui veulent une autonomie maximale.",
  },
  {
    question: "Quelle autonomie pour un vélo de ville électrique ?",
    answer:
      "Pour les trajets urbains quotidiens, une autonomie de 50 à 80 km est suffisante. Les modèles comme le FISCHER Cita atteignent 140 km, ce qui permet une semaine complète de trajets sans recharge.",
  },
  {
    question: "Un cadre Step-Thru est-il mieux pour la ville ?",
    answer:
      "Oui, un cadre Step-Thru (cadre bas) est beaucoup plus pratique en ville : montée et descente faciles aux feux rouges, compatible avec une jupe ou un manteau, et plus sécurisant. C'est le standard pour les vélos urbains.",
  },
];

export default function VeloCityPage() {
  const cityBikes = getProductsByCategory("ville");
  const featured = cityBikes[0];

  return (
    <>
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "/" },
        { name: "Comparatifs", url: "/meilleur-velo-electrique" },
        { name: "Vélo de ville", url: "/meilleur-velo-electrique-ville" }
      ]} />

      <div className="article-hero">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Accueil</a>
            <span className="breadcrumb-separator">›</span>
            <a href="/meilleur-velo-electrique">Comparatifs</a>
            <span className="breadcrumb-separator">›</span>
            <span>Vélo de ville</span>
          </nav>
          <span className="section-label">🏙️ Ville 2026</span>
          <h1>Meilleur Vélo Électrique de Ville 2026</h1>
          <p style={{ maxWidth: 650, margin: "0 auto", color: "var(--text-secondary)", fontSize: "1.15rem" }}>
            Notre sélection des meilleurs vélos électriques urbains pour vos trajets
            quotidiens : confort, autonomie et style.
          </p>
          <div className="article-meta">
            <span>📅 Mars 2026</span>
            <span>⏱️ 8 min de lecture</span>
            <span>🔍 {cityBikes.length} modèles</span>
          </div>
        </div>
      </div>

      <div className="container">
        <section style={{ marginTop: "2rem" }}>
          <h2>🥇 Notre choix ville : {featured.brand} {featured.name.split(" ").slice(1, 4).join(" ")}</h2>
          <FeaturedProduct product={featured} />
          <ProsConsBox pros={featured.pros} cons={featured.cons} />
        </section>

        <section className="section">
          <h2>📊 Comparatif vélos de ville</h2>
          <ComparisonTable products={cityBikes} />
        </section>

        <section className="section">
          <h2>🔍 Détails de chaque modèle</h2>
          {cityBikes.map((product, index) => (
            <div key={product.id} style={{ marginBottom: "3rem" }}>
              <h3>
                {index === 0 ? "🥇" : index === 1 ? "🥈" : `${index + 1}.`} {product.name}
              </h3>
              {product.image && product.image.startsWith("/images/products/") && (
                <div style={{ textAlign: "center", margin: "1.5rem 0", padding: "2rem", background: "var(--surface)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <img src={product.image} alt={product.name} style={{ maxWidth: "350px", width: "100%", height: "auto", objectFit: "contain", filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.4))" }} />
                </div>
              )}
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
                  🛒 Voir sur Amazon
                </a>
              </div>
            </div>
          ))}
        </section>

        <section className="section">
          <h2>🏙️ Pourquoi choisir un vélo électrique pour la ville ?</h2>
          <p>
            Le vélo électrique de ville est devenu le moyen de transport urbain le plus efficace
            en 2026. Plus rapide qu&apos;une voiture aux heures de pointe, plus propre et bien plus
            économique, il révolutionne les trajets quotidiens.
          </p>
          <div className="info-box">
            <h4>💡 Le saviez-vous ?</h4>
            <p>
              En ville, un vélo électrique est plus rapide qu&apos;une voiture pour les trajets de
              moins de 10 km. Avec une vitesse moyenne de 20 km/h porte-à-porte (sans chercher
              de parking !), c&apos;est le transport le plus efficace en milieu urbain.
            </p>
          </div>
          <h3 style={{ marginTop: "2rem" }}>Les avantages du vélo électrique urbain</h3>
          <ul style={{ paddingLeft: "1.5rem", marginTop: "1rem" }}>
            <li style={{ marginBottom: "0.75rem", color: "var(--text-secondary)" }}>
              <strong style={{ color: "var(--text-primary)" }}>Économies considérables :</strong> Environ 0,01€/km vs 0,30€/km en voiture
            </li>
            <li style={{ marginBottom: "0.75rem", color: "var(--text-secondary)" }}>
              <strong style={{ color: "var(--text-primary)" }}>Zéro embouteillage :</strong> Fini le stress des bouchons
            </li>
            <li style={{ marginBottom: "0.75rem", color: "var(--text-secondary)" }}>
              <strong style={{ color: "var(--text-primary)" }}>Santé :</strong> Activité physique quotidienne modérée
            </li>
            <li style={{ marginBottom: "0.75rem", color: "var(--text-secondary)" }}>
              <strong style={{ color: "var(--text-primary)" }}>Écologique :</strong> Zéro émission de CO2
            </li>
          </ul>
        </section>

        <section className="section">
          <div className="section-header">
            <h2>❓ FAQ — Vélos de ville électriques</h2>
          </div>
          <FAQ items={faqItems} />
        </section>

        <div className="cta-banner" style={{ marginBottom: "1rem" }}>
          <h2>🏙️ Prêt pour le vélotaf ?</h2>
          <p>Découvrez les vélos de ville électriques au meilleur prix sur Amazon.</p>
          <a href={featured.affiliateUrl || `https://www.amazon.fr/dp/${featured.asin}?tag=ebike-distrib-21`} target="_blank" rel="nofollow noopener sponsored" className="btn btn-amazon">
            🛒 Voir le meilleur prix
          </a>
        </div>

        {/* Cross-links */}
        <section className="section">
          <h2>🔗 Voir aussi</h2>
          <ul style={{ paddingLeft: "1.5rem", lineHeight: 2 }}>
            <li><a href="/meilleur-velo-electrique">Comparatif général de tous les vélos électriques 2026</a></li>
            <li><a href="/meilleur-velo-electrique-pliant">Meilleurs vélos électriques pliants : comparatif</a></li>
            <li><a href="/meilleur-vtt-electrique">Meilleurs VTT électriques : comparatif</a></li>
            <li><a href="/guide/comment-choisir-velo-electrique">Guide : comment choisir son vélo électrique</a></li>
            <li><a href="/guide/aides-etat-achat-velo-electrique">Aides de l&apos;État pour l&apos;achat d&apos;un vélo électrique</a></li>
            <li><a href="/guide/legislation-assurance-velo-electrique">Législation et assurance VAE 2026</a></li>
          </ul>
        </section>
      </div>
    </>
  );
}
