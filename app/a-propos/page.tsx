import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos de nous | eBike Distribution",
  description: "Découvrez notre mission : démocratiser la mobilité électrique en France avec des comparatifs honnêtes, indépendants et transparents.",
  alternates: { canonical: "/a-propos" },
};

export default function AboutPage() {
  return (
    <>
      <div className="article-hero" style={{ paddingBottom: "8rem" }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <nav className="breadcrumb">
            <a href="/">Accueil</a>
            <span className="breadcrumb-separator">›</span>
            <span>À Propos</span>
          </nav>
          <span className="section-label">⚡ Notre Mission</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1.5rem" }}>
            Démocratiser la <span className="highlight">mobilité électrique</span> urbaine
          </h1>
          <p style={{ maxWidth: 700, margin: "0 auto", fontSize: "1.25rem", color: "var(--text-secondary)" }}>
            Nous sommes une équipe de passionnés de tech et de cyclisme, dédiés à vous guider dans la jungle des vélos électriques pour trouver la perle rare au meilleur prix.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: "-6rem", position: "relative", zIndex: 3 }}>
        <img 
          src="/images/about-hero.png" 
          alt="Notre équipe travaillant sur un VAE prototype" 
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "500px",
            objectFit: "cover",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--border-glass)",
            boxShadow: "0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(0,255,136,0.1)",
            marginBottom: "4rem"
          }}
        />

        <div className="article-content" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2>Notre Histoire</h2>
          <p>
            Tout a commencé par une frustration. Lors de l&apos;achat de notre premier vélo électrique en 2021, 
            nous nous sommes retrouvés perdus face à des fiches techniques incompréhensibles, des prix qui 
            variaient du simple au triple, et des marques inconnues sur Amazon.
          </p>
          <p>
            <strong>eBike Distribution</strong> est né de cette expérience. Notre objectif ? Créer la plateforme 
            que nous aurions rêvé d&apos;avoir : claire, indépendante, et focalisée sur le compromis parfait entre 
            prix abordable et qualité de fabrication.
          </p>

          <div className="info-box" style={{ margin: "3rem 0" }}>
            <h4>🎯 Notre promesse</h4>
            <p>
              Nous ne testons et ne recommandons que des vélos qui respectent des normes strictes de sécurité, 
              qui ont fait leurs preuves auprès des utilisateurs (via des milliers d&apos;avis vérifiés), et qui 
              offrent un vrai service après-vente (retour 30 jours, garantie européenne).
            </p>
          </div>

          <h2>Pourquoi nous faire confiance ?</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", margin: "2rem 0" }}>
            <div style={{ padding: "1.5rem", background: "var(--surface)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-glass)" }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🔬</div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Analyse Indépendante</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", margin: 0 }}>
                Nous n&apos;appartenons à aucune marque de vélo. Nos classements sont basés sur les données techniques, les retours utilisateurs et le rapport qualité-prix réel.
              </p>
            </div>
            
            <div style={{ padding: "1.5rem", background: "var(--surface)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-glass)" }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>📊</div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Données Amazon</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", margin: 0 }}>
                Nous sélectionnons les meilleures ventes Amazon car la plateforme offre la meilleure protection acheteur (retour 30 jours) et une logistique imbattable.
              </p>
            </div>
            
            <div style={{ padding: "1.5rem", background: "var(--surface)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-glass)" }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🔄</div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Mises à jour quotidiennes</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", margin: 0 }}>
                Le marché évolue vite. Nos prix, disponibilités et classements sont mis à jour en permanence pour vous garantir l&apos;information la plus fraîche de 2026.
              </p>
            </div>
          </div>

          <h2>Modèle économique</h2>
          <p>
            Pour garantir la gratuité de notre contenu et payer nos serveurs, eBike Distribution 
            participe au Programme Partenaires d&apos;Amazon EU. Le principe est simple et transparent : 
            lorsque vous cliquez sur nos liens et achetez un vélo, nous touchons une petite commission.
          </p>
          <p style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
            Ceci n&apos;impacte <strong>absolument pas</strong> le prix que vous payez sur Amazon. C&apos;est simplement 
            leur façon de nous remercier pour vous avoir dirigé vers leur boutique de manière pertinente.
          </p>
        </div>

        <div className="cta-banner" style={{ marginTop: "4rem", marginBottom: "4rem" }}>
          <h2>Prêt à rouler électrique ?</h2>
          <p>Découvrez nos sélections et trouvez le vélo parfait pour vos besoins.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem" }}>
            <a href="/meilleur-velo-electrique-ville" className="btn btn-secondary">🏙️ Vélos Ville</a>
            <a href="/meilleur-vtt-electrique" className="btn btn-primary">⛰️ VTT Électriques</a>
            <a href="/meilleur-velo-electrique-pliant" className="btn btn-secondary">🔄 Vélos Pliants</a>
          </div>
        </div>
      </div>
    </>
  );
}
