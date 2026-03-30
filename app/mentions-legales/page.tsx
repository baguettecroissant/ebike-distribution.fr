import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site ebike-distribution.fr",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="article-hero">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Accueil</a>
            <span className="breadcrumb-separator">›</span>
            <span>Mentions légales</span>
          </nav>
          <h1>Mentions Légales</h1>
        </div>
      </div>

      <div className="article-content">
        <h2>Éditeur du site</h2>
        <p>
          Le site ebike-distribution.fr est édité par un particulier.<br />
          Contact : contact@ebike-distribution.fr
        </p>

        <h2>Hébergement</h2>
        <p>
          Ce site est hébergé par Vercel Inc., 440 N Bayard St #201, Wilmington, DE 19801, États-Unis.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus (textes, images, graphismes, logo, icônes, etc.) présents sur le
          site ebike-distribution.fr sont protégés par les lois en vigueur sur la propriété intellectuelle.
          Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie
          des éléments du site est interdite sans autorisation préalable.
        </p>

        <h2>Liens d&apos;affiliation</h2>
        <p>
          ebike-distribution.fr participe au Programme Partenaires d&apos;Amazon EU, un programme
          d&apos;affiliation conçu pour permettre à des sites de percevoir une rémunération grâce à la
          création de liens vers Amazon.fr.
        </p>
        <p>
          En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les
          conditions requises. Les prix affichés sur notre site sont indicatifs et peuvent différer
          de ceux affichés sur Amazon.fr au moment de l&apos;achat.
        </p>
        <p>
          <strong>Les liens d&apos;affiliation n&apos;influencent en aucun cas nos avis et recommandations.</strong>{" "}
          Nos tests et comparatifs sont réalisés de manière indépendante.
        </p>

        <h2>Limitation de responsabilité</h2>
        <p>
          Les informations contenues sur ce site sont aussi précises que possible et le site est
          régulièrement mis à jour. Cependant, il peut contenir des inexactitudes, des omissions
          ou des lacunes. Si vous constatez une lacune, une erreur ou ce qui semble être un
          dysfonctionnement, merci de bien vouloir le signaler par e-mail.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Pour plus d&apos;informations sur la gestion de vos données personnelles, consultez notre{" "}
          <a href="/politique-de-confidentialite">politique de confidentialité</a>.
        </p>
      </div>
    </>
  );
}
