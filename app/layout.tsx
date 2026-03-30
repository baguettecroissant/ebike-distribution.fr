import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { WebsiteSchema, OrganizationSchema } from "./components/JsonLd";

export const metadata: Metadata = {
  title: {
    default: "eBike Distribution — Comparatif Vélos Électriques 2026 | Guide d'Achat",
    template: "%s | eBike Distribution",
  },
  description:
    "Guide expert et comparatif des meilleurs vélos électriques 2026. Trouvez le vélo électrique idéal : ville, VTT, pliant. Avis, prix et conseils d'achat.",
  keywords: [
    "vélo électrique",
    "meilleur vélo électrique",
    "comparatif vélo électrique",
    "vélo électrique pas cher",
    "VTT électrique",
    "vélo électrique pliant",
    "vélo électrique ville",
    "batterie vélo électrique",
    "guide achat vélo électrique",
    "avis vélo électrique amazon",
  ],
  metadataBase: new URL("https://ebike-distribution.fr"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "eBike Distribution",
    title: "eBike Distribution — Comparatif Vélos Électriques 2026",
    description:
      "Guide expert et comparatif des meilleurs vélos électriques 2026. Trouvez le vélo électrique idéal.",
    images: [{ url: "/images/home-hero.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <WebsiteSchema />
        <OrganizationSchema />
      </head>
      <body>
        {/* Header */}
        <Header />

        {/* Main */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <a href="/" className="logo">
                  <span className="logo-icon">⚡</span>
                  eBike&nbsp;<span>Distribution</span>
                </a>
                <p>
                  Guide expert et comparatif des meilleurs vélos électriques.
                  Nous testons et comparons pour vous aider à trouver le vélo
                  électrique idéal en 2026.
                </p>
              </div>

              <div className="footer-col">
                <h4>Comparatifs</h4>
                <ul>
                  <li><a href="/meilleur-velo-electrique">Meilleurs vélos électriques</a></li>
                  <li><a href="/meilleur-velo-electrique-ville">Vélos de ville</a></li>
                  <li><a href="/meilleur-velo-electrique-pliant">Vélos pliants</a></li>
                  <li><a href="/meilleur-vtt-electrique">VTT électriques</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Guides</h4>
                <ul>
                  <li><a href="/guide/comment-choisir-velo-electrique">Comment choisir</a></li>
                  <li><a href="/guide/reconditionnement-batterie-velo-electrique">Batterie : reconditionnement</a></li>
                  <li><a href="/guide/aides-etat-achat-velo-electrique">Aides de l&apos;État 2026</a></li>
                  <li><a href="/guide/entretien-velo-electrique">Entretien VAE</a></li>
                  <li><a href="/guide/legislation-assurance-velo-electrique">Législation &amp; assurance</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Informations</h4>
                <ul>
                  <li><a href="/a-propos">À propos</a></li>
                  <li><a href="/guides">Tous les guides</a></li>
                  <li><a href="/mentions-legales">Mentions légales</a></li>
                  <li><a href="/politique-de-confidentialite">Confidentialité</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-affiliate-notice">
              <strong>Transparence :</strong> eBike Distribution participe au
              Programme Partenaires d&apos;Amazon EU, un programme d&apos;affiliation
              permettant de percevoir une rémunération grâce à la création de
              liens vers Amazon.fr. En tant que Partenaire Amazon, nous réalisons
              un bénéfice sur les achats remplissant les conditions requises.
              Cela ne modifie en rien le prix que vous payez.
            </div>

            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} eBike Distribution. Tous droits réservés.</p>
              <p>Fait avec ⚡ en France</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
