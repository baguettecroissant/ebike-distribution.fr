import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz : Quel Vélo Électrique Est Fait Pour Vous ? | eBike Distribution",
  description: "Répondez à 5 questions et découvrez le vélo électrique idéal pour votre usage, votre budget et votre style de vie. Recommandation personnalisée gratuite.",
  alternates: { canonical: "/quiz" },
  openGraph: {
    title: "Quiz : Trouvez Votre Vélo Électrique Idéal en 60 secondes",
    description: "5 questions, 1 recommandation personnalisée. Découvrez quel vélo électrique est fait pour vous.",
    images: [{ url: "/images/home-hero.png" }],
  },
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
