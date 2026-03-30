import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "../components/MotionWrappers";

export const metadata: Metadata = {
  title: "Tous nos Guides & Conseils sur les Vélos Électriques | eBike Distribution",
  description: "Découvrez nos guides d'experts pour acheter, entretenir, assurer et optimiser votre vélo électrique. Comparatifs, tutoriels et législation VAE 2026.",
  alternates: { canonical: "/guides" },
};

const guides = [
  {
    title: "Comment Choisir son Vélo Électrique",
    description: "Le guide complet pour faire le bon choix en 2026 : budget, autonomie, type de moteur et position de conduite.",
    link: "/guide/comment-choisir-velo-electrique",
    icon: "📖",
    tag: "Achat",
    time: "15 min",
    image: "/images/guides/choisir-velo.png",
    imageAlt: "Vélo électrique moderne dans un environnement urbain nocturne",
  },
  {
    title: "Reconditionnement Batterie VAE",
    description: "Tout savoir sur le reconditionnement : prix, durée de vie, signes d'usure et alternatives pour booster votre autonomie.",
    link: "/guide/reconditionnement-batterie-velo-electrique",
    icon: "🔋",
    tag: "Matériel",
    time: "12 min",
    image: "/images/guides/batterie-reconditionnement.png",
    imageAlt: "Technicienne ouvrant un pack batterie lithium-ion dans un atelier spécialisé",
  },
  {
    title: "Aides de l'État pour l'Achat d'un VAE",
    description: "Bonus écologique, prime à la conversion, subventions régionales : le panorama des aides financières en 2026.",
    link: "/guide/aides-etat-achat-velo-electrique",
    icon: "💶",
    tag: "Finance",
    time: "10 min",
    image: "/images/guides/aides-etat.png",
    imageAlt: "Vélo électrique entouré de billets en euros devant un bâtiment gouvernemental",
  },
  {
    title: "Entretien du Vélo Électrique",
    description: "Les bons réflexes pour laver, graisser et prolonger la durée de vie de la batterie et du moteur de votre vélo.",
    link: "/guide/entretien-velo-electrique",
    icon: "🛠️",
    tag: "Pratique",
    time: "8 min",
    image: "/images/guides/entretien-vae.png",
    imageAlt: "Technicien entretenant un vélo électrique dans un atelier moderne",
  },
  {
    title: "Législation & Assurance VAE",
    description: "Casque, pistes cyclables, assurance vol et RC : les règles essentielles pour circuler en règle avec ou sans Speed Bike.",
    link: "/guide/legislation-assurance-velo-electrique",
    icon: "⚖️",
    tag: "Légal",
    time: "7 min",
    image: "/images/guides/legislation-assurance.png",
    imageAlt: "Vélo électrique avec casque et équipement de sécurité sur une rue française",
  }
];

export default function GuidesIndexPage() {
  return (
    <>
      <FadeIn>
        <div className="section" style={{ paddingTop: "6rem", paddingBottom: "3rem", background: "radial-gradient(circle at top, rgba(0, 255, 136, 0.05) 0%, transparent 70%)" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <span className="section-label" style={{ margin: "0 auto 1.5rem" }}>📚 Expertise & Conseils</span>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1.5rem", fontFamily: "'Outfit', sans-serif" }}>
              Le hub des <span className="gradient-text">Guides Experts</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto" }}>
              Parcourez nos dossiers thématiques rédigés par la rédaction pour maîtriser 
              votre transition vers la mobilité électrique, depuis l&apos;achat jusqu&apos;à l&apos;entretien.
            </p>
          </div>
        </div>
      </FadeIn>

      <div className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <StaggerContainer>
            <div className="grid">
              {guides.map((guide, index) => (
                <StaggerItem key={index}>
                  <HoverCard>
                    <a href={guide.link} className="card" style={{ textDecoration: "none", height: "100%", display: "flex", flexDirection: "column", padding: "2rem" }}>
                      <div className="guide-card-image">
                        <img src={guide.image} alt={guide.imageAlt} />
                      </div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                        <span style={{ fontSize: "2rem", filter: "drop-shadow(0 0 10px rgba(0, 255, 136, 0.3))" }}>{guide.icon}</span>
                        <span style={{ 
                          background: "var(--surface)", 
                          padding: "0.4rem 0.8rem", 
                          borderRadius: "100px", 
                          fontSize: "0.85rem",
                          border: "1px solid rgba(255,255,255,0.05)",
                          color: "var(--accent-neon)"
                        }}>
                          {guide.tag}
                        </span>
                      </div>
                      <h3 style={{ fontSize: "1.4rem", marginBottom: "0.75rem", fontFamily: "'Outfit', sans-serif", color: "var(--text-primary)" }}>
                        {guide.title}
                      </h3>
                      <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, flexGrow: 1, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                        {guide.description}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.25rem", marginTop: "auto" }}>
                        <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)" }}>⏱️ {guide.time} de lecture</span>
                        <span style={{ color: "var(--accent-neon)", fontWeight: 600, fontSize: "0.9rem" }}>Lire le guide →</span>
                      </div>
                    </a>
                  </HoverCard>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </>
  );
}
