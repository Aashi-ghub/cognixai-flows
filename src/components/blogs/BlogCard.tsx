import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, TrendingUp, DollarSign, Settings, Code } from "lucide-react";
import type { BlogPost } from "@/pages/blogs/data";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

// Map tags to colors and icons
const getTagStyle = (tags: string[]) => {
  const primaryTag = tags[0] || 'default';
  
  const tagMap: Record<string, { color: string; icon: React.ReactNode }> = {
    'ai-agents': {
      color: 'bg-[#8B6F47]', // Terracotta/brown
      icon: <Sparkles className="w-12 h-12" />,
    },
    'automation': {
      color: 'bg-[#5C7A4A]', // Dark green
      icon: <Zap className="w-12 h-12" />,
    },
    'operations': {
      color: 'bg-[#8B6F47]', // Terracotta/brown
      icon: <Settings className="w-12 h-12" />,
    },
    'sales-ops': {
      color: 'bg-[#5C7A4A]', // Dark green
      icon: <TrendingUp className="w-12 h-12" />,
    },
    'customer-support': {
      color: 'bg-[#8B6F47]', // Terracotta/brown
      icon: <Sparkles className="w-12 h-12" />,
    },
    'cost': {
      color: 'bg-[#5C7A4A]', // Dark green
      icon: <DollarSign className="w-12 h-12" />,
    },
    'roi': {
      color: 'bg-[#8B6F47]', // Terracotta/brown
      icon: <TrendingUp className="w-12 h-12" />,
    },
    'pricing': {
      color: 'bg-[#5C7A4A]', // Dark green
      icon: <DollarSign className="w-12 h-12" />,
    },
    'implementation': {
      color: 'bg-[#8B6F47]', // Terracotta/brown
      icon: <Code className="w-12 h-12" />,
    },
    'roadmap': {
      color: 'bg-[#5C7A4A]', // Dark green
      icon: <Settings className="w-12 h-12" />,
    },
    'rpa': {
      color: 'bg-[#8B6F47]', // Terracotta/brown
      icon: <Zap className="w-12 h-12" />,
    },
    'comparison': {
      color: 'bg-[#5C7A4A]', // Dark green
      icon: <TrendingUp className="w-12 h-12" />,
    },
    'automation-rates': {
      color: 'bg-[#8B6F47]', // Terracotta/brown
      icon: <Sparkles className="w-12 h-12" />,
    },
    'default': {
      color: 'bg-[#8B6F47]', // Terracotta/brown
      icon: <Sparkles className="w-12 h-12" />,
    },
  };

  return tagMap[primaryTag] || tagMap['default'];
};

export const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  const { color, icon } = getTagStyle(post.tags);
  const tagLabel = post.tags[0]?.replace(/-/g, ' ') || 'AI Agents';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/blogs/${post.slug}`}
        className="group block rounded-lg overflow-hidden border border-border/50 hover:border-border transition-all hover:shadow-lg"
      >
        <div className="flex flex-col md:flex-row bg-[#F5F3F0]">
          {/* Left Section - Text */}
          <div className="flex-1 p-6 md:p-8 bg-[#F5F3F0]">
            <div className="flex items-center gap-3 mb-2">
              {post.pillar && (
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                  Complete Guide
                </span>
              )}
              <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                {tagLabel}
              </p>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 leading-tight" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
              {post.title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-background/50 hover:bg-background transition-colors text-sm font-medium">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Right Section - Color Block with Icon */}
          <div className={`w-full md:w-32 lg:w-40 ${color} flex items-center justify-center p-6 md:p-8`}>
            <div className="text-white/80">
              {icon}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
