import type { Metadata } from "next";
import { FAQ } from "../../components/FAQ";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Comment Choisir son Vélo Électrique en 2026 : Le Guide Complet",
  description: "Guide complet pour choisir votre vélo électrique en 2026. Budget, autonomie, moteur, type de vélo... Tous les critères pour faire le bon choix.",
  alternates: { canonical: "/guide/comment-choisir-velo-electrique" },
};

const faqItems = [
  { question: "Quel budget prévoir pour un bon vélo électrique ?", answer: "Un bon vélo électrique débute à 400-500€ pour les pliants. Comptez 700-1200€ pour un modèle ville/VTT de qualité. Au-dessus de 1500€, vous accédez aux modèles premium avec des composants haut de gamme." },
  { question: "Vélo électrique d'occasion : bonne idée ?", answer: "Attention à la batterie ! C'est le composant le plus coûteux (300-800€ à remplacer). Vérifiez l'état de la batterie et le nombre de cycles. Sur Amazon, les vélos neufs bénéficient de la garantie constructeur et des retours 30 jours." },
  { question: "Faut-il une assurance pour un vélo électrique ?", answer: "Ce n'est pas obligatoire pour un VAE limité à 25 km/h, mais c'est fortement recommandé. Une assurance vol + responsabilité civile coûte entre 50 et 150€/an. Certaines assurances habitation couvrent le vélo." },
];

export default function GuideChoixPage() {
  return (
    <>
      <ArticleSchema 
        title="Comment Choisir son Vélo Électrique en 2026" 
        description="Guide complet pour choisir votre vélo électrique en 2026."
        url="/guide/comment-choisir-velo-electrique"
        image="/images/guides/choisir-velo.png"
        datePublished="2026-01-15"
        dateModified="2026-03-30"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "/" },
        { name: "Guides", url: "/guides" },
        { name: "Comment choisir", url: "/guide/comment-choisir-velo-electrique" }
      ]} />

      <div className="article-hero">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Accueil</a><span className="breadcrumb-separator">›</span>
            <a href="/guides">Guides</a><span className="breadcrumb-separator">›</span>
            <span>Comment choisir</span>
          </nav>
          <span className="section-label">📖 Guide Expert</span>
          <h1>Comment Choisir son Vélo Électrique en 2026</h1>
          <p style={{ maxWidth: 650, margin: "0 auto", color: "var(--text-secondary)", fontSize: "1.15rem" }}>
            Le guide complet pour faire le bon choix. Budget, autonomie, moteur, type de vélo : nous passons en revue tous les critères essentiels.
          </p>
          <div className="article-meta">
            <span>📅 Mars 2026</span><span>⏱️ 15 min de lecture</span><span>✍️ Par la rédaction</span>
          </div>
          <div className="article-hero-image">
            <img src="/images/guides/choisir-velo.png" alt="Vélo électrique moderne dans un environnement urbain nocturne avec des lumières néon vertes" />
          </div>
        </div>
      </div>

      <div className="article-content">
        <p>
          Acheter un vélo électrique peut sembler compliqué face à la multitude de modèles disponibles.
          Ce guide vous accompagne pas à pas pour identifier <strong>le vélo électrique qui correspond
          parfaitement à vos besoins</strong>, votre budget et votre style de vie.
        </p>

        <div className="info-box">
          <h4>⚡ En résumé</h4>
          <p>
            Identifiez d&apos;abord votre usage (ville, VTT, multimodal), puis votre budget. Vérifiez
            l&apos;autonomie, le poids et la qualité du moteur. Achetez sur Amazon pour profiter des
            retours 30 jours.
          </p>
        </div>

        <h2>1. Définir votre usage</h2>
        <p>
          La première question à vous poser est : <strong>à quoi va servir votre vélo électrique ?</strong>
          La réponse détermine le type de vélo, l&apos;autonomie nécessaire et le budget.
        </p>

        <h3>🏙️ Usage urbain (trajets domicile-travail)</h3>
        <p>
          Pour le vélotaf, privilégiez un vélo de ville avec cadre bas (Step-Thru), des garde-boue,
          un porte-bagages et un éclairage intégré. Autonomie recommandée : 50-80 km.
        </p>
        <ul>
          <li><strong>Notre recommandation :</strong> <a href="/meilleur-velo-electrique-ville">Voir les meilleurs vélos de ville</a></li>
        </ul>

        <h3>🔄 Usage multimodal (train + vélo)</h3>
        <p>
          Si vous combinez train et vélo, le vélo pliant est incontournable. Visez un poids
          inférieur à 20 kg et des dimensions pliées compactes.
        </p>
        <ul>
          <li><strong>Notre recommandation :</strong> <a href="/meilleur-velo-electrique-pliant">Voir les meilleurs vélos pliants</a></li>
        </ul>

        <h3>⛰️ Usage loisir/tout-terrain</h3>
        <p>
          Pour les balades nature et les chemins, un VTT électrique avec suspension et pneus larges
          est idéal. L&apos;autonomie compte moins, mais la puissance et le confort sont essentiels.
        </p>
        <ul>
          <li><strong>Notre recommandation :</strong> <a href="/meilleur-vtt-electrique">Voir les meilleurs VTT électriques</a></li>
        </ul>

        <h2>2. Le budget : combien investir ?</h2>
        <p>
          Le marché du vélo électrique est vaste, avec des prix allant de 300€ à plus de 5000€.
          Voici nos recommandations par gamme :
        </p>

        <h3>💰 Moins de 500€ : l&apos;entrée de gamme</h3>
        <p>
          Principalement des vélos pliants avec moteur 250W et autonomie modeste (30-50 km).
          Parfait pour de courts trajets urbains. Le <strong>HITWAY BK6S</strong> est la référence.
        </p>

        <h3>💰💰 500-800€ : le rapport qualité-prix</h3>
        <p>
          Le sweet spot du marché. Vous trouvez d&apos;excellents vélos de ville et VTT avec une
          bonne autonomie (50-90 km). Le <strong>COLORWAY 26 pouces</strong> et le <strong>RCB GK4</strong>
          sont dans cette gamme.
        </p>

        <h3>💰💰💰 800-1300€ : le milieu de gamme</h3>
        <p>
          Des vélos avec des composants de qualité supérieure : moteurs Bafang, freins hydrauliques,
          grande autonomie. L&apos;<strong>ENGWE M20</strong> et l&apos;<strong>Eleglide Mopride 2</strong> brillent ici.
        </p>

        <h2>3. L&apos;autonomie : le critère n°1</h2>
        <p>
          L&apos;autonomie est souvent le critère le plus important. Voici comment l&apos;évaluer :
        </p>
        <ul>
          <li><strong>Autonomie annoncée vs réelle :</strong> Divisez l&apos;autonomie annoncée par 1,5 pour obtenir une estimation réaliste</li>
          <li><strong>Mode d&apos;assistance :</strong> En mode éco, l&apos;autonomie peut doubler par rapport au mode sport</li>
          <li><strong>Facteurs influents :</strong> Poids du cycliste, dénivelé, vent, température</li>
          <li><strong>Double batterie :</strong> Certains modèles comme l&apos;ENGWE M20 offrent une double batterie pour doubler l&apos;autonomie</li>
        </ul>

        <div className="info-box">
          <h4>🔋 Règle des 30%</h4>
          <p>
            Prévoyez toujours 30% d&apos;autonomie de marge par rapport à votre trajet quotidien.
            Si votre trajet fait 20 km aller-retour, visez un vélo avec au moins 60 km d&apos;autonomie réelle.
          </p>
        </div>

        <h2>4. Le moteur et la réglementation</h2>
        <p>
          En France et en Europe, la réglementation impose des limites strictes pour qu&apos;un vélo
          électrique soit considéré comme un VAE (Vélo à Assistance Électrique) :
        </p>
        <ul>
          <li><strong>Puissance maximale :</strong> 250W nominal</li>
          <li><strong>Vitesse maximale assistée :</strong> 25 km/h</li>
          <li><strong>Assistance :</strong> Le moteur doit se couper quand vous arrêtez de pédaler</li>
        </ul>
        <p>
          Tous les vélos de nos comparatifs respectent cette réglementation. Pas besoin de permis,
          d&apos;assurance obligatoire ni d&apos;immatriculation.
        </p>

        <h3>Position du moteur</h3>
        <ul>
          <li><strong>Moteur moyeu arrière :</strong> Le plus courant sur les modèles économiques. Bon rendement, installation simple</li>
          <li><strong>Moteur moyeu avant :</strong> Sensation de traction, bon pour les vélos pliants</li>
          <li><strong>Moteur pédalier :</strong> Le plus performant en montée. Réservé au haut de gamme (Bosch, Shimano Steps)</li>
        </ul>

        <h2>5. Poids et portabilité</h2>
        <p>
          Le poids est crucial si vous devez porter votre vélo (escaliers, train). Voici les repères :
        </p>
        <ul>
          <li><strong>Moins de 18 kg :</strong> Ultra-léger, facile à porter (ex: DYU D3F à 17 kg)</li>
          <li><strong>18-25 kg :</strong> Standard, transposable à condition</li>
          <li><strong>25-35 kg :</strong> Lourd, à éviter si vous devez le porter régulièrement</li>
        </ul>

        <h2>6. Les freins : ne négligez pas votre sécurité</h2>
        <p>
          Avec le poids et la vitesse d&apos;un vélo électrique, la qualité des freins est primordiale.
        </p>
        <ul>
          <li><strong>Freins à disque hydrauliques :</strong> ✅ Le meilleur choix. Puissants, progressifs, peu d&apos;entretien</li>
          <li><strong>Freins à disque mécaniques :</strong> ⚠️ Corrects mais nécessitent des réglages fréquents</li>
          <li><strong>Freins V-brake :</strong> ❌ À éviter sur un vélo électrique</li>
        </ul>

        <h2>7. Acheter sur Amazon : les avantages</h2>
        <p>
          Amazon est devenu la première plateforme d&apos;achat de vélos électriques en France. Voici pourquoi :
        </p>
        <ul>
          <li><strong>Retours 30 jours :</strong> Vous n&apos;aimez pas ? Renvoyez-le gratuitement</li>
          <li><strong>Livraison gratuite :</strong> Souvent en 2-3 jours avec Prime</li>
          <li><strong>Avis vérifiés :</strong> Des milliers d&apos;avis d&apos;acheteurs réels</li>
          <li><strong>Protection acheteur :</strong> Garantie A-Z en cas de problème</li>
          <li><strong>Prix compétitifs :</strong> Souvent les meilleur prix du marché</li>
        </ul>

        <div className="cta-banner" style={{ margin: "2rem 0" }}>
          <h2>🔍 Prêt à choisir ?</h2>
          <p>Consultez notre comparatif complet des meilleurs vélos électriques 2026.</p>
          <a href="/meilleur-velo-electrique" className="btn btn-primary">Voir le comparatif →</a>
        </div>

        <section className="section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="section-header"><h2>❓ Questions fréquentes</h2></div>
          <FAQ items={faqItems} />
        </section>

        <section style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <h2>🔗 Guides et comparatifs liés</h2>
          <ul style={{ paddingLeft: "1.5rem", lineHeight: 2 }}>
            <li><a href="/meilleur-velo-electrique">Comparatif complet des meilleurs vélos électriques 2026</a></li>
            <li><a href="/meilleur-velo-electrique-ville">Meilleurs vélos électriques de ville</a></li>
            <li><a href="/meilleur-velo-electrique-pliant">Meilleurs vélos électriques pliants</a></li>
            <li><a href="/meilleur-vtt-electrique">Meilleurs VTT électriques</a></li>
            <li><a href="/guide/aides-etat-achat-velo-electrique">Aides de l&apos;État : économisez sur votre achat</a></li>
            <li><a href="/guide/legislation-assurance-velo-electrique">Législation et assurance VAE 2026</a></li>
            <li><a href="/guide/reconditionnement-batterie-velo-electrique">Guide reconditionnement batterie</a></li>
            <li><a href="/guide/entretien-velo-electrique">Entretien du vélo électrique</a></li>
          </ul>
        </section>
      </div>
    </>
  );
}
