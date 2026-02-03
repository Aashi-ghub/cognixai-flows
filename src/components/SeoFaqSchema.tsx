import { useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface SeoFaqSchemaProps {
  items: FAQItem[];
}

export const SeoFaqSchema = ({ items }: SeoFaqSchemaProps) => {
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    script.id = "faq-schema";

    // Remove existing script if it exists
    const existing = document.getElementById("faq-schema");
    if (existing) existing.remove();

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("faq-schema");
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, [items]);

  return null;
};
