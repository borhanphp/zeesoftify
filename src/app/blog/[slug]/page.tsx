import {
    ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin, Facebook, Link as LinkIcon
} from 'lucide-react';
import Link from 'next/link';

// Mock data fetching based on slug
const getBlogPost = (slug: string) => {
    const posts = [
        {
            slug: "future-of-ai-in-enterprise-saas",
            title: "The Future of AI in Enterprise SaaS Architecture",
            category: "Engineering",
            date: "Oct 24, 2026",
            readTime: "5 min read",
            author: "Zeesoftify Engineering Team",
            content: `
        <p>Artificial Intelligence is no longer just a buzzword; it's a fundamental architectural shift in how we build enterprise software.</p>
        
        <h2>The Paradigm Shift</h2>
        <p>Historically, SaaS platforms relied on deterministic logic. You input data A, you get output B. Today, with the integration of Large Language Models (LLMs) and advanced machine learning infrastructure, SaaS applications are becoming probabilistic and generative. They don't just process data; they understand context, anticipate user needs, and automate complex cognitive workflows.</p>

        <h3>Key Architectural Changes:</h3>
        <ul>
          <li><strong>Vector Databases as Standard:</strong> Alongside traditional relational databases, vector stores are becoming mandatory for handling semantic search and AI context retrieval.</li>
          <li><strong>Agentic Workflows:</strong> Moving from simple API integrations to deploying autonomous agents that can execute multi-step tasks across different microservices.</li>
          <li><strong>Edge AI:</strong> Pushing inference closer to the user to reduce latency and improve privacy.</li>
        </ul>

        <h2>Building for the Future</h2>
        <p>At Zeesoftify, we are re-architecting our foundational libraries to ensure AI is a native citizen of our applications, not an afterthought bolted onto legacy code. This means designing data pipelines that are immediately ready for fine-tuning and building UI components that fluidly adapt to generated dynamic content.</p>

        <blockquote>
          "The most successful software of the next decade won't be the ones with the most features, but the ones that require the least cognitive load from their users."
        </blockquote>

        <p>As we continue to push the boundaries of what's possible, our commitment remains the same: delivering scalable, secure, and incredibly smart digital ecosystems for our partners.</p>
      `
        },
        {
            slug: "why-nextjs-and-tailwind-is-the-ultimate-stack",
            title: "Why Next.js and Tailwind is the Ultimate Stack",
            category: "Development",
            date: "Nov 02, 2026",
            readTime: "7 min read",
            author: "Frontend Architecture Group",
            content: `
        <p>The modern web demands speed both in development velocity and in user experience. After evaluating dozens of frameworks, our engineering team has standardized on the combination of Next.js and Tailwind CSS.</p>

        <h2>The Power of Server Components</h2>
        <p>Next.js App Router fundamentally changed the game by making React Server Components the default. This allows us to ship zero-JavaScript by default, hydrating only the interactive parts of the UI. The performance gains for deep, content-heavy SaaS dashboards have been staggering.</p>

        <h2>Utility-First CSS Wins</h2>
        <p>Tailwind CSS ended the debate on how to style applications at scale. By enforcing a constrained design system directly in the markup, we've eliminated the 'dead CSS' problem entirely. Using specialized utilities, we can achieve complex modern aesthetics—like the glassmorphism and deep dark modes seen across Zeesoftify's products—without writing custom CSS files.</p>

        <p>When you combine Next.js's optimized routing and image handling with Tailwind's minimal CSS footprint, you get applications that score perfectly on Core Web Vitals while remaining incredibly maintainable for large teams.</p>
      `
        },
        {
            slug: "securing-cloud-infrastructure-modern-era",
            title: "Securing Cloud Infrastructure in the Modern Era",
            category: "Cybersecurity",
            date: "Nov 15, 2026",
            readTime: "6 min read",
            author: "Infrastructure Security Team",
            content: `
        <p>In a world where perimeters no longer exist, traditional castle-and-moat security strategies are obsolete. Modern cloud infrastructure requires a fundamentally different approach to security.</p>

        <h2>The Zero Trust Mandate</h2>
        <p>Zero Trust Architecture (ZTA) is the principle of "never trust, always verify." Every access request, regardless of its origin, must be fully authenticated, authorized, and encrypted before granting access.</p>

        <h3>Implementation Pillars:</h3>
        <ul>
          <li><strong>Identity as the Perimeter:</strong> Strong, multi-factor authentication (MFA) and continuous authorization checks are the first line of defense.</li>
          <li><strong>Micro-segmentation:</strong> Dividing the network into isolated segments to contain potential breaches and limit lateral movement.</li>
          <li><strong>Continuous Monitoring:</strong> Real-time visibility into all network traffic and user behavior to detect anomalies and respond rapidly.</li>
        </ul>

        <h2>Infrastructure as Code (IaC) Security</h2>
        <p>Security must shift left. By integrating security scanning into our CI/CD pipelines, we ensure that vulnerabilities are caught before infrastructure is even deployed. Code reviews for Terraform or CloudFormation scripts are as rigorous as reviews for application code.</p>
        
        <p>At Zeesoftify, security isn't a team; it's a culture. We embed these principles into every layer of our digital ecosystems, ensuring our clients' data remains highly protected in an increasingly hostile landscape.</p>
      `
        }
    ];
    return posts.find(p => p.slug === slug);
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getBlogPost(params.slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
                    <p className="text-gray-400 mb-8">The article you are looking for does not exist.</p>
                    <Link href="/#blog" className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <article className="min-h-screen pt-32 pb-24 relative selection:bg-primary/30 selection:text-white">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">

                {/* Back Link */}
                <Link href="/#blog" className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors mb-12 group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Articles
                </Link>

                {/* Header */}
                <header className="mb-16">
                    <div className="flex items-center gap-4 text-sm font-semibold text-gray-400 mb-6">
                        <span className="px-3 py-1 bg-white/5 rounded-full text-primary border border-white/5">{post.category}</span>
                        <div className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</div>
                        <div className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-between py-6 border-y border-white/10">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <p className="text-white font-medium">{post.author}</p>
                                <p className="text-sm text-gray-400">Published on Zeesoftify Blog</p>
                            </div>
                        </div>

                        {/* Social Share (Desktop) */}
                        <div className="hidden sm:flex items-center gap-3">
                            <span className="text-sm text-gray-400 mr-2 font-medium">Share:</span>
                            <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-[#1DA1F2] hover:bg-white/10 transition-colors"><Twitter size={18} /></button>
                            <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:bg-white/10 transition-colors"><Linkedin size={18} /></button>
                            <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"><LinkIcon size={18} /></button>
                        </div>
                    </div>
                </header>

                {/* Featured Image Placeholder */}
                <div className="w-full aspect-video rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-white/5 mb-16 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 right-6 text-white/20">Featured Image</div>
                    {/* Decorative abstract elements simulating an image */}
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full mix-blend-screen filter blur-[80px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full mix-blend-screen filter blur-[80px]" />
                </div>

                {/* Article Layout */}
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Main Content */}
                    <div className="lg:w-3/4">
                        <div
                            className="prose prose-invert prose-lg max-w-none 
                         prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                         prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                         prose-h3:text-xl prose-h3:text-gray-200
                         prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                         prose-ul:text-gray-300 prose-li:mb-2
                         prose-strong:text-white prose-strong:font-semibold
                         prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                         prose-blockquote:border-l-primary prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:text-gray-200 prose-blockquote:not-italic"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Mobile Share */}
                        <div className="mt-16 pt-8 border-t border-white/10 sm:hidden flex flex-col gap-4">
                            <span className="text-sm text-gray-400 font-medium">Share this article:</span>
                            <div className="flex items-center gap-3">
                                <button className="flex-1 py-3 rounded-xl glass flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors"><Twitter size={18} /> Twitter</button>
                                <button className="flex-1 py-3 rounded-xl glass flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors"><Linkedin size={18} /> LinkedIn</button>
                            </div>
                        </div>
                    </div>

                    {/* Sticky Sidebar */}
                    <div className="lg:w-1/4 hidden lg:block">
                        <div className="sticky top-32 glass-card rounded-2xl p-6">
                            <h4 className="font-bold text-white mb-4 flex items-center gap-2"><Share2 size={16} className="text-primary" /> Share Article</h4>
                            <div className="flex flex-col gap-3">
                                <button className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-[#1DA1F2]/10 text-gray-300 hover:text-[#1DA1F2] transition-colors flex items-center gap-3 px-4 text-sm font-medium border border-transparent hover:border-[#1DA1F2]/20"><Twitter size={16} /> Twitter</button>
                                <button className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-[#0A66C2]/10 text-gray-300 hover:text-[#0A66C2] transition-colors flex items-center gap-3 px-4 text-sm font-medium border border-transparent hover:border-[#0A66C2]/20"><Linkedin size={16} /> LinkedIn</button>
                                <button className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-[#1877F2]/10 text-gray-300 hover:text-[#1877F2] transition-colors flex items-center gap-3 px-4 text-sm font-medium border border-transparent hover:border-[#1877F2]/20"><Facebook size={16} /> Facebook</button>
                                <div className="my-2 border-t border-white/10" />
                                <button className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors flex items-center gap-3 px-4 text-sm font-medium"><LinkIcon size={16} /> Copy Link</button>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <h4 className="font-bold text-white mb-4 text-sm tracking-wider uppercase">Subscribe</h4>
                                <p className="text-xs text-gray-400 mb-4 leading-relaxed">Get the latest engineering insights delivered to your inbox.</p>
                                <input type="email" placeholder="Your email address" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-primary mb-3" />
                                <button className="w-full py-2 bg-white text-black rounded-lg font-semibold text-sm hover:bg-gray-200 transition-colors">Subscribe</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </article>
    );
}
