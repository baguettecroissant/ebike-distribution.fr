// Centralized JSON-LD Schema components for SEO

interface FAQItem {
  question: string;
  answer: string;
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "eBike Distribution",
    "url": "https://ebike-distribution.fr",
    "description": "Guide expert et comparatif des meilleurs vélos électriques 2026. Trouvez le vélo électrique idéal.",
    "inLanguage": "fr-FR",
    "publisher": {
      "@type": "Organization",
      "name": "eBike Distribution",
      "url": "https://ebike-distribution.fr",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ebike-distribution.fr/icon.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ebike-distribution.fr/meilleur-velo-electrique?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "eBike Distribution",
    "url": "https://ebike-distribution.fr",
    "logo": "https://ebike-distribution.fr/icon.png",
    "sameAs": [],
    "description": "Guide expert et comparatif indépendant des meilleurs vélos électriques en France."
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://ebike-distribution.fr${item.url}`
    }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ArticleSchema({ 
  title, description, url, image, datePublished, dateModified 
}: { 
  title: string; description: string; url: string; image?: string; 
  datePublished: string; dateModified: string; 
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": `https://ebike-distribution.fr${url}`,
    "image": image ? `https://ebike-distribution.fr${image}` : undefined,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Organization",
      "name": "eBike Distribution",
      "url": "https://ebike-distribution.fr"
    },
    "publisher": {
      "@type": "Organization",
      "name": "eBike Distribution",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ebike-distribution.fr/icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ebike-distribution.fr${url}`
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  brand: string;
  price: number;
  rating: number;
  reviewCount: number;
  url: string;
}

export function ProductSchema({ name, description, image, brand, price, rating, reviewCount, url }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": image.startsWith("http") ? image : `https://ebike-distribution.fr${image}`,
    "brand": { "@type": "Brand", "name": brand },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": price,
      "availability": "https://schema.org/InStock",
      "url": url
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "bestRating": 5,
      "worstRating": 1,
      "reviewCount": reviewCount
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ItemListSchema({ products }: { products: ProductSchemaProps[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Meilleurs vélos électriques 2026",
    "numberOfItems": products.length,
    "itemListElement": products.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "name": p.name,
        "image": p.image.startsWith("http") ? p.image : `https://ebike-distribution.fr${p.image}`,
        "brand": { "@type": "Brand", "name": p.brand },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "EUR",
          "price": p.price
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": p.rating,
          "bestRating": 5,
          "reviewCount": p.reviewCount
        }
      }
    }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
