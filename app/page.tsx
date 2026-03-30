import { getTopProducts, products } from "./data/products";
import { ProductCard } from "./components/ProductComponents";
import { FAQ } from "./components/FAQ";
import { FadeIn, StaggerContainer, StaggerItem } from "./components/MotionWrappers";
import { FAQSchema, ItemListSchema, BreadcrumbSchema } from "./components/JsonLd";

const topProducts = getTopProducts(3);

const faqItems = [
  {
    question: "Quel est le meilleur vélo électrique en 2026 ?",
    answer:
      "Le meilleur vélo électrique dépend de votre usage. Pour la ville, l'Eleglide T1 Step-Thru offre le meilleur confort. Pour un usage polyvalent, l'ENGWE M20 avec sa double batterie est imbattable. Pour un budget serré, le HITWAY BK6S pliant est le best-seller à moins de 500€.",
  },
  {
    question: "Combien coûte un bon vélo électrique ?",
    answer:
      "Un bon vélo électrique débute autour de 400-500€ pour les modèles pliants d'entrée de gamme. Les vélos de ville de qualité se situent entre 700 et 1200€. Les VTT électriques performants commencent à 800€. Au-delà de 1500€, vous accédez au segment premium avec des composants haut de gamme.",
  },
  {
    question: "Quelle autonomie pour un vélo électrique ?",
    answer:
      "L'autonomie varie de 30 km pour les petits modèles pliants à plus de 170 km pour les modèles avec double batterie comme l'ENGWE M20. En moyenne, comptez 50 à 80 km d'autonomie réelle. L'autonomie dépend du mode d'assistance, du poids du cycliste, du dénivelé et de la température.",
  },
  {
    question: "Faut-il un permis pour conduire un vélo électrique ?",
    answer:
      "Non, aucun permis n'est nécessaire pour un VAE (Vélo à Assistance Électrique) limité à 25 km/h avec un moteur de 250W maximum. C'est la réglementation européenne standard. Les speed bikes (45 km/h) nécessitent en revanche une immatriculation et un permis AM minimum.",
  },
  {
    question: "Amazon est-il fiable pour acheter un vélo électrique ?",
    answer:
      "Oui, Amazon offre plusieurs avantages : une politique de retour de 30 jours, la protection acheteur, des avis vérifiés de milliers d'utilisateurs, et souvent les meilleurs prix du marché. Privilégiez les produits « Expédié par Amazon » pour bénéficier de la livraison rapide et du SAV Amazon.",
  },
  {
    question: "Comment bénéficier des aides de l'État pour un vélo électrique ?",
    answer:
      "En 2026, vous pouvez cumuler le bonus écologique (jusqu'à 400€), la prime à la conversion (jusqu'à 3000€) et les aides de votre collectivité locale. Consultez notre guide complet sur les aides disponibles.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <FAQSchema items={faqItems} />
      <ItemListSchema products={products.map(p => ({
        name: p.name, description: p.summary, image: p.image,
        brand: p.brand, price: p.price, rating: p.rating,
        reviewCount: p.reviewCount, url: p.affiliateUrl || `https://www.amazon.fr/dp/${p.asin}?tag=ebike-distrib-21`
      }))} />
      <BreadcrumbSchema items={[{ name: "Accueil", url: "/" }]} />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-blob-1"></div>
        <div className="hero-bg-blob-2"></div>
        <div className="container">
          <div className="hero-wrapper">
            <FadeIn className="hero-content">
              <span className="hero-badge">⚡ Guide Expert 2026</span>
              <h1>
                Trouvez le <span className="highlight">vélo électrique</span>{" "}
                parfait pour vous
              </h1>
              <p className="hero-description">
                Comparatifs détaillés, avis d&apos;experts et meilleurs prix Amazon
                sur les vélos électriques les plus populaires de 2026.
              </p>
              <div className="hero-ctas">
                <a href="/meilleur-velo-electrique" className="btn btn-primary">
                  🔍 Voir le comparatif
                </a>
                <a
                  href="/guide/comment-choisir-velo-electrique"
                  className="btn btn-secondary"
                >
                  📖 Guide d&apos;achat
                </a>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-value">{products.length}+</div>
                  <div className="hero-stat-label">Vélos comparés</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">4.3★</div>
                  <div className="hero-stat-label">Note moyenne</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">419€</div>
                  <div className="hero-stat-label">À partir de</div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn className="hero-image-container" delay={0.2}>
              <img 
                src="/images/home-hero.png" 
                alt="Vélo électrique du futur" 
                className="hero-image"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="container">
        <FadeIn className="trust-bar">
          <div className="trust-item">
            <span className="trust-icon">✅</span>
            <span>Tests indépendants</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">📦</span>
            <span>Livraison Amazon gratuite</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🔄</span>
            <span>Retours 30 jours</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🇫🇷</span>
            <span>Guide expert français</span>
          </div>
        </FadeIn>
      </section>

      {/* Top Products */}
      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <span className="section-label">🏆 Sélection 2026</span>
            <h2>Les meilleurs vélos électriques du moment</h2>
            <p>
              Notre sélection des vélos électriques avec le meilleur rapport
              qualité-prix, basée sur les avis Amazon et nos tests.
            </p>
          </FadeIn>
          <StaggerContainer className="products-grid">
            {topProducts.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.3} style={{ textAlign: "center", marginTop: "3rem" }}>
            <a href="/meilleur-velo-electrique" className="btn btn-primary">
              Voir tous les comparatifs →
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Categories */}
      <section className="section" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border-glass)", borderBottom: "1px solid var(--border-glass)" }}>
        <div className="container">
          <FadeIn className="section-header">
            <span className="section-label">📂 Catégories</span>
            <h2>Quel type de vélo électrique cherchez-vous ?</h2>
          </FadeIn>
          <StaggerContainer className="categories-grid">
            <StaggerItem>
              <a href="/meilleur-velo-electrique-ville" className="category-card">
                <span className="category-icon">🏙️</span>
                <h3>Vélo de Ville</h3>
                <p>Confort et élégance pour vos trajets quotidiens</p>
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href="/meilleur-velo-electrique-pliant" className="category-card">
                <span className="category-icon">🔄</span>
                <h3>Vélo Pliant</h3>
                <p>Compact et pratique, idéal pour le multimodal</p>
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href="/meilleur-vtt-electrique" className="category-card">
                <span className="category-icon">⛰️</span>
                <h3>VTT Électrique</h3>
                <p>Puissance et robustesse pour le tout-terrain</p>
              </a>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Guides Section - ALL 5 guides */}
      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <span className="section-label">📖 Guides experts</span>
            <h2>Tout savoir sur le vélo électrique</h2>
            <p>Des dossiers thématiques rédigés par des passionnés pour maîtriser votre transition vers la mobilité électrique.</p>
          </FadeIn>
          <StaggerContainer className="guides-grid">
            <StaggerItem>
              <a href="/guide/comment-choisir-velo-electrique" className="guide-card">
                <span className="guide-card-icon">🎯</span>
                <div className="guide-card-content">
                  <h3>Comment choisir son vélo électrique ?</h3>
                  <p>Le guide complet pour faire le bon choix selon votre budget, votre usage et vos besoins.</p>
                </div>
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href="/guide/reconditionnement-batterie-velo-electrique" className="guide-card">
                <span className="guide-card-icon">🔋</span>
                <div className="guide-card-content">
                  <h3>Reconditionnement de batterie : le guide complet</h3>
                  <p>Tout savoir pour reconditionner votre batterie et prolonger la durée de vie de votre vélo.</p>
                </div>
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href="/guide/aides-etat-achat-velo-electrique" className="guide-card">
                <span className="guide-card-icon">💶</span>
                <div className="guide-card-content">
                  <h3>Aides de l&apos;État : économisez jusqu&apos;à 3800€</h3>
                  <p>Bonus écologique, prime à la conversion, subventions locales... Tout pour réduire la facture.</p>
                </div>
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href="/guide/entretien-velo-electrique" className="guide-card">
                <span className="guide-card-icon">🛠️</span>
                <div className="guide-card-content">
                  <h3>Entretenir son vélo électrique</h3>
                  <p>Les bons réflexes pour laver, graisser et prolonger la durée de vie de votre VAE.</p>
                </div>
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href="/guide/legislation-assurance-velo-electrique" className="guide-card">
                <span className="guide-card-icon">⚖️</span>
                <div className="guide-card-content">
                  <h3>Législation &amp; assurance VAE 2026</h3>
                  <p>Casque, pistes cyclables, assurance vol : les règles pour circuler en toute légalité.</p>
                </div>
              </a>
            </StaggerItem>
          </StaggerContainer>
          <FadeIn delay={0.3} style={{ textAlign: "center", marginTop: "2rem" }}>
            <a href="/guides" className="btn btn-secondary">
              Voir tous les guides →
            </a>
          </FadeIn>
        </div>
      </section>

      {/* SEO Content Block - Why Choose eBike Distribution */}
      <section className="section" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border-glass)", borderBottom: "1px solid var(--border-glass)" }}>
        <div className="container">
          <FadeIn className="section-header">
            <span className="section-label">💡 Pourquoi nous ?</span>
            <h2>La référence du comparatif vélo électrique en France</h2>
          </FadeIn>
          <FadeIn>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                <strong>eBike Distribution</strong> est né d&apos;une passion commune pour la mobilité durable et la technologie. 
                Notre mission : vous aider à naviguer dans le marché florissant du vélo électrique pour trouver 
                le modèle parfait, au meilleur prix.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", margin: "2.5rem 0" }}>
                <div>
                  <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>🔬 Analyse indépendante</h3>
                  <p style={{ fontSize: "0.95rem" }}>
                    Nous analysons les données de vente, les avis vérifiés et les specs techniques de chaque modèle. 
                    Aucune marque ne nous sponsorise.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>📊 Données réelles</h3>
                  <p style={{ fontSize: "0.95rem" }}>
                    Nos classements sont basés sur plus de {products.reduce((acc, p) => acc + p.reviewCount, 0).toLocaleString()} avis 
                    Amazon vérifiés. Pas d&apos;opinions subjectives, que des faits.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>🔄 Mises à jour quotidiennes</h3>
                  <p style={{ fontSize: "0.95rem" }}>
                    Prix, disponibilités et classements sont actualisés en permanence. 
                    Vous avez toujours l&apos;information la plus fraîche.
                  </p>
                </div>
              </div>
              <p style={{ fontSize: "0.95rem", textAlign: "center" }}>
                <a href="/a-propos">En savoir plus sur notre méthode →</a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <span className="section-label">❓ FAQ</span>
            <h2>Questions fréquentes sur les vélos électriques</h2>
          </FadeIn>
          <FadeIn>
            <FAQ items={faqItems} />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <FadeIn className="cta-banner">
            <h2>Trouvez votre vélo électrique idéal</h2>
            <p>
              Consultez notre comparatif complet et profitez des meilleurs prix
              Amazon avec livraison gratuite.
            </p>
            <a href="/meilleur-velo-electrique" className="btn btn-amazon">
              🛒 Voir les meilleurs prix sur Amazon
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
