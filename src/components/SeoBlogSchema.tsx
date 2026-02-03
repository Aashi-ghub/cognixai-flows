import { useEffect } from "react";
import type { BlogPost } from "@/pages/blogs/data";

interface SeoBlogSchemaProps {
  post: BlogPost;
}

export const SeoBlogSchema = ({ post }: SeoBlogSchemaProps) => {
  useEffect(() => {
    const baseUrl = "https://www.cognixai.com";
    
    const blogPostSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: post.date,
      author: [
        {
          "@type": "Person",
          name: "Gaurav Singh",
          jobTitle: "Founder",
          worksFor: {
            "@type": "Organization",
            name: "CognixAI Labs",
          },
          sameAs: "https://www.linkedin.com/in/gaurav-singh-5392a7272/",
        },
        {
          "@type": "Person",
          name: "Aashi Raghuwanshi",
          jobTitle: "Founder",
          worksFor: {
            "@type": "Organization",
            name: "CognixAI Labs",
          },
          sameAs: "https://www.linkedin.com/in/aashi-raghuwanshi/",
        },
      ],
      publisher: {
        "@type": "Organization",
        name: "CognixAI Labs",
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/black-logo.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${baseUrl}/blogs/${post.slug}`,
      },
    };

    // Update document title and meta tags
    document.title = `${post.title} | CognixAI Labs`;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', post.excerpt);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${baseUrl}/blogs/${post.slug}`);

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOGTag('og:title', post.title);
    updateOGTag('og:description', post.excerpt);
    updateOGTag('og:type', 'article');
    updateOGTag('og:url', `${baseUrl}/blogs/${post.slug}`);

    // Create and inject JSON-LD script
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(blogPostSchema);
    script.id = `blog-post-schema-${post.slug}`;

    // Remove existing script if it exists
    const existing = document.getElementById(`blog-post-schema-${post.slug}`);
    if (existing) existing.remove();

    document.head.appendChild(script);

    // Cleanup
    return () => {
      const scriptToRemove = document.getElementById(`blog-post-schema-${post.slug}`);
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, [post]);

  return null;
};
