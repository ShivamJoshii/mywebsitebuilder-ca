'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Check, 
  ArrowRight, 
  Zap, 
  Smartphone, 
  Search, 
  Shield,
  Clock,
  Star,
  Menu,
  X
} from 'lucide-react'

// No pixel tracking on homepage - only track form completions on /applied

// Animation variants (same as mybuilder.ca)
const fadeInUp = {
  initial: { y: '20%', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 1, delay: 0.8 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Features
const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    desc: 'Optimized for speed. Your site loads in under 2 seconds.'
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    desc: 'Looks perfect on every device, from phones to desktops.'
  },
  {
    icon: Search,
    title: 'SEO Ready',
    desc: 'Built to rank. Technical SEO included from day one.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    desc: 'SSL, backups, and monitoring included. Sleep easy.'
  }
]

// Process steps
const steps = [
  {
    num: '01',
    title: 'Tell us about your business',
    desc: 'Fill out a quick form about what you do and your goals.'
  },
  {
    num: '02',
    title: 'We design & build',
    desc: 'Our team creates a custom site tailored to your brand.'
  },
  {
    num: '03',
    title: 'Review & launch',
    desc: 'You approve it, we make it live. Simple as that.'
  }
]

// Testimonials - Pain-focused
const testimonials = [
  {
    quote: "I wasted $3,000 on a developer who ghosted me. These guys delivered in 48 hours and it looked better than what I paid for before.",
    author: "Dr. Sarah Chen",
    role: "Family Practice",
    rating: 5
  },
  {
    quote: "My old site took 10 seconds to load. I was losing customers and didn't even know why. New site loads in 1.5 seconds and my leads doubled.",
    author: "Mike Rodriguez",
    role: "Owner, Rodriguez Landscaping",
    rating: 5
  },
  {
    quote: "I built my site on Wix and it looked amateur. Customers told me they chose my competitor because their site looked more professional. Not anymore.",
    author: "Jennifer Walsh",
    role: "Salon Owner",
    rating: 5
  }
]

// FAQ
const faqs = [
  {
    q: "How much does a website cost?",
    a: "We offer a free website for qualifying businesses (limited spots). Custom projects start at $1,500. Every project includes design, development, and 30 days of support."
  },
  {
    q: "How long does it take?",
    a: "Most sites are live within 1-2 weeks. Our free website offer is delivered in 48 hours."
  },
  {
    q: "Do I own the website?",
    a: "Absolutely. You own everything — code, design, content. We can hand it off or manage it for you, your choice."
  },
  {
    q: "What if I need changes later?",
    a: "We offer monthly maintenance plans, or you can make edits yourself. We build on platforms that are easy to update."
  },
  {
    q: "Do you handle hosting and domains?",
    a: "Yes. We can set up hosting, connect your domain, and handle all the technical stuff. Or use your own — we're flexible."
  }
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-dark_black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark_black/80 backdrop-blur-md border-b border-dark_black/10 dark:border-white/10">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-semibold text-dark_black dark:text-white">
              MyWebsiteBuilder<span className="instrument-font italic text-purple_blue">.ca</span>
            </Link>
            
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#services" className="text-sm text-dark_black/70 dark:text-white/70 hover:text-purple_blue transition-colors">
                Services
              </Link>
              <Link href="#process" className="text-sm text-dark_black/70 dark:text-white/70 hover:text-purple_blue transition-colors">
                Process
              </Link>
              <Link href="#faq" className="text-sm text-dark_black/70 dark:text-white/70 hover:text-purple_blue transition-colors">
                FAQ
              </Link>
              <Link
                href="/apply"
                className="group bg-purple_blue text-white font-medium flex items-center gap-2 py-2 px-5 rounded-full border border-purple_blue transition-all hover:bg-transparent hover:text-purple_blue"
              >
                Apply Now
                <svg width="20" height="20" viewBox="0 0 40 40" fill="none" className="transform transition-transform group-hover:rotate-45">
                  <rect width="40" height="40" rx="20" className="fill-white group-hover:fill-purple_blue transition-colors"/>
                  <path d="M15.832 15.3334H24.1654V23.6667" stroke="#1B1D1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.832 23.6667L24.1654 15.3334" stroke="#1B1D1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-dark_black dark:text-white"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenu && (
          <div className="md:hidden border-t border-dark_black/10 dark:border-white/10 bg-white dark:bg-dark_black">
            <div className="container py-4 space-y-3">
              <Link href="#services" className="block text-dark_black/70 dark:text-white/70" onClick={() => setMobileMenu(false)}>
                Services
              </Link>
              <Link href="#process" className="block text-dark_black/70 dark:text-white/70" onClick={() => setMobileMenu(false)}>
                Process
              </Link>
              <Link href="#faq" className="block text-dark_black/70 dark:text-white/70" onClick={() => setMobileMenu(false)}>
                FAQ
              </Link>
              <Link 
                href="/apply" 
                className="block text-purple_blue font-medium" 
                onClick={() => setMobileMenu(false)}
              >
                Apply Now →
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero - Pain Focused */}
      <section className="relative pt-44 pb-20 overflow-hidden">
        {/* Background gradient (same as mybuilder.ca) */}
        <div className="absolute inset-0 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient" />
        
        <div className="container relative z-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Scarcity Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red/10 text-red text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
              Only 3 free websites available this month
            </motion.div>

            {/* Pain Headline */}
            <motion.h1 variants={fadeInUp} className="font-medium mb-6">
              Your website is costing you{' '}
              <span className="instrument-font italic font-normal text-red">
                thousands in lost revenue
              </span>
            </motion.h1>

            {/* Pain Subheadline */}
            <motion.p variants={fadeInUp} className="text-xl text-dark_black/60 dark:text-white/60 max-w-2xl mx-auto mb-10">
              75% of customers judge your credibility based on your website. If it looks outdated, loads slowly, or doesn't work on mobile, they're going to your competitor. We fix this in 48 hours.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/apply"
                className="group bg-purple_blue text-white font-medium flex items-center gap-3 py-3 px-6 rounded-full border border-purple_blue transition-all hover:bg-transparent hover:text-purple_blue"
              >
                <span className="transform transition-transform group-hover:translate-x-1">
                  Get My Free Website
                </span>
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" className="transform transition-transform group-hover:rotate-45">
                  <rect width="40" height="40" rx="20" className="fill-white group-hover:fill-purple_blue transition-colors"/>
                  <path d="M15.832 15.3334H24.1654V23.6667" stroke="#1B1D1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.832 23.6667L24.1654 15.3334" stroke="#1B1D1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/apply"
                className="group bg-transparent border border-dark_black dark:border-white/50 text-dark_black dark:text-white font-medium flex items-center gap-2 py-3 px-5 rounded-full transition-all hover:bg-dark_black hover:text-white dark:hover:bg-white dark:hover:text-dark_black"
              >
                <Clock className="w-4 h-4" />
                <span>Book a Call</span>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-dark_black/50 dark:text-white/50">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green" />
                <span>50+ websites launched</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green" />
                <span>Average 3x lead increase</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green" />
                <span>48-hour delivery guarantee</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-dark_black/5 dark:bg-white/5">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-medium mb-4">
              Sound <span className="instrument-font italic font-normal text-red">familiar?</span>
            </h2>
            <p className="text-xl text-dark_black/60 dark:text-white/60 max-w-2xl mx-auto">
              We've heard these stories from hundreds of business owners
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { text: "I paid $3,000 for a website and the developer disappeared", icon: "💸" },
              { text: "My site takes 8 seconds to load and customers bounce", icon: "⏱️" },
              { text: "I built it myself on Wix and it looks amateur", icon: "😤" },
              { text: "I don't have time to figure this out myself", icon: "😵" },
              { text: "My competitor's site looks way more professional", icon: "😰" },
              { text: "I know I'm losing customers but don't know where to start", icon: "🤷" },
            ].map((pain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white dark:bg-dark_black border border-dark_black/10 dark:border-white/10 text-center"
              >
                <div className="text-4xl mb-4">{pain.icon}</div>
                <p className="text-dark_black/80 dark:text-white/80">"{pain.text}"</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/apply"
              className="group inline-flex items-center gap-3 bg-purple_blue text-white font-medium py-3 px-8 rounded-full border border-purple_blue transition-all hover:bg-transparent hover:text-purple_blue"
            >
              Apply Now →
            </Link>
            <p className="text-sm text-dark_black/50 dark:text-white/50 mt-4">
              Only 3 spots left this month • No credit card required
            </p>
          </div>
        </div>
      </section>



      {/* Logos */}
      <section className="py-12 border-y border-dark_black/10 dark:border-white/10">
        <div className="container">
          <p className="text-center text-sm text-dark_black/50 dark:text-white/50 mb-8">
            Trusted by businesses worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            <span className="text-xl font-bold text-dark_black dark:text-white">United Health Centres</span>
            <span className="text-xl font-bold text-dark_black dark:text-white">Medical Practices</span>
            <span className="text-xl font-bold text-dark_black dark:text-white">Local Services</span>
            <span className="text-xl font-bold text-dark_black dark:text-white">Prairie Health</span>
          </div>
        </div>
      </section>

      {/* Services - Pain-Focused */}
      <section id="services" className="py-24">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-medium mb-4">
              We solve the problems that{' '}
              <span className="instrument-font italic font-normal text-red">keep you up at night</span>
            </h2>
            <p className="text-xl text-dark_black/60 dark:text-white/60 max-w-2xl mx-auto">
              Every feature we build addresses a specific pain point that costs you customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'Stop Losing Mobile Customers',
                desc: '53% of mobile visitors leave if your site takes longer than 3 seconds to load. We build sub-2-second sites.'
              },
              {
                icon: Smartphone,
                title: 'Capture Mobile Traffic',
                desc: '60% of searches are on mobile. If your site isn\'t mobile-optimized, you\'re invisible to most customers.'
              },
              {
                icon: Search,
                title: 'Get Found on Google',
                desc: 'Technical SEO built-in from day one. No more wondering why competitors rank higher than you.'
              },
              {
                icon: Shield,
                title: 'Sleep Easy at Night',
                desc: 'SSL, backups, and monitoring included. No more worrying about your site going down or getting hacked.'
              }
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl border border-dark_black/10 dark:border-white/10 hover:border-purple_blue/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-purple_blue/10 flex items-center justify-center mb-4 group-hover:bg-purple_blue/20 transition-colors">
                  <f.icon className="w-6 h-6 text-purple_blue" />
                </div>
                <h3 className="text-xl font-medium mb-2">{f.title}</h3>
                <p className="text-dark_black/60 dark:text-white/60">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Reversal CTA */}
      <section id="free-website" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple_blue/10 via-transparent to-yellow_gradient/20" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-red/10 text-red text-sm font-medium mb-6">
              We take all the risk
            </span>
            <h2 className="font-medium mb-6">
              Professional website in 48 hours{' '}
              <span className="instrument-font italic font-normal text-red">or you don't pay</span>
            </h2>
            <p className="text-xl text-dark_black/60 dark:text-white/60 max-w-2xl mx-auto mb-10">
              We're so confident you'll love your new site that we don't take payment until after delivery. No deposits. No contracts. No bullshit. If you don't love it, walk away.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
              <div className="p-6 rounded-xl bg-white dark:bg-white/5 border border-dark_black/10 dark:border-white/10">
                <Check className="w-6 h-6 text-green mb-4" />
                <h3 className="font-medium mb-2">No deposit required</h3>
                <p className="text-dark_black/60 dark:text-white/60 text-sm">We build first, you pay only if you're happy.</p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-white/5 border border-dark_black/10 dark:border-white/10">
                <Check className="w-6 h-6 text-green mb-4" />
                <h3 className="font-medium mb-2">48-hour guarantee</h3>
                <p className="text-dark_black/60 dark:text-white/60 text-sm">Miss the deadline? It's free. Period.</p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-white/5 border border-dark_black/10 dark:border-white/10">
                <Check className="w-6 h-6 text-green mb-4" />
                <h3 className="font-medium mb-2">You own everything</h3>
                <p className="text-dark_black/60 dark:text-white/60 text-sm">Code, design, content. All yours. No lock-in.</p>
              </div>
            </div>

            <Link
              href="/apply"
              className="group inline-flex items-center gap-3 bg-purple_blue text-white font-medium py-3 px-8 rounded-full border border-purple_blue transition-all hover:bg-transparent hover:text-purple_blue"
            >
              Get My Free Assessment
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" className="transform transition-transform group-hover:rotate-45">
                <rect width="40" height="40" rx="20" className="fill-white group-hover:fill-purple_blue transition-colors"/>
                <path d="M15.832 15.3334H24.1654V23.6667" stroke="#1B1D1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.832 23.6667L24.1654 15.3334" stroke="#1B1D1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 bg-dark_black/5 dark:bg-white/5">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-medium mb-4">
              How it <span className="instrument-font italic font-normal dark:text-white/70">works</span>
            </h2>
            <p className="text-xl text-dark_black/60 dark:text-white/60">
              Three simple steps to your new website
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <span className="text-6xl font-bold text-purple_blue/20">{s.num}</span>
                <h3 className="text-2xl font-medium mt-4 mb-3">{s.title}</h3>
                <p className="text-dark_black/60 dark:text-white/60">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-medium mb-4">
              Loved by <span className="instrument-font italic font-normal dark:text-white/70">businesses worldwide</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-dark_black/5 dark:bg-white/5"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow_gradient text-yellow_gradient" />
                  ))}
                </div>
                <p className="text-lg mb-6 text-dark_black/80 dark:text-white/80">"{t.quote}"</p>
                <div>
                  <p className="font-medium">{t.author}</p>
                  <p className="text-sm text-dark_black/50 dark:text-white/50">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-dark_black/5 dark:bg-white/5">
        <div className="container max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-medium mb-4">
              Questions? <span className="instrument-font italic font-normal dark:text-white/70">Answered.</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white dark:bg-dark_black rounded-xl border border-dark_black/10 dark:border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-dark_black/5 dark:hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium text-lg">{faq.q}</span>
                  <span className={`text-2xl transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-dark_black/70 dark:text-white/70">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* FAQ CTA */}
          <div className="text-center mt-12">
            <Link
              href="/apply"
              className="group inline-flex items-center gap-3 bg-purple_blue text-white font-medium py-3 px-8 rounded-full border border-purple_blue transition-all hover:bg-transparent hover:text-purple_blue"
            >
              Get Started — Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-dark_black/10 dark:border-white/10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xl font-semibold text-dark_black dark:text-white">
              MyWebsiteBuilder<span className="instrument-font italic text-purple_blue">.ca</span>
            </div>
            <p className="text-sm text-dark_black/50 dark:text-white/50">
              © 2026 MyWebsiteBuilder.ca — A subsidiary of{' '}
              <Link href="https://mybuilder.ca" className="text-purple_blue hover:underline">
                MyBuilder
              </Link>
            </p>
            <div className="flex items-center gap-6 text-sm text-dark_black/50 dark:text-white/50">
              <Link 
                href="mailto:hello@mybuilder.ca" 
                className="hover:text-purple_blue transition-colors"
              >
                hello@mybuilder.ca
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
