import type { Metadata } from "next";
import { FAQ } from "../../components/FAQ";

export const metadata: Metadata = {
  title: "Législation & Assurance Vélo Électrique 2026 : Obligatoire ou Non ?",
  description: "Tout savoir sur les lois entourant les vélos électriques (VAE et Speed Bikes) en 2026. Assurance, âge, casque, pistes cyclables : quelles sont vos obligations ?",
  alternates: { canonical: "/guide/legislation-assurance-velo-electrique" },
};

const faqItems = [
  { question: "Le port du casque est-il obligatoire en vélo électrique ?", answer: "NON pour un VAE classique (25km/h) si vous avez plus de 12 ans. OUI pour tout usager de moins de 12 ans. En revanche, pour un Speed Bike (45km/h), le casque homologué cyclomoteur est 100% obligatoire pour tout le monde." },
  { question: "Un VAE a-t-il le droit de rouler sur les trottoirs ?", answer: "NON. Un vélo électrique (comme un vélo musculaire) doit circuler sur la chaussée, sur les pistes cyclables ou les voies vertes. Seuls les enfants de moins de 8 ans sont autorisés à rouler sur le trottoir s'ils roulent au pas." },
  { question: "Puis-je débrider mon VAE pour rouler à plus de 25 km/h ?", answer: "C'est strictement ILLEGAL. Le débridage est lourdement sanctionné (jusqu'à 30 000€ d'amende et un an de prison), annule instantanément votre garantie constructeur, et rend toute assurance caduque en cas d'accident grave." },
  { question: "Mon assurance habitation suffit-elle ?", answer: "Votre assurance habitation comprend généralement une garantie « Responsabilité Civile » qui couvrira les dégâts matériels et corporels que vous infligez à autrui en percutant quelqu'un. Mais elle ne couvrira ni le vol ni vos propres blessures. Il faut souvent souscrire une option supplémentaire pour garantir le vol d'un VAE." },
];

export default function LegislationAssurancePage() {
  return (
    <>
      <div className="article-hero">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Accueil</a><span className="breadcrumb-separator">›</span>
            <a href="/guides">Guides</a><span className="breadcrumb-separator">›</span>
            <span>Législation & Assurance</span>
          </nav>
          <span className="section-label">⚖️ Guide Légal</span>
          <h1>Législation et Assurance des Vélos Électriques en 2026</h1>
          <p style={{ maxWidth: 650, margin: "0 auto", color: "var(--text-secondary)", fontSize: "1.15rem" }}>
            Assurance obligatoire ou optionnelle ? Quelle est la différence entre VAE et Speed Bike ? Récapitulatif des règles 2026 pour rouler sans PV.
          </p>
          <div className="article-meta">
            <span>📅 Mars 2026</span><span>⏱️ 7 min de lecture</span><span>✍️ Par la rédaction</span>
          </div>
          <div className="article-hero-image">
            <img src="/images/guides/legislation-assurance.png" alt="Vélo électrique avec casque et équipement de sécurité sur une rue pavée française" />
          </div>
        </div>
      </div>

      <div className="article-content">
        <p>
          Acheter un vélo électrique vous donne des libertés formidables. Toutefois, devant l'augmentation 
          constante du trafic cyclable, la législation française n'a de cesse de se préciser. Voici un panorama 
          complet de vos obligations en matière de <strong>règles de circulation</strong> et d'<strong>assurance</strong> pour 2026.
        </p>

        <div className="info-box">
          <h4>⚡ En résumé</h4>
          <p>
            Pour un VAE standard (vitesse assitée &lt; 25 km/h et moteur 250W max) : le casque n'est obligatoire
            que pour les &lt;12 ans, l'assurance vol est optionnelle mais recommandée, et vous êtes classé comme
            un simple cycle. 
          </p>
        </div>

        <h2>1. La classification : VAE vs Speed Bike</h2>
        <p>
          C'est le point de départ de toutes les réglementations. En France, il existe deux catégories de vélos avec un moteur.
        </p>

        <h3>Le VAE classique (Vélo à Assistance Électrique)</h3>
        <p>La quasi-totalité des modèles présents sur notre comparateur Amazon sont des VAE. Pour être reconnu comme VAE par la loi française, le vélo doit respecter trois conditions :</p>
        <ul>
          <li><strong>Baisse de la puissance :</strong> L'assistance du moteur doit se couper automatiquement dès que la vitesse de 25 km/h est atteinte.</li>
          <li><strong>Assistance au pédalage :</strong> Le moteur ne doit se déclencher QUE lorsque vous pédalez. Les accélérateurs façon moto aux poignées sont interdits.</li>
          <li><strong>Puissance moteur limite :</strong> La puissance du moteur ne peut pas excéder 250 Watts nominaux.</li>
        </ul>
        <p>Si toutes ces conditions sont remplies, votre monture <strong>est considérée comme un vélo normal</strong>. Vous empruntez les pistes cyclables.</p>

        <h3>Le Speed Bike (ou Cyclomoteur L1e-b)</h3>
        <p>Si votre vélo assiste le pédalage jusqu'à <strong>45 km/h</strong> ou possède un moteur de plus de 250W, il passe dans la catégorie "Cyclomoteur".</p>
        <ul>
          <li><strong>Interdit sur les pistes cyclables.</strong> Vous devez rouler avec les voitures.</li>
          <li><strong>Assurance spécifique et Immatriculation obligatoire.</strong> Plaque d'immatriculation et carte grise requises.</li>
          <li><strong>Casque de moto/cyclo homologué OBLIGATOIRE.</strong> Un casque de vélo classique ne suffit plus.</li>
        </ul>

        <h2>2. VAE : L&apos;assurance est-elle obligatoire ?</h2>
        <p>
          <strong>Non, si vous possédez un VAE classique limité à 25 km/h.</strong> Vous n'avez aucune obligation de souscrire une assurance supplémentaire. 
        </p>
        <p>
          Cependant, même si l'assurance n'est pas requise, vous êtes tout de même dans l'obligation de réparer les dégâts que vous pourriez causer (rayer une Porsche Cayenne, faire tomber un piéton...). C'est la garantie <strong>Responsabilité Civile (RC)</strong> incluse dans votre assurance Multirisques Habitation qui pendra le relais. <em>Mais attention, vérifiez bien auprès de votre assureur que les VAE sont couverts par ce contrat.</em>
        </p>

        <h3>Faut-il assurer son vélo contre le vol ?</h3>
        <p>
          Avec un achat moyen situé autour de 1200 €, c'est fortement recommandé. L'assurance "Casse & Vol" pour VAE 
          coûte entre 10 et 20 euros par mois. 
        </p>
        <div className="info-box">
          <h4>🔐 Marquage des Vélos Bicycode</h4>
          <p>
            Sachez que depuis 2021, tous les vélos électriques neufs (et d'occasion revendus par des pros) disposent 
            obligatoirement d'un marquage de cadre enregistré dans une base de données de l'État (la base FNUCI). 
            C'est inestimable en cas de vol.
          </p>
        </div>

        <h2>3. L&apos;équipement légalement requis sur votre VAE</h2>
        <p>
          Pour circuler sur l'espace public de jour comme de nuit, votre vélo doté d'une assistance doit comporter certains éléments obligatoires :
        </p>
        <ul>
          <li><strong>Éclairages :</strong> Un phare blanc (ou jaune) à l'avant, et un phare rouge à l'arrière.</li>
          <li><strong>Réflecteurs (Catadioptres) :</strong> Blanc à l'avant, rouge à l'arrière, mais aussi de couleur orange de chaque côté des pédales et sur les rayons des roues.</li>
          <li><strong>Système de freinage :</strong> Au niveau de la roue avant ET deux de la roue arrière.</li>
          <li><strong>Un avertisseur sonore (sonnette) :</strong> Le son doit pouvoir être distinctement entendu à 50 mètres de distance.</li>
        </ul>

        <h2>4. Règles de circulation et Alcoolémie</h2>
        <p>
          Conduire un VAE en état d'ébriété (à partir de 0,5 gramme d'alcool par litre de sang, soit 2 verres) est sévèrement sanctionné.
        </p>
        <p>
          Si vous contrôlé en état d'ivresse à vélo, vous risquez une <strong>amende maximale de 750 €</strong> pour une simple 
          contravention. Mais en cas de récidive ou de mise en danger caractérisée, un juge pourrait même imposer 
          une suspension de votre permis auto en peine complémentaire, malgré le fait que le déplacement s'est fait sur un vélo électrique. Soyez responsables !
        </p>

        <div className="cta-banner">
          <h2>Prêt à acheter en respectant la loi ?</h2>
          <p>Tous les vélos mis en avant sur eBike Distribution respectent les normes EN 15194 limitatives à 25 km/h et 250W ! Aucun n'est un Speed Bike.</p>
          <a href="/meilleur-velo-electrique" className="btn btn-amazon">Voir nos vélos électriques certifiés →</a>
        </div>

        <section className="section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="section-header"><h2>❓ Questions fréquentes</h2></div>
          <FAQ items={faqItems} />
        </section>
      </div>
    </>
  );
}
