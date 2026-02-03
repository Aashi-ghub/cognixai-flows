import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTASection } from "@/components/landing/CTASection";
import { SeoBlogSchema } from "@/components/SeoBlogSchema";
import { blogPosts, type BlogPost as BlogPostType } from "./data";
import { renderContent } from "./utils";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import NotFound from "../NotFound";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <SeoBlogSchema post={post as BlogPostType} />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-36 pb-16 border-b border-border/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blogs
              </Link>

              {post.pillar && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                    Pillar Guide
                  </span>
                </div>
              )}

              <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-foreground mb-6">
                {post.title}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                {post.author && (
                  <div>
                    <span>By {post.author.name}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4" />
                  {post.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-muted rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {renderContent(post.content)}
            </motion.article>
          </div>
        </section>

        {/* Related Posts */}
        {!post.pillar && (
          <section className="py-16 border-t border-border/50">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts
                  .filter(
                    p =>
                      p.slug !== post.slug &&
                      (p.pillar || p.tags.some(tag => post.tags.includes(tag)))
                  )
                  .slice(0, 2)
                  .map(relatedPost => (
                    <Link
                      key={relatedPost.slug}
                      to={`/blogs/${relatedPost.slug}`}
                      className="group p-6 border border-border rounded-lg hover:border-primary transition-colors"
                    >
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
