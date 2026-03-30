"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../data/products";

/* ────── QUESTIONS ────── */
const questions = [
  {
    id: "usage",
    emoji: "🎯",
    title: "Quel sera votre usage principal ?",
    subtitle: "Choisissez l'usage qui correspond le mieux à votre quotidien",
    options: [
      { value: "ville", label: "Trajets urbains", desc: "Domicile-travail, courses, balades en ville", icon: "🏙️" },
      { value: "multimodal", label: "Multimodal (train + vélo)", desc: "Combinaison de transports en commun", icon: "🚆" },
      { value: "loisir", label: "Loisir / Tout-terrain", desc: "Randonnées, chemins, montagne", icon: "⛰️" },
      { value: "polyvalent", label: "Un peu de tout", desc: "Ville + campagne, usage varié", icon: "🔄" },
    ],
  },
  {
    id: "budget",
    emoji: "💰",
    title: "Quel est votre budget ?",
    subtitle: "Incluez les éventuelles aides de l'État (jusqu'à 3800€)",
    options: [
      { value: "low", label: "Moins de 500€", desc: "Modèles d'entrée de gamme, pliants", icon: "💵" },
      { value: "mid", label: "500€ — 900€", desc: "Le meilleur rapport qualité-prix", icon: "💶" },
      { value: "high", label: "900€ — 1300€", desc: "Composants premium, grande autonomie", icon: "💎" },
      { value: "premium", label: "Plus de 1300€", desc: "Le haut de gamme absolu", icon: "👑" },
    ],
  },
  {
    id: "distance",
    emoji: "📏",
    title: "Quelle distance parcourez-vous par jour ?",
    subtitle: "Distance totale aller-retour",
    options: [
      { value: "short", label: "Moins de 15 km", desc: "Courts trajets urbains", icon: "🏘️" },
      { value: "medium", label: "15 — 30 km", desc: "Trajets quotidiens classiques", icon: "🛣️" },
      { value: "long", label: "30 — 60 km", desc: "Longs trajets ou randonnées", icon: "🗺️" },
      { value: "verylong", label: "Plus de 60 km", desc: "Longues distances / bikepacking", icon: "🌍" },
    ],
  },
  {
    id: "weight",
    emoji: "⚖️",
    title: "Le poids du vélo est-il important pour vous ?",
    subtitle: "Si vous devez porter le vélo (escaliers, transports…)",
    options: [
      { value: "critical", label: "Très important", desc: "Je le porte souvent (escaliers, train)", icon: "🏋️" },
      { value: "moderate", label: "Assez important", desc: "Parfois à le porter", icon: "🤷" },
      { value: "notimportant", label: "Pas important", desc: "Il reste dehors / garage", icon: "🏠" },
    ],
  },
  {
    id: "terrain",
    emoji: "🛤️",
    title: "Sur quel type de terrain roulez-vous ?",
    subtitle: "Choisissez le terrain dominant",
    options: [
      { value: "road", label: "Route & pistes cyclables", desc: "Bitume lisse, peu de dénivelé", icon: "🛤️" },
      { value: "mixed", label: "Mixte (route + chemins)", desc: "Un peu de tout, pavés inclus", icon: "🏞️" },
      { value: "offroad", label: "Tout-terrain / sentiers", desc: "Chemins, forêt, montagne", icon: "🌲" },
    ],
  },
];

/* ────── SCORING LOGIC ────── */
type Answers = Record<string, string>;

function getRecommendation(answers: Answers) {
  const scored = products.map((product) => {
    let score = 0;

    // Usage matching
    if (answers.usage === "ville" && product.category === "ville") score += 30;
    if (answers.usage === "multimodal" && product.category === "pliant") score += 35;
    if (answers.usage === "loisir" && product.category === "vtt") score += 30;
    if (answers.usage === "polyvalent") {
      if (product.category === "vtt") score += 15;
      if (product.category === "ville") score += 10;
    }

    // Budget matching
    if (answers.budget === "low" && product.price < 500) score += 25;
    if (answers.budget === "mid" && product.price >= 500 && product.price <= 900) score += 25;
    if (answers.budget === "high" && product.price > 900 && product.price <= 1300) score += 25;
    if (answers.budget === "premium" && product.price > 1300) score += 25;

    // Distance matching (autonomy)
    const autoNum = parseInt(product.autonomy.replace(/[^0-9]/g, "")) || 50;
    if (answers.distance === "short") score += 10;
    if (answers.distance === "medium" && autoNum >= 50) score += 15;
    if (answers.distance === "long" && autoNum >= 80) score += 20;
    if (answers.distance === "verylong" && autoNum >= 100) score += 25;

    // Weight matching
    const weightNum = parseInt(product.weight) || 25;
    if (answers.weight === "critical" && weightNum < 20) score += 20;
    if (answers.weight === "critical" && weightNum < 25) score += 10;
    if (answers.weight === "moderate" && weightNum < 26) score += 10;
    if (answers.weight === "notimportant") score += 5;

    // Terrain matching
    if (answers.terrain === "road" && product.category === "ville") score += 15;
    if (answers.terrain === "road" && product.category === "pliant") score += 10;
    if (answers.terrain === "mixed") score += 8;
    if (answers.terrain === "offroad" && product.category === "vtt") score += 20;

    // Bonus for high rating
    score += product.rating * 3;

    return { product, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 3);
}

/* ────── COMPONENTS ────── */
function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="quiz-progress">
      <div className="quiz-progress-bar">
        <motion.div
          className="quiz-progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${((current + 1) / total) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>
      <span className="quiz-progress-text">
        Question {current + 1} / {total}
      </span>
    </div>
  );
}

export default function QuizPage() {
  const [step, setStep] = useState(-1); // -1 = intro
  const [answers, setAnswers] = useState<Answers>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        setShowResults(true);
      }
    }, 300);
  };

  const restart = () => {
    setStep(-1);
    setAnswers({});
    setShowResults(false);
  };

  const results = showResults ? getRecommendation(answers) : [];

  return (
    <div className="quiz-page">
      <div className="quiz-bg-blob-1" />
      <div className="quiz-bg-blob-2" />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <AnimatePresence mode="wait">
          {/* ── INTRO SCREEN ── */}
          {step === -1 && !showResults && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="quiz-intro"
            >
              <span className="quiz-intro-badge">⚡ Gratuit • 60 secondes</span>
              <h1>
                Quel <span className="highlight">vélo électrique</span> est fait
                pour vous ?
              </h1>
              <p>
                Répondez à 5 questions simples et recevez une recommandation
                personnalisée parmi les meilleurs vélos électriques 2026.
              </p>
              <div className="quiz-intro-features">
                <div><span>🎯</span> Recommandation sur-mesure</div>
                <div><span>⏱️</span> Seulement 5 questions</div>
                <div><span>📊</span> Basé sur {products.length}+ modèles testés</div>
              </div>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setStep(0)}
              >
                Commencer le quiz →
              </button>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "1rem" }}>
                Aucune inscription requise. 100% gratuit.
              </p>
            </motion.div>
          )}

          {/* ── QUESTION SCREENS ── */}
          {step >= 0 && !showResults && (
            <motion.div
              key={`q-${step}`}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35 }}
              className="quiz-question-wrapper"
            >
              <ProgressBar current={step} total={questions.length} />

              <div className="quiz-question-header">
                <span className="quiz-question-emoji">{questions[step].emoji}</span>
                <h2>{questions[step].title}</h2>
                <p>{questions[step].subtitle}</p>
              </div>

              <div className="quiz-options">
                {questions[step].options.map((opt) => (
                  <motion.button
                    key={opt.value}
                    className={`quiz-option ${answers[questions[step].id] === opt.value ? "selected" : ""}`}
                    onClick={() => handleAnswer(questions[step].id, opt.value)}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="quiz-option-icon">{opt.icon}</span>
                    <div className="quiz-option-text">
                      <strong>{opt.label}</strong>
                      <span>{opt.desc}</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {step > 0 && (
                <button
                  className="quiz-back-btn"
                  onClick={() => setStep(step - 1)}
                >
                  ← Question précédente
                </button>
              )}
            </motion.div>
          )}

          {/* ── RESULTS SCREEN ── */}
          {showResults && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="quiz-results"
            >
              <div className="quiz-results-header">
                <span className="quiz-results-badge">🎉 Résultat</span>
                <h2>Votre vélo électrique idéal</h2>
                <p>
                  Basé sur vos réponses, voici notre recommandation personnalisée.
                </p>
              </div>

              {results.map((r, index) => (
                <motion.div
                  key={r.product.id}
                  className={`quiz-result-card ${index === 0 ? "quiz-result-top" : ""}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                >
                  {index === 0 && <div className="quiz-result-ribbon">🏆 Meilleur Match</div>}
                  {index === 1 && <div className="quiz-result-ribbon silver">🥈 Alternative</div>}
                  {index === 2 && <div className="quiz-result-ribbon bronze">🥉 Aussi recommandé</div>}

                  <div className="quiz-result-content">
                    {r.product.image && r.product.image.startsWith("/images/products/") && (
                      <div className="quiz-result-image">
                        <img src={r.product.image} alt={r.product.name} />
                      </div>
                    )}
                    <div className="quiz-result-info">
                      <h3>{r.product.name}</h3>
                      <div className="quiz-result-specs">
                        <span>⚡ {r.product.motor}</span>
                        <span>🔋 {r.product.autonomy}</span>
                        <span>⚖️ {r.product.weight}</span>
                        <span>⭐ {r.product.rating}/5 ({r.product.reviewCount} avis)</span>
                      </div>
                      <p>{r.product.summary}</p>
                      <div className="quiz-result-actions">
                        <span className="quiz-result-price">
                          {r.product.price}<small>€</small>
                        </span>
                        <a
                          href={r.product.affiliateUrl || `https://www.amazon.fr/dp/${r.product.asin}?tag=ebike-distrib-21`}
                          target="_blank"
                          rel="nofollow noopener sponsored"
                          className="btn btn-amazon"
                        >
                          🛒 Voir sur Amazon
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="quiz-results-footer">
                <button className="btn btn-secondary" onClick={restart}>
                  🔄 Refaire le quiz
                </button>
                <a href="/meilleur-velo-electrique" className="btn btn-primary">
                  📊 Voir le comparatif complet
                </a>
              </div>

              {/* Cross-linking SEO */}
              <div className="quiz-results-links">
                <h3>📖 Pour aller plus loin</h3>
                <ul>
                  <li><a href="/guide/comment-choisir-velo-electrique">Guide complet : comment choisir son vélo électrique</a></li>
                  <li><a href="/guide/aides-etat-achat-velo-electrique">Aides de l&apos;État : économisez jusqu&apos;à 3800€</a></li>
                  <li><a href="/meilleur-velo-electrique-ville">Comparatif vélos de ville</a></li>
                  <li><a href="/meilleur-velo-electrique-pliant">Comparatif vélos pliants</a></li>
                  <li><a href="/meilleur-vtt-electrique">Comparatif VTT électriques</a></li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
