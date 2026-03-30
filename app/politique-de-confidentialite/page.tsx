import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité du site ebike-distribution.fr",
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <div className="article-hero">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Accueil</a>
            <span className="breadcrumb-separator">›</span>
            <span>Politique de confidentialité</span>
          </nav>
          <h1>Politique de Confidentialité</h1>
        </div>
      </div>

      <div className="article-content">
        <p><strong>Dernière mise à jour :</strong> Mars 2026</p>

        <h2>Introduction</h2>
        <p>
          La présente politique de confidentialité décrit les pratiques de ebike-distribution.fr
          en matière de collecte, d&apos;utilisation et de protection de vos données personnelles,
          conformément au Règlement Général sur la Protection des Données (RGPD).
        </p>

        <h2>Données collectées</h2>
        <h3>Données de navigation</h3>
        <p>
          Nous collectons automatiquement certaines informations lors de votre visite :
          adresse IP anonymisée, type de navigateur, pages visitées, durée de visite.
          Ces données sont utilisées uniquement à des fins statistiques et d&apos;amélioration du site.
        </p>

        <h3>Cookies</h3>
        <p>
          Notre site utilise des cookies pour :
        </p>
        <ul>
          <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
          <li><strong>Cookies analytiques :</strong> Pour mesurer l&apos;audience (Google Analytics anonymisé)</li>
          <li><strong>Cookies d&apos;affiliation :</strong> Pour le suivi des liens Amazon (cookies Amazon Associates)</li>
        </ul>

        <h2>Liens d&apos;affiliation Amazon</h2>
        <p>
          Lorsque vous cliquez sur un lien vers Amazon.fr, un cookie d&apos;affiliation est déposé par
          Amazon pour nous attribuer la commission sur votre achat éventuel. Ce cookie est géré
          par Amazon et est soumis à la{" "}
          <a href="https://www.amazon.fr/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ" target="_blank" rel="noopener noreferrer">
            politique de confidentialité d&apos;Amazon
          </a>.
        </p>

        <h2>Vos droits</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul>
          <li><strong>Droit d&apos;accès :</strong> Obtenir une copie de vos données personnelles</li>
          <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
          <li><strong>Droit à l&apos;effacement :</strong> Demander la suppression de vos données</li>
          <li><strong>Droit d&apos;opposition :</strong> Vous opposer au traitement de vos données</li>
          <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
        </ul>
        <p>
          Pour exercer ces droits, contactez-nous à : contact@ebike-distribution.fr
        </p>

        <h2>Sécurité</h2>
        <p>
          Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
          protéger vos données personnelles contre tout accès non autorisé, toute modification,
          divulgation ou destruction.
        </p>

        <h2>Contact</h2>
        <p>
          Pour toute question concernant cette politique de confidentialité :<br />
          Email : contact@ebike-distribution.fr
        </p>
      </div>
    </>
  );
}
