"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on navigation
  const handleToggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "/meilleur-velo-electrique", label: "Comparatifs" },
    { href: "/meilleur-velo-electrique-ville", label: "Ville" },
    { href: "/meilleur-velo-electrique-pliant", label: "Pliant" },
    { href: "/meilleur-vtt-electrique", label: "VTT" },
    { href: "/guides", label: "Guides" },
    { href: "/quiz", label: "Quiz ⚡" },
  ];

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <a href="/" className="logo" onClick={closeMenu}>
            <span className="logo-icon">⚡</span>
            eBike&nbsp;<span>Distribution</span>
          </a>

          {/* Desktop Nav */}
          <nav className="nav desktop-nav">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className={pathname === link.href ? "active" : ""}
              >
                {link.label}
              </a>
            ))}
            <a href="/quiz" className="nav-cta btn">
              🎯 Trouver mon vélo
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="mobile-toggle" 
            onClick={handleToggle}
            aria-label="Menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            <motion.div 
              className="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="mobile-menu-inner">
                {navLinks.map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href}
                    className={`mobile-link ${pathname === link.href ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                ))}
                <div style={{ marginTop: "2rem" }}>
                  <a 
                    href="/quiz" 
                    className="btn btn-primary"
                    style={{ display: "block", textAlign: "center" }}
                    onClick={closeMenu}
                  >
                    🎯 Trouver mon vélo
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
