import { Helmet } from "react-helmet-async";

export function OrganizationSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CognixAI Labs",
          description: "CognixAI Labs builds custom AI agents that automate 80–90% of repetitive business operations for B2B companies.",
          url: "https://www.cognixai.com",
          logo: "https://www.cognixai.com/black-logo.png",
          areaServed: ["IN", "US", "Global"],
          knowsAbout: ["AI agents", "business automation", "operations workflows", "agentic AI"],
          founder: [
            {
              "@type": "Person",
              name: "Gaurav Singh",
              sameAs: "https://www.linkedin.com/in/gaurav-singh-5392a7272/",
            },
            {
              "@type": "Person",
              name: "Aashi Raghuwanshi",
              sameAs: "https://www.linkedin.com/in/aashi-raghuwanshi/",
            },
          ],
          sameAs: [
            "https://www.linkedin.com/company/cognixai-labs",
          ],
          foundingDate: "2025",
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
          },
        })}
      </script>
    </Helmet>
  );
}

export function FaqSchema({ items }: { items: Array<{ question: string; answer: string }> }) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
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
        })}
      </script>
    </Helmet>
  );
}

export function ServiceSchema({ name, description }: { name: string; description: string }) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: name,
          provider: {
            "@type": "Organization",
            name: "CognixAI Labs",
            url: "https://www.cognixai.com",
          },
          description,
          areaServed: ["IN", "US", "Global"],
        })}
      </script>
    </Helmet>
  );
}

export function FounderSchema({ name, linkedinUrl }: { name: string; linkedinUrl: string }) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: name,
          jobTitle: "Founder",
          worksFor: {
            "@type": "Organization",
            name: "CognixAI Labs",
            url: "https://www.cognixai.com",
          },
          sameAs: [linkedinUrl],
          description: `Founder of CognixAI Labs building AI agents that automate 80–90% of business operations.`,
        })}
      </script>
    </Helmet>
  );
}
