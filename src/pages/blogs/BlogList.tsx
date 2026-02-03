import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CTASection } from "@/components/landing/CTASection";
import { blogPosts } from "./data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/blogs/BlogCard";

const BlogList = () => {
  const pillarPost = blogPosts.find(post => post.pillar);
  const spokePosts = blogPosts.filter(post => !post.pillar);

  // Group spokes by primary tag
  const groupedSpokes = spokePosts.reduce((acc, post) => {
    const primaryTag = post.tags[0] || 'other';
    if (!acc[primaryTag]) {
      acc[primaryTag] = [];
    }
    acc[primaryTag].push(post);
    return acc;
  }, {} as Record<string, typeof spokePosts>);

  return (
    <div className="min-h-screen bg-background">
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
              <p className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-6 opacity-90">
                CognixAI Labs Insight
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[0.18em] uppercase text-[#333] mb-6">
                AI Agents for Business Operations
              </h1>

              <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Complete guides, real examples, and actionable insights on automating 80–90% of repetitive operations with AI agents.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pillar Page Feature */}
        {pillarPost && (
          <section className="py-16 border-b border-border/50">
            <div className="container mx-auto px-4 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <BlogCard post={pillarPost} index={0} />
              </motion.div>
            </div>
          </section>
        )}

        {/* Spokes by Topic */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                Explore by Topic
              </h2>

              {Object.keys(groupedSpokes).length > 0 ? (
                <div className="space-y-6">
                  {Object.entries(groupedSpokes).map(([topic, posts]) => (
                    <div key={topic} className="space-y-6">
                      <h3 className="text-lg md:text-xl font-semibold capitalize text-foreground/80" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                        {topic.replace(/-/g, ' ')}
                      </h3>
                      <div className="space-y-4">
                        {posts.map((post, index) => (
                          <BlogCard key={post.slug} post={post} index={index} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center">No blog posts available yet.</p>
              )}
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default BlogList;
