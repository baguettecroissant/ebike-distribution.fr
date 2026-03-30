export const metadata = {
  title: "404 - Page Introuvable | eBike Distribution",
  description: "La page que vous recherchez n'existe pas ou a été déplacée.",
};

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background with 404 Image */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        backgroundImage: "url('/images/404-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.4)"
      }}></div>

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 1,
        textAlign: "center",
        padding: "2rem",
        background: "rgba(10, 15, 28, 0.7)",
        backdropFilter: "blur(12px)",
        borderRadius: "var(--radius-xl)",
        border: "1px solid rgba(0, 255, 136, 0.1)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
        maxWidth: "600px",
        width: "90%"
      }}>
        <h1 style={{
          fontSize: "6rem",
          margin: "0",
          fontFamily: "'Outfit', sans-serif",
          background: "var(--gradient-neon)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 30px rgba(0,255,136,0.3)"
        }}>404</h1>
        
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Vous êtes sortis de la piste
        </h2>
        
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", marginBottom: "2rem" }}>
          Cette page semble s&apos;être égarée. Remontez en selle et retournez sur la route principale pour découvrir nos comparatifs.
        </p>
        
        <a href="/" className="btn btn-primary" style={{ display: "inline-block" }}>
          🏠 Retour à l&apos;accueil
        </a>
      </div>
    </div>
  );
}
