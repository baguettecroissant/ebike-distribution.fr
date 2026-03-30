import type { Metadata } from "next";
import { FAQ } from "../../components/FAQ";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Aides de l'État pour l'Achat d'un Vélo Électrique en 2026",
  description: "Découvrez le guide complet des aides à l'achat pour vélo électrique en 2026 : Bonus écologique de l'État, prime à la conversion et aides régionales.",
  alternates: { canonical: "/guide/aides-etat-achat-velo-electrique" },
};

const faqItems = [
  { question: "Le bonus écologique 2026 est-il cumulable avec les aides locales ?", answer: "Oui, c'est même obligatoire pour pouvoir toucher le bonus écologique de l'État ! Vous devez d'abord obtenir l'aide de votre collectivité locale pour pouvoir demander l'aide nationale, qui viendra s'y ajouter." },
  { question: "Quel est le montant maximum cumulé que l'on peut espérer ?", answer: "Si vous combinez l'aide de certaines métropoles (ex: Île-de-France jusqu'à 400€), le bonus écologique de l'État (jusqu'à 400€ selon revenus) et la prime à la conversion en vous séparant d'un vieux véhicule (jusqu'à 3000€), la prime totale peut atteindre 3800€." },
  { question: "Faut-il acheter mon vélo électrique neuf pour toucher la prime ?", answer: "Le vélo peut être neuf ou d'occasion, tant qu'il est acheté chez un professionnel qui peut vous fournir une facture officielle (TVA incluse). Les achats entre particuliers ne sont pas éligibles." },
  { question: "Les vélos achetés sur Amazon sont-ils éligibles ?", answer: "Absolument. Tant qu'Amazon agit comme vendeur officiel ou Marketplace professionnelle fournissant une facture en bonne et due forme avec TVA, le vélo est éligible." },
];

export default function AidesVeloElectriquePage() {
  return (
    <>
      <ArticleSchema title="Aides de l'État pour l'Achat d'un Vélo Électrique en 2026" description="Guide des aides financières : bonus écologique, prime conversion, subventions régionales." url="/guide/aides-etat-achat-velo-electrique" image="/images/guides/aides-etat.png" datePublished="2026-02-01" dateModified="2026-03-30" />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[{ name: "Accueil", url: "/" }, { name: "Guides", url: "/guides" }, { name: "Aides et subventions", url: "/guide/aides-etat-achat-velo-electrique" }]} />

      <div className="article-hero">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Accueil</a><span className="breadcrumb-separator">›</span>
            <a href="/guides">Guides</a><span className="breadcrumb-separator">›</span>
            <span>Aides et subventions</span>
          </nav>
          <span className="section-label">💶 Guide Expert</span>
          <h1>Aides à l&apos;Achat d&apos;un Vélo Électrique : Le Guide Complet 2026</h1>
          <p style={{ maxWidth: 650, margin: "0 auto", color: "var(--text-secondary)", fontSize: "1.15rem" }}>
            Bonus écologique de l'État, prime à la conversion, subventions locales... Tout savoir pour réduire drastiquement le prix de votre futur VAE.
          </p>
          <div className="article-meta">
            <span>📅 Mars 2026</span><span>⏱️ 10 min de lecture</span><span>✍️ Par la rédaction</span>
          </div>
          <div className="article-hero-image">
            <img src="/images/guides/aides-etat.png" alt="Vélo électrique entouré de billets en euros devant un bâtiment gouvernemental" />
          </div>
        </div>
      </div>

      <div className="article-content">
        <p>
          Le gouvernement français et les collectivités locales encouragent massivement la transition vers 
          les mobilités douces. En 2026, l'achat d'un <strong>vélo à assistance électrique (VAE)</strong> n'a jamais été 
          aussi bien subventionné. Ce guide décrypte pour vous les dispositifs auxquels vous avez droit.
        </p>

        <div className="info-box">
          <h4>⚡ En résumé</h4>
          <p>
            Vous pouvez bénéficier jusqu'à <strong>400€</strong> d'aide de l'État (sous conditions de revenus), cumulables 
            avec les <strong>aides locales (jusqu'à 500€)</strong>. Si vous vous séparez d'une vieille voiture thermique, une 
            <strong>prime à la conversion de 3000€</strong> supplémentaire peut vous être accordée.
          </p>
        </div>

        <h2>1. Le Bonus Écologique de l&apos;État (jusqu&apos;à 400€)</h2>
        <p>
          Le bonus écologique est l'aide nationale principale. Depuis le dernier décret, son montant et son attribution 
          dépendent directement de votre <strong>Revenu Fiscal de Référence (RFR) par part</strong> ainsi que de l'obtention 
          préalable d'une aide locale.
        </p>

        <h3>Conditions d&apos;éligibilité</h3>
        <ul>
          <li><strong>Le vélo :</strong> Doit être neuf ou "d'occasion (acheté chez un pro)", comporter un marquage officiel, avoir une batterie sans plomb et ne pas pouvoir dépasser les 25 km/h d'assistance (norme VAE).</li>
          <li><strong>Le propriétaire :</strong> Être majeur, domicilié en France, avec un RFR par part inférieur ou égal à 15 400€. Pour les personnes en situation de handicap, il n'y a pas de condition de revenus.</li>
          <li><strong>Engagement :</strong> Il est interdit de revendre le vélo dans l'année suivant l'achat.</li>
        </ul>

        <h3>Combien allez-vous toucher ?</h3>
        <ul>
          <li><strong>RFR / part ≤ 7 100 € (ou handicap) :</strong> L'aide s'élève à 40% du prix du vélo, plafonnée à <strong>400 €</strong>.</li>
          <li><strong>RFR / part ≤ 15 400 € :</strong> L'aide s'élève à 40% du prix du vélo, plafonnée à <strong>300 €</strong>.</li>
        </ul>
        <p>
          <em>Note importante :</em> Pour les vélos cargo, vélos pliants ou vélos allongés, ces plafonds montent respectivement à 2 000 € et 1 000 €.
        </p>

        <h2>2. La Prime à la Conversion (jusqu&apos;à 3 000€)</h2>
        <p>
          Si l'achat de votre vélo électrique s'accompagne de la <strong>mise au rebut d'un véhicule polluant</strong>, 
          vous pouvez toucher la prime à la conversion. C'est l'aide la plus généreuse du marché.
        </p>
        <ul>
          <li><strong>Montant de base :</strong> 40% du prix d'achat, dans la limite de 1 500 €.</li>
          <li><strong>Montant majoré :</strong> Plafond porté à <strong>3 000 €</strong> pour les foyers très modestes (RFR/part ≤ 7 100 €) ou les professionnels résidant très loin de leur lieu de travail.</li>
        </ul>
        <div className="info-box">
          <h4>💡 Astuce Multi-Vélos</h4>
          <p>
            Saviez-vous que la prime à la conversion peut être versée <strong>pour chaque membre majeur 
            du foyer</strong> ? Si vous mettez au rebut une seule voiture, vous pouvez acheter deux vélos 
            électriques et recevoir deux primes !
          </p>
        </div>

        <h2>3. Les Aides Locales (Régions, Départements, Métropoles)</h2>
        <p>
          L'obtention de l'aide locale est primordiale car <strong>elle conditionne le versement du bonus de l'État</strong>. 
          Les montants varient considérablement selon votre lieu de résidence.
        </p>

        <h3>Exemples d&apos;aides régionales ou métropolitaines (2026) :</h3>
        <ul>
          <li><strong>Île-de-France Mobilités :</strong> Jusqu'à 50% du prix d'achat, plafonné à <strong>400 €</strong> (sans condition de l'aide de la commune).</li>
          <li><strong>Métropole de Lyon :</strong> Aide de 100 € à 500 € selon les revenus (et applicable sur les vélos d'occasion).</li>
          <li><strong>Nantes Métropole :</strong> Jusqu'à 300 € selon le quotient familial.</li>
          <li><strong>Occitanie (Écochèque) :</strong> 200 € si achat chez un commerçant partenaire de la région.</li>
        </ul>
        <p>Renseignez-vous directement sur le site de votre mairie ou de votre conseil régional avant d'effectuer l'achat !</p>

        <h2>4. Démarches : Comment demander les aides ?</h2>
        <p>
          L'ordre de vos démarches est vital pour éviter que vos dossiers ne soient rejetés.
        </p>
        <ol>
          <li><strong>Achetez le vélo électrique :</strong> Conservez précieusement la facture au format PDF, sur laquelle doit figurer votre nom, la mention VAE, le numéro de série du vélo et du moteur.</li>
          <li><strong>Demandez l'aide locale :</strong> C'est la première étape. Envoyez votre dossier à votre mairie ou région et attendez de recevoir la preuve de paiement de la subvention.</li>
          <li><strong>Demandez le Bonus de l'État :</strong> Connectez-vous sur le site officiel primealaconversion.gouv.fr. Remplissez le formulaire en ligne en joignant votre facture et la preuve de paiement de l'aide locale.</li>
        </ol>

        <div className="cta-banner">
          <h2>Prêt à passer à l&apos;électrique ?</h2>
          <p>Profitez vite des aides de l'État avant une éventuelle réforme. Découvrez notre sélection des meilleurs VAE du moment.</p>
          <a href="/meilleur-velo-electrique" className="btn btn-primary">Voir le comparatif des VAE →</a>
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
            <li><a href="/guide/legislation-assurance-velo-electrique">Législation et assurance VAE</a></li>
            <li><a href="/guide/entretien-velo-electrique">Entretien du vélo électrique</a></li>
            <li><a href="/guide/reconditionnement-batterie-velo-electrique">Reconditionnement batterie</a></li>
          </ul>
        </section>
      </div>
    </>
  );
}
