import { Helmet } from "react-helmet-async";

interface PageSeoProps {
  title: string;
  description: string;
  canonical?: string;
}

export const PageSeo = ({ title, description, canonical }: PageSeoProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {canonical && <link rel="canonical" href={canonical} />}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {canonical && <meta property="og:url" content={canonical} />}
  </Helmet>
);

