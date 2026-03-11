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
  X,
  CheckCircle2
} from 'lucide-react'

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

// Testimonials
const testimonials = [
  {
    quote: "They built our clinic website in 48 hours. Professional, fast, and exactly what we needed.",
    author: "Dr. Sarah Chen",
    role: "Family Practice, Calgary",
    rating: 5
  },
  {
    quote: "Finally a web team that understands small business. No jargon, just results.",
    author: "Mike Rodriguez",
    role: "Owner, Rodriguez Landscaping",
    rating: 5
  },
  {
    quote: "Our booking requests tripled after the new site launched. Worth every penny.",
    author: "Jennifer Walsh",
    role: "Salon Owner, Edmonton",
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
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    service: '',
    message: ''
  })

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
                href="#contact" 
                className="group bg-purple_blue text-white font-medium flex items-center gap-2 py-2 px-5 rounded-full border border-purple_blue transition-all hover:bg-transparent hover:text-purple_blue"
              >
                Get Started
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
              <Link href="#contact" className="block text-purple_blue font-medium" onClick={() => setMobileMenu(false)}>
                Get Started →
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
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
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple_blue/10 text-purple_blue text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
              Now building in Calgary, Edmonton & Vancouver
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeInUp} className="font-medium mb-6">
              Professional websites for{' '}
              <span className="instrument-font italic font-normal dark:text-white/70">
                Canadian businesses
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={fadeInUp} className="text-xl text-dark_black/60 dark:text-white/60 max-w-2xl mx-auto mb-10">
              Fast, modern, and built to convert. We handle everything from design to launch so you can focus on your business.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#free-website"
                className="group bg-purple_blue text-white font-medium flex items-center gap-3 py-3 px-6 rounded-full border border-purple_blue transition-all hover:bg-transparent hover:text-purple_blue"
              >
                <span className="transform transition-transform group-hover:translate-x-1">
                  Claim your free website
                </span>
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" className="transform transition-transform group-hover:rotate-45">
                  <rect width="40" height="40" rx="20" className="fill-white group-hover:fill-purple_blue transition-colors"/>
                  <path d="M15.832 15.3334H24.1654V23.6667" stroke="#1B1D1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.832 23.6667L24.1654 15.3334" stroke="#1B1D1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="#services"
                className="group bg-transparent border border-dark_black dark:border-white/50 text-dark_black dark:text-white font-medium flex items-center gap-2 py-3 px-5 rounded-full transition-all hover:bg-dark_black hover:text-white dark:hover:bg-white dark:hover:text-dark_black"
              >
                <span>See our services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-dark_black/50 dark:text-white/50">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green" />
                <span>Free option available</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green" />
                <span>48-hour delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green" />
                <span>Canadian owned & operated</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-12 border-y border-dark_black/10 dark:border-white/10">
        <div className="container">
          <p className="text-center text-sm text-dark_black/50 dark:text-white/50 mb-8">
            Trusted by businesses across Canada
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            <span className="text-xl font-bold text-dark_black dark:text-white">United Health Centres</span>
            <span className="text-xl font-bold text-dark_black dark:text-white">Calgary Medical</span>
            <span className="text-xl font-bold text-dark_black dark:text-white">Edmonton Care</span>
            <span className="text-xl font-bold text-dark_black dark:text-white">Prairie Health</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-medium mb-4">
              Everything you need to{' '}
              <span className="instrument-font italic font-normal dark:text-white/70">succeed online</span>
            </h2>
            <p className="text-xl text-dark_black/60 dark:text-white/60 max-w-2xl mx-auto">
              No templates. No bloated plugins. Just clean, fast websites that work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
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

      {/* Free Website CTA */}
      <section id="free-website" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple_blue/10 via-transparent to-yellow_gradient/20" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-purple_blue/10 text-purple_blue text-sm font-medium mb-6">
              Limited time offer
            </span>
            <h2 className="font-medium mb-6">
              Get a website built for{' '}
              <span className="instrument-font italic font-normal dark:text-white/70">free</span>
            </h2>
            <p className="text-xl text-dark_black/60 dark:text-white/60 max-w-2xl mx-auto mb-10">
              Yes, actually free. No credit card, no hidden fees, no catch. We build you a professional website in 48 hours because we believe in proving our value first.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
              <div className="p-6 rounded-xl bg-white dark:bg-white/5 border border-dark_black/10 dark:border-white/10">
                <Check className="w-6 h-6 text-green mb-4" />
                <h3 className="font-medium mb-2">Custom design</h3>
                <p className="text-dark_black/60 dark:text-white/60 text-sm">Not a template. Built for your brand.</p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-white/5 border border-dark_black/10 dark:border-white/10">
                <Check className="w-6 h-6 text-green mb-4" />
                <h3 className="font-medium mb-2">Mobile optimized</h3>
                <p className="text-dark_black/60 dark:text-white/60 text-sm">Looks perfect on every device.</p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-white/5 border border-dark_black/10 dark:border-white/10">
                <Check className="w-6 h-6 text-green mb-4" />
                <h3 className="font-medium mb-2">Ready to launch</h3>
                <p className="text-dark_black/60 dark:text-white/60 text-sm">We handle hosting and setup.</p>
              </div>
            </div>

            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 bg-purple_blue text-white font-medium py-3 px-8 rounded-full border border-purple_blue transition-all hover:bg-transparent hover:text-purple_blue"
            >
              Claim your free website
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
              Loved by <span className="instrument-font italic font-normal dark:text-white/70">Canadian businesses</span>
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
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-medium mb-4">
                Ready to get <span className="instrument-font italic font-normal dark:text-white/70">started?</span>
              </h2>
              <p className="text-xl text-dark_black/60 dark:text-white/60">
                Tell us about your project. We'll get back to you within 24 hours.
              </p>
            </motion.div>

            {!formSubmitted ? (
              <div className="bg-white dark:bg-dark_black rounded-2xl p-8 shadow-xl border border-dark_black/10 dark:border-white/10">
                <form 
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const form = e.target as HTMLFormElement
                    fetch('/', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                      body: new URLSearchParams(new FormData(form) as any).toString()
                    })
                    .then(() => setFormSubmitted(true))
                    .catch((err) => alert('Error: ' + err))
                  }}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>Don't fill this out: <input name="bot-field" /></label>
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-dark_black/20 dark:border-white/20 bg-transparent focus:outline-none focus:border-purple_blue transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-dark_black/20 dark:border-white/20 bg-transparent focus:outline-none focus:border-purple_blue transition-colors"
                        placeholder="you@business.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Business name</label>
                    <input
                      type="text"
                      name="business"
                      value={formData.business}
                      onChange={(e) => setFormData({...formData, business: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-dark_black/20 dark:border-white/20 bg-transparent focus:outline-none focus:border-purple_blue transition-colors"
                      placeholder="Your business name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">What do you need? *</label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-dark_black/20 dark:border-white/20 bg-transparent focus:outline-none focus:border-purple_blue transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="free-website">Free website offer</option>
                      <option value="custom-website">Custom website</option>
                      <option value="redesign">Website redesign</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Tell us about your project</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-dark_black/20 dark:border-white/20 bg-transparent focus:outline-none focus:border-purple_blue transition-colors"
                      placeholder="What does your business do? What are your goals?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple_blue text-white font-medium py-4 rounded-lg hover:bg-purple_blue/90 transition-colors flex items-center justify-center gap-2"
                  >
                    Send message
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-12 bg-dark_black/5 dark:bg-white/5 rounded-2xl">
                <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green" />
                </div>
                <h3 className="text-2xl font-medium mb-2">Message sent!</h3>
                <p className="text-dark_black/60 dark:text-white/60">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            )}
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
              <Link href="mailto:hello@mybuilder.ca" className="hover:text-purple_blue transition-colors">
                hello@mybuilder.ca
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
