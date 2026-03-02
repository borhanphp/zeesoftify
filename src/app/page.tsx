'use client';

import { motion, Variants } from 'framer-motion';
import {
  ArrowRight, Code, Smartphone, Brain, Cloud, Shield, Zap, CheckCircle2,
  Database, Users, PackageSearch, Briefcase, Calculator, Building2
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const services = [
    { icon: <Code size={32} />, title: "Web Engineering", desc: "High-performance, scalable web applications built with modern frameworks." },
    { icon: <Smartphone size={32} />, title: "Mobile Apps", desc: "Native and cross-platform mobile experiences that users love." },
    { icon: <Brain size={32} />, title: "AI Integration", desc: "Smart AI solutions to automate workflows and unlock new insights." },
    { icon: <Cloud size={32} />, title: "Cloud Architecture", desc: "Resilient backend systems deployed on robust cloud infrastructure." },
    { icon: <Shield size={32} />, title: "Cybersecurity", desc: "Enterprise-grade security implementations to protect your data." },
    { icon: <Zap size={32} />, title: "Performance Tuning", desc: "Optimizing existing systems for maximum speed and efficiency." },
  ];

  const products = [
    { icon: <Building2 size={32} />, title: "ERP System", desc: "Enterprise Resource Planning to unify your business operations." },
    { icon: <Users size={32} />, title: "CRM Software", desc: "Customer Relationship Management to boost sales and client retention." },
    { icon: <PackageSearch size={32} />, title: "Inventory Management", desc: "Real-time stock tracking and supply chain optimization." },
    { icon: <Briefcase size={32} />, title: "HRM System", desc: "Human Resource Management for payroll, attendance, and recruitment." },
    { icon: <Database size={32} />, title: "Project Management", desc: "Agile task tracking, resource allocation, and team collaboration." },
    { icon: <Calculator size={32} />, title: "Accounting Software", desc: "Automated bookkeeping, invoicing, and financial reporting." },
  ];

  const blogPosts = [
    {
      slug: "future-of-ai-in-enterprise-saas",
      title: "The Future of AI in Enterprise SaaS Architecture",
      category: "Engineering",
      date: "Oct 24, 2026",
      readTime: "5 min read",
      desc: "Explore how machine learning models are fundamentally changing how we build multi-tenant SaaS applications."
    },
    {
      slug: "why-nextjs-and-tailwind-is-the-ultimate-stack",
      title: "Why Next.js and Tailwind is the Ultimate Stack",
      category: "Development",
      date: "Nov 02, 2026",
      readTime: "7 min read",
      desc: "An in-depth look at performance metrics that prove Server Components and Utility CSS are here to stay."
    },
    {
      slug: "securing-cloud-infrastructure-modern-era",
      title: "Securing Cloud Infrastructure in the Modern Era",
      category: "Cybersecurity",
      date: "Nov 15, 2026",
      readTime: "6 min read",
      desc: "Best practices for implementing zero-trust architectures across distributed microservices environments."
    }
  ];

  const features = [
    "Agile Development Methodology",
    "Dedicated Engineering Teams",
    "Continuous Integration/Deployment",
    "Rigorous Quality Assurance",
    "Transparent Communication",
    "Post-Launch Maintenance Support"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full mix-blend-screen filter blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm font-medium text-gray-300">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Welcome to the future of software
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                Architecting <span className="text-gradient">Intelligent</span><br />Digital Ecosystems
              </h1>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
              Zeesoftify transforms complex business challenges into elegant, scalable software solutions. We build what's next.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                Start a Project <ArrowRight size={20} />
              </Link>
              <Link href="#products" className="w-full sm:w-auto px-8 py-4 glass border border-white/10 rounded-full font-semibold hover:bg-white/5 transition-colors">
                Explore Products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 relative bg-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Our Flagship Products</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Enterprise SaaS Suite</h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              We offer off-the-shelf, highly customizable software solutions designed to digitize and automate your entire operational workflow.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <motion.div key={index} variants={fadeInUp} className="glass-card rounded-2xl p-8 border hover:border-accent/40 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-all" />
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center text-accent mb-6 shadow-lg">
                  {product.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{product.title}</h4>
                <p className="text-gray-400 leading-relaxed text-sm mb-6">
                  {product.desc}
                </p>
                <div className="flex items-center text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity gap-2">
                  Learn More <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Custom Development</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">World-Class Engineering</h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              From conception to deployment, our end-to-end services ensure your digital products lead the market in innovation and reliability.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-32 relative overflow-hidden bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">The Zeesoftify Difference</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Built by Engineers, <br />Driven by Results</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We believe that great software is the foundation of exceptional businesses. Our approach fuses cutting-edge technology with pragmatic architectural design, ensuring your systems are not just functional, but future-proof.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="text-secondary shrink-0" size={20} />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glass border border-white/10 relative shadow-2xl">
                {/* Simulated Code Editor / Dashboard View */}
                <div className="absolute inset-0 bg-[#0d1117] p-6 flex flex-col">
                  {/* Fake window controls */}
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  {/* Fake Code Lines */}
                  <div className="space-y-3 font-mono text-sm opacity-70">
                    <div className="flex gap-4"><span className="text-gray-500">1</span><span className="text-primary">import</span> <span className="text-white">&#123; architect &#125;</span> <span className="text-primary">from</span> <span className="text-secondary">'@zeesoftify/core'</span>;</div>
                    <div className="flex gap-4"><span className="text-gray-500">2</span></div>
                    <div className="flex gap-4"><span className="text-gray-500">3</span><span className="text-primary">const</span> <span className="text-white">vision</span> <span className="text-primary">=</span> <span className="text-accent">new Project</span>();</div>
                    <div className="flex gap-4"><span className="text-gray-500">4</span><span className="text-white">vision.applyScale</span>(<span className="text-secondary">'global'</span>);</div>
                    <div className="flex gap-4"><span className="text-gray-500">5</span></div>
                    <div className="flex gap-4"><span className="text-gray-500">6</span><span className="text-white">architect.deploy</span>(vision).then(() <span className="text-primary">=&gt;</span> &#123;</div>
                    <div className="flex gap-4 pl-4"><span className="text-gray-500">7</span><span className="text-white">console</span>.<span className="text-primary">log</span>(<span className="text-secondary">'Success deployed.'</span>);</div>
                    <div className="flex gap-4"><span className="text-gray-500">8</span>&#125;);</div>
                  </div>

                  {/* Floating abstract elements over the code */}
                  <div className="absolute right-10 bottom-10 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-2xl animate-pulse" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-32 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Latest Insights</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">Engineering Blog</h3>
            </div>
            <Link href="#blog" className="glass px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
              View All Articles <ArrowRight size={16} />
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, idx) => (
              <motion.article key={idx} variants={fadeInUp} className="group">
                <Link href={`/blog/${post.slug}`} className="block h-full cursor-pointer">
                  <div className="h-48 w-full bg-gradient-to-br from-gray-800 to-black rounded-2xl mb-6 overflow-hidden relative border border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 mb-3">
                    <span className="px-3 py-1 bg-white/5 rounded-full text-primary border border-white/5">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.desc}
                  </p>
                  <div className="text-sm font-medium text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Article <ArrowRight size={16} className="text-primary" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full mix-blend-screen filter blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/30 rounded-full mix-blend-screen filter blur-[80px]" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Build the Future?</h2>
              <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Let's discuss how Zeesoftify can engineer the perfect technical solution to accelerate your business growth.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link href="/contact" className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2">
                  Contact Us Now <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
