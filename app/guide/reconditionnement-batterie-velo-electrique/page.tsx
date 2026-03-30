import type { Metadata } from "next";
import { FAQ } from "../../components/FAQ";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Reconditionnement Batterie Vélo Électrique : Guide Complet 2026",
  description: "Tout savoir sur le reconditionnement de batterie de vélo électrique : prix, durée de vie, signes d'usure, alternatives. Guide complet par des experts.",
  alternates: { canonical: "/guide/reconditionnement-batterie-velo-electrique" },
};

const faqItems = [
  { question: "Combien coûte un reconditionnement de batterie de vélo électrique ?", answer: "Le reconditionnement coûte entre 250€ et 600€ selon la capacité (Ah) et la technologie (Li-ion, LiFePO4). C'est 30 à 50% moins cher qu'une batterie neuve d'origine." },
  { question: "Combien de temps dure une batterie de vélo électrique ?", answer: "Une batterie Li-ion de qualité dure 500 à 1000 cycles de charge, soit environ 3 à 5 ans d'utilisation normale. Après cela, elle conserve environ 70-80% de sa capacité initiale." },
  { question: "Peut-on reconditionner soi-même sa batterie ?", answer: "C'est techniquement possible mais fortement déconseillé. Les batteries lithium sont dangereuses (risque d'incendie, d'explosion) si mal manipulées. Confiez toujours ce travail à un professionnel certifié." },
  { question: "Quand faut-il remplacer plutôt que reconditionner ?", answer: "Si la batterie a plus de 7 ans, si le BMS (système de gestion) est défaillant, ou si les cellules présentent des signes de gonflement, il vaut mieux remplacer. Le reconditionnement n'est pertinent que si le boîtier et le BMS sont en bon état." },
];

export default function RecondBatteriePage() {
  return (
    <>
      <ArticleSchema title="Reconditionnement Batterie Vélo Électrique" description="Guide complet du reconditionnement de batterie VAE." url="/guide/reconditionnement-batterie-velo-electrique" image="/images/guides/batterie-reconditionnement.png" datePublished="2026-01-20" dateModified="2026-03-30" />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[{ name: "Accueil", url: "/" }, { name: "Guides", url: "/guides" }, { name: "Reconditionnement batterie", url: "/guide/reconditionnement-batterie-velo-electrique" }]} />

      <div className="article-hero">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Accueil</a><span className="breadcrumb-separator">›</span>
            <a href="/guides">Guides</a><span className="breadcrumb-separator">›</span>
            <span>Reconditionnement batterie</span>
          </nav>
          <span className="section-label">🔋 Guide Expert</span>
          <h1>Reconditionnement Batterie Vélo Électrique : Le Guide Complet</h1>
          <p style={{ maxWidth: 650, margin: "0 auto", color: "var(--text-secondary)", fontSize: "1.15rem" }}>
            Votre batterie de vélo électrique perd en autonomie ? Découvrez tout sur le reconditionnement :
            quand le faire, combien ça coûte, et les alternatives.
          </p>
          <div className="article-meta">
            <span>📅 Mars 2026</span><span>⏱️ 12 min de lecture</span><span>✍️ Par la rédaction</span>
          </div>
          <div className="article-hero-image">
            <img src="/images/guides/batterie-reconditionnement.png" alt="Technicienne ouvrant un pack batterie lithium-ion de vélo électrique dans un atelier spécialisé" />
          </div>
        </div>
      </div>

      <div className="article-content">
        <p>
          La batterie est le composant le plus coûteux et le plus important de votre vélo électrique.
          Avec le temps, elle perd naturellement en capacité. Le <strong>reconditionnement</strong> permet
          de lui redonner une seconde vie à moindre coût, tout en adoptant une démarche écologique.
        </p>

        <div className="info-box">
          <h4>⚡ L&apos;essentiel en 30 secondes</h4>
          <p>
            Le reconditionnement consiste à remplacer les cellules usées d&apos;une batterie par des cellules
            neuves, tout en conservant le boîtier et le BMS. Coût : 250-600€ (30-50% moins cher qu&apos;une
            batterie neuve). Durée : 3-7 jours.
          </p>
        </div>

        <h2>Qu&apos;est-ce que le reconditionnement de batterie ?</h2>
        <p>
          Le reconditionnement de batterie de vélo électrique consiste à <strong>remplacer les cellules
          lithium-ion usées</strong> par des cellules neuves de qualité équivalente ou supérieure. Le boîtier
          externe, le connecteur et le BMS (Battery Management System) sont conservés si ils sont en bon état.
        </p>
        <p>
          C&apos;est une alternative économique et écologique au remplacement complet de la batterie. Au lieu
          de jeter 2-3 kg de lithium, on ne remplace que les cellules défaillantes.
        </p>

        <h2>Les signes que votre batterie a besoin d&apos;un reconditionnement</h2>
        <p>Voici les symptômes qui indiquent que votre batterie arrive en fin de vie :</p>
        <ul>
          <li><strong>Perte d&apos;autonomie significative :</strong> Vous ne faites plus que 50% de la distance initiale</li>
          <li><strong>Charge rapide :</strong> La batterie se charge en moins d&apos;une heure (signe de capacité réduite)</li>
          <li><strong>Coupures soudaines :</strong> Le vélo s&apos;arrête brusquement alors que la jauge indique encore de la charge</li>
          <li><strong>Baisse de puissance :</strong> L&apos;assistance est moins vigoureuse, surtout en côte</li>
          <li><strong>Batterie qui chauffe :</strong> La batterie devient anormalement chaude pendant la charge ou l&apos;utilisation</li>
        </ul>

        <h2>Le processus de reconditionnement étape par étape</h2>
        <h3>Étape 1 : Diagnostic</h3>
        <p>
          Le technicien teste chaque cellule individuellement pour identifier celles qui sont défaillantes.
          Il vérifie aussi le BMS et les connecteurs.
        </p>

        <h3>Étape 2 : Désassemblage</h3>
        <p>
          Le pack batterie est ouvert proprement. Les anciennes cellules sont dessoudées et retirées.
          Le boîtier est nettoyé et inspecté.
        </p>

        <h3>Étape 3 : Remplacement des cellules</h3>
        <p>
          Les nouvelles cellules (généralement Samsung, LG ou Panasonic) sont soudées par points
          et assemblées selon la configuration d&apos;origine (nombre de cellules en série et en parallèle).
        </p>

        <h3>Étape 4 : Tests et calibration</h3>
        <p>
          La batterie reconditionnée est testée sur plusieurs cycles de charge/décharge pour vérifier
          sa capacité réelle et calibrer le BMS.
        </p>

        <h2>Combien coûte un reconditionnement ?</h2>
        <p>Le prix dépend principalement de la capacité de la batterie et de la qualité des cellules choisies :</p>

        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Capacité</th>
                <th>Cellules standard</th>
                <th>Cellules premium</th>
                <th>Batterie neuve (comparaison)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>36V 10Ah</td>
                <td className="table-price">250-300€</td>
                <td className="table-price">350-400€</td>
                <td className="table-price">400-600€</td>
              </tr>
              <tr>
                <td>36V 14Ah</td>
                <td className="table-price">300-380€</td>
                <td className="table-price">400-480€</td>
                <td className="table-price">500-750€</td>
              </tr>
              <tr>
                <td>48V 13Ah</td>
                <td className="table-price">350-430€</td>
                <td className="table-price">450-550€</td>
                <td className="table-price">600-900€</td>
              </tr>
              <tr>
                <td>48V 17Ah</td>
                <td className="table-price">400-500€</td>
                <td className="table-price">520-650€</td>
                <td className="table-price">700-1100€</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Alternative : acheter un vélo neuf</h2>
        <p>
          Parfois, le reconditionnement n&apos;est pas la meilleure option. Si votre vélo est ancien
          (plus de 5-7 ans) et que le coût de reconditionnement dépasse 50% du prix d&apos;un vélo
          neuf équivalent, il est plus judicieux d&apos;investir dans un nouveau modèle.
        </p>
        <div className="info-box">
          <h4>💡 Notre conseil</h4>
          <p>
            Les vélos électriques neufs sur Amazon offrent un excellent rapport qualité-prix à
            partir de 400€, avec garantie constructeur et retours 30 jours.
            <a href="/meilleur-velo-electrique" style={{ marginLeft: "0.5rem" }}>Voir notre comparatif →</a>
          </p>
        </div>

        <h2>Comment prolonger la durée de vie de votre batterie</h2>
        <p>Quelques bonnes pratiques pour maximiser la longévité de votre batterie :</p>
        <ul>
          <li><strong>Stockage :</strong> Gardez la batterie entre 20°C et 25°C, jamais en dessous de 0°C</li>
          <li><strong>Niveau de charge :</strong> Stockez à 40-80% de charge (jamais à 0% ni à 100% longtemps)</li>
          <li><strong>Utilisation régulière :</strong> Une batterie qui ne sert pas se dégrade plus vite</li>
          <li><strong>Chargeur d&apos;origine :</strong> Utilisez toujours le chargeur fourni par le fabricant</li>
          <li><strong>Éviter la chaleur :</strong> Ne laissez jamais votre vélo en plein soleil en été</li>
          <li><strong>Charge partielle :</strong> Préférez plusieurs charges partielles à des charges complètes</li>
        </ul>

        <h2>Batteries de remplacement sur Amazon</h2>
        <p>
          Si vous préférez remplacer votre batterie plutôt que la reconditionner, Amazon propose
          de nombreuses batteries compatibles. Voici nos recommandations :
        </p>
        <ul>
          <li>Vérifiez la tension (36V ou 48V) et le type de connecteur</li>
          <li>Privilégiez les batteries avec cellules Samsung ou LG</li>
          <li>Choisissez une capacité égale ou supérieure à l&apos;originale</li>
          <li>Vérifiez la compatibilité avec votre modèle de vélo</li>
        </ul>

        <div className="cta-banner" style={{ margin: "3rem 0" }}>
          <h2>🔋 Besoin d&apos;un nouveau vélo ?</h2>
          <p>Si votre batterie est en fin de vie, découvrez les meilleurs vélos électriques 2026 sur Amazon.</p>
          <a href="/meilleur-velo-electrique" className="btn btn-amazon">🛒 Voir le comparatif</a>
        </div>

        <section className="section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="section-header"><h2>❓ Questions fréquentes</h2></div>
          <FAQ items={faqItems} />
        </section>

        <section style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <h2>🔗 Voir aussi</h2>
          <ul style={{ paddingLeft: "1.5rem", lineHeight: 2 }}>
            <li><a href="/meilleur-velo-electrique">Comparatif vélos électriques 2026</a></li>
            <li><a href="/guide/comment-choisir-velo-electrique">Guide d&apos;achat vélo électrique</a></li>
            <li><a href="/guide/entretien-velo-electrique">Comment entretenir son VAE</a></li>
            <li><a href="/guide/aides-etat-achat-velo-electrique">Aides financières pour l&apos;achat</a></li>
            <li><a href="/guide/legislation-assurance-velo-electrique">Législation et assurance</a></li>
          </ul>
        </section>
      </div>
    </>
  );
}
