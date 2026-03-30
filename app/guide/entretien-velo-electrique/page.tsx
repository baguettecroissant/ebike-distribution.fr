import type { Metadata } from "next";
import { FAQ } from "../../components/FAQ";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Comment Entretenir son Vélo Électrique : Le Guide Complet",
  description: "Découvrez nos conseils d'experts pour l'entretien de votre vélo électrique : batterie, chaîne, freins, lavage. Prolongez la durée de vie de votre VAE.",
  alternates: { canonical: "/guide/entretien-velo-electrique" },
};

const faqItems = [
  { question: "Puis-je nettoyer mon vélo électrique au jet à haute pression (Kärcher) ?", answer: "NON ! C'est la pire chose à faire. L'eau sous pression peut s'infiltrer dans les roulements, le moteur et les connectiques électroniques, provoquant des pannes immédiates. Utilisez toujours un jet d'eau doux ou un simple seau humide." },
  { question: "À quelle fréquence dois-je graisser ma chaîne ?", answer: "Cela dépend de votre usage et de la météo. En moyenne, nettoyez et lubrifiez votre chaîne tous les 150 km. Si vous roulez sous la pluie, faites-le plus fréquemment (après chaque sortie très humide). Une chaîne mal lubrifiée use prématurément la transmission." },
  { question: "Faut-il retirer la batterie quand je range le vélo ?", answer: "Si votre vélo dort au garage en hiver (températures < 10°C), il est impératif de retirer la batterie et de la stocker à l'intérieur de votre maison (entre 15°C et 20°C). Le froid intense dégrade les cellules Lithium-ion." },
  { question: "Combien coûte la révision annuelle chez un vélociste ?", answer: "Un forfait de révision classique pour vélo électrique coûte de 50€ à 90€. Cela inclut la vérification du système électronique, la mise à jour éventuelle du logiciel (sur Bosch/Shimano), le réglage des freins et vitesses et la lubrification." },
];

export default function EntretienVaePage() {
  return (
    <>
      <ArticleSchema title="Entretien du Vélo Électrique" description="Conseils d'experts pour l'entretien de votre VAE : batterie, chaîne, freins, lavage." url="/guide/entretien-velo-electrique" image="/images/guides/entretien-vae.png" datePublished="2026-02-10" dateModified="2026-03-30" />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[{ name: "Accueil", url: "/" }, { name: "Guides", url: "/guides" }, { name: "Entretien", url: "/guide/entretien-velo-electrique" }]} />

      <div className="article-hero">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Accueil</a><span className="breadcrumb-separator">›</span>
            <a href="/guides">Guides</a><span className="breadcrumb-separator">›</span>
            <span>Entretien</span>
          </nav>
          <span className="section-label">🛠️ Guide Pratique</span>
          <h1>Entretien du Vélo Électrique : Le Guide Complet</h1>
          <p style={{ maxWidth: 650, margin: "0 auto", color: "var(--text-secondary)", fontSize: "1.15rem" }}>
            Lavage, batterie, freins et transmission : découvrez comment prendre soin de votre VAE pour prolonger sa durée de vie et éviter les pannes.
          </p>
          <div className="article-meta">
            <span>📅 Mars 2026</span><span>⏱️ 8 min de lecture</span><span>✍️ Par la rédaction</span>
          </div>
          <div className="article-hero-image">
            <img src="/images/guides/entretien-vae.png" alt="Technicien entretenant un vélo électrique dans un atelier moderne avec un éclairage vert néon" />
          </div>
        </div>
      </div>

      <div className="article-content">
        <p>
          Un vélo électrique est un investissement important. Contrairement à une voiture, l'entretien 
          de base (nettoyage, graissage, pression des pneus) est totalement réalisable <strong>par vous-même</strong>.
          Un entretien régulier prévient 80 % des pannes coûteuses.
        </p>

        <div className="info-box">
          <h4>⚡ En résumé</h4>
          <p>
            Nettoyez avec un jet doux (jamais de haute pression), <strong>graissez la chaîne tous les 150 km</strong>, 
            gonflez les pneus à la bonne pression chaque mois, et gardez votre batterie à température ambiante 
            (20°C) lorsqu'elle n'est pas utilisée.
          </p>
        </div>

        <h2>1. Le Nettoyage de votre VAE</h2>
        <p>
          L'ennemi principal du vélo, c'est la boue, le sable et le sel qui s'infiltrent dans les roulements 
          et la transmission.
        </p>

        <h3>Règle d'or : bannissez la haute pression</h3>
        <p>
          L'utilisation de nettoyeurs haute pression (type Kärcher) va repousser la graisse hors des roulements 
          et injecter de l'eau dans le bloc moteur.
        </p>
        <ul>
          <li><strong>Avant le lavage :</strong> Retirez la batterie (ou désactivez le système si la batterie est intégrée) et couvrez les connecteurs avec les bouchons en caoutchouc fournis.</li>
          <li><strong>Lavage :</strong> Utilisez un seau d'eau tiède, du savon moussant ou un produit spécifique pour vélo (comme le Muc-Off), et une brosse douce.</li>
          <li><strong>Rinçage :</strong> Utilisez un simple jet d'eau plat, comme on arrose des plantes.</li>
          <li><strong>Séchage :</strong> Passez un chiffon microfibres sec sur le cadre. Secouez le vélo plusieurs fois en le faisant rebondir sur ses roues pour déloger l'eau des vis.</li>
        </ul>

        <h2>2. Prendre soin de la Transmission (Chaîne, Dérailleur)</h2>
        <p>
          Sur un vélo électrique, particulièrement avec les moteurs dans le pédalier, <strong>la force appliquée 
          sur la chaîne est immense</strong>. Une chaîne négligée cassera beaucoup plus vite.
        </p>
        <ul>
          <li><strong>Dégraissage :</strong> Utilisez un dégraissant spécifique vélo sur la cassette et la chaîne à l'aide d'une brosse à poils durs.</li>
          <li><strong>Lubrification :</strong> Après séchage complet, appliquez du lubrifiant goutte à goutte, uniquement à l'intérieur de la chaîne.</li>
          <li><strong>Le petit truc de pro :</strong> Essuyez le surplus d'huile avec un chiffon propre. Une chaîne trop huilée agit comme un aimant à crasse !</li>
        </ul>

        <h2>3. Surveiller les Freins à Disque</h2>
        <p>
          Un vélo de 25 kg propulsé à 25 km/h nécessite des freins à toute épreuve.
        </p>
        <ul>
          <li><strong>Usure des plaquettes :</strong> Inspectez visuellement la garniture des plaquettes. Dès qu'elle fait moins d'1 mm, il faut les changer sous peine de rayer votre disque de manière permanente (bruit de métal strident).</li>
          <li><strong>Propreté des disques :</strong> Les disques s'encrassent au toucher (graisse végétale des doigts). Ne touchez jamais vos disques. Pour les nettoyer, utilisez un "Disc Brake Cleaner" (dégraissant isopropylique).</li>
        </ul>

        <h2>4. Entretien de la Batterie Lithium-ion</h2>
        <p>
          La batterie est le coeur de votre vélo. Pour éviter de diviser sa durée de vie par deux :
        </p>
        <ul>
          <li><strong>Température de stockage :</strong> L'été, ne laissez jamais le vélo (et sa batterie) en plein soleil à 40°C. L'hiver, ne la stockez pas à l'extérieur par 0°C. La bonne température pour stocker une batterie se situe entre 15°C et 25°C.</li>
          <li><strong>Niveau de charge :</strong> Si vous savez que vous n'allez pas utiliser le vélo pendant plus de 2 semaines, chargez la batterie entre 40 et 80 % (jamais 100%, et jamais 0%).</li>
          <li><strong>BMS (Outils de gestion) :</strong> Laissez votre batterie faire une charge complète à 100% de temps en temps (1 fois sur 10) pour permettre au système de recalibrer les cellules.</li>
        </ul>

        <h2>5. La Pression des Pneus</h2>
        <p>
          Roulez sous-gonflé, c'est perdre jusqu'à <strong>25% d'autonomie électrique</strong> ! De plus, c'est risquer d'abîmer vos jantes.
        </p>
        <div className="info-box">
          <h4>💡 Visez entre 2.5 et 4 Bars</h4>
          <p>
            Investissez dans une pompe à pied avec un manomètre. Réglez votre pression chaque mois (environ 3 à 4 bars pour de la route / ville, et plutôt 1.8 à 2.5 bars pour du VTT). Les indications de pression maximales figurent toujours sur le flanc de vos pneus en caoutchouc.
          </p>
        </div>

        <div className="cta-banner">
          <h2>Prêt à rouler l&apos;esprit tranquille ?</h2>
          <p>La clé de l'entretien, c'est un bon matériel de base. Découvrez notre sélection d'outils et de vélos reconnus pour leur fiabilité extrême.</p>
          <a href="/meilleur-velo-electrique" className="btn btn-primary">Voir notre comparatif →</a>
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
            <li><a href="/guide/reconditionnement-batterie-velo-electrique">Reconditionnement batterie</a></li>
            <li><a href="/guide/aides-etat-achat-velo-electrique">Aides de l&apos;État pour l&apos;achat</a></li>
            <li><a href="/guide/legislation-assurance-velo-electrique">Législation et assurance</a></li>
          </ul>
        </section>
      </div>
    </>
  );
}
