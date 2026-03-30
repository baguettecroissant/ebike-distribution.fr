"use client";

import { Product, amazonLink } from "../data/products";
import { motion } from "framer-motion";

export function StarRating({ rating, count }: { rating: number; count?: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.3;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <span className="stars">
      {Array.from({ length: full }).map((_, i) => (
        <span key={`f${i}`} className="star">★</span>
      ))}
      {hasHalf && <span className="star">★</span>}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={`e${i}`} className="star empty">★</span>
      ))}
      {count !== undefined && (
        <span className="rating-text">
          {rating}/5 ({count} avis)
        </span>
      )}
    </span>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card product-card">
      <div className="product-card-image">
        {product.badge && (
          <span className="product-card-badge">{product.badge}</span>
        )}
        {product.image && product.image.startsWith("/images/products/") ? (
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: "100%", height: "180px", objectFit: "contain", padding: "0.5rem" }}
            />
          </motion.div>
        ) : (
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{ fontSize: "5rem", opacity: 0.9 }}
          >
            🚲
          </motion.div>
        )}
      </div>
      <div className="product-card-body">
        <span className="product-card-brand">{product.brand}</span>
        <h3 className="product-card-title">{product.name}</h3>
        <div className="product-card-specs">
          <span className="spec-tag">⚡ {product.motor}</span>
          <span className="spec-tag">🔋 {product.autonomy}</span>
          <span className="spec-tag">⚖️ {product.weight}</span>
        </div>
        <StarRating rating={product.rating} count={product.reviewCount} />
        <div className="product-card-footer">
          <span className="product-price">
            {product.price}
            <span className="product-price-currency">€</span>
          </span>
          <a
            href={amazonLink(product.asin, product.affiliateUrl)}
            target="_blank"
            rel="nofollow noopener sponsored"
            className="btn btn-amazon-sm"
          >
            Voir sur Amazon →
          </a>
        </div>
      </div>
    </div>
  );
}

export function ComparisonTable({ products: items }: { products: Product[] }) {
  return (
    <div className="comparison-table-wrapper">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Modèle</th>
            <th>Moteur</th>
            <th>Autonomie</th>
            <th>Poids</th>
            <th>Note</th>
            <th>Prix</th>
            <th>Acheter</th>
          </tr>
        </thead>
        <tbody>
          {items.map((p) => (
            <tr key={p.id}>
              <td>
                <span className="table-product-name">{p.brand} {p.name.split(" ").slice(1, 3).join(" ")}</span>
                {p.badge && <span className="table-badge">{p.badge}</span>}
              </td>
              <td>{p.motor}</td>
              <td>{p.autonomy}</td>
              <td>{p.weight}</td>
              <td>
                <StarRating rating={p.rating} />
                <span className="rating-text" style={{ marginLeft: "0.25rem" }}>{p.rating}</span>
              </td>
              <td className="table-price">{p.price}€</td>
              <td>
                <a
                  href={amazonLink(p.asin, p.affiliateUrl)}
                  target="_blank"
                  rel="nofollow noopener sponsored"
                  className="btn btn-amazon-sm"
                >
                  Amazon →
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ProsConsBox({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="pros-cons">
      <div className="pros-box">
        <h4>✅ Points forts</h4>
        <ul>
          {pros.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
      <div className="cons-box">
        <h4>❌ Points faibles</h4>
        <ul>
          {cons.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function FeaturedProduct({ product }: { product: Product }) {
  return (
    <div className="featured-product">
      <div className="featured-product-image">
        {product.image && product.image.startsWith("/images/products/") ? (
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: "100%", maxWidth: "350px", height: "auto", objectFit: "contain" }}
            />
          </motion.div>
        ) : (
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{ fontSize: "8rem" }}
          >
            🚲
          </motion.div>
        )}
      </div>
      <div className="featured-product-info">
        {product.badge && (
          <span className="section-label">🏆 {product.badge}</span>
        )}
        <h3>{product.name}</h3>
        <p style={{ color: "var(--text-secondary)" }}>{product.summary}</p>
        <div className="featured-product-specs">
          <span className="featured-spec">⚡ Moteur {product.motor}</span>
          <span className="featured-spec">🔋 {product.autonomy}</span>
          <span className="featured-spec">⚖️ {product.weight}</span>
          <span className="featured-spec">🏎️ {product.speed}</span>
        </div>
        <StarRating rating={product.rating} count={product.reviewCount} />
        <div style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <span className="product-price" style={{ fontSize: "2rem" }}>
            {product.price}<span className="product-price-currency">€</span>
          </span>
          <a
            href={amazonLink(product.asin, product.affiliateUrl)}
            target="_blank"
            rel="nofollow noopener sponsored"
            className="btn btn-amazon"
          >
            🛒 Voir le prix sur Amazon
          </a>
        </div>
      </div>
    </div>
  );
}
