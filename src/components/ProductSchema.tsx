import { Helmet } from "react-helmet-async";

interface ProductSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
}

export const ProductSchema = ({
  name,
  description,
  url,
  image = "https://www.cognixailabs.com/black-logo.png",
}: ProductSchemaProps) => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name,
        applicationCategory: "BusinessApplication",
        description,
        url,
        provider: {
          "@type": "Organization",
          name: "CognixAI Labs",
          url: "https://www.cognixailabs.com",
        },
        image,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          price: "0",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "Custom pricing",
          },
        },
      })}
    </script>
  </Helmet>
);

