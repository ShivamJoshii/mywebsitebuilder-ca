'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Check, 
  ArrowRight, 
  Zap, 
  Smartphone, 
  Search, 
  Shield,
  Clock,
  Star,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'
import Link from 'next/link'

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const stagger = {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-primary">
              MyWebsiteBuilder<span className="text-accent">.ca</span>
            </Link>
            
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#services" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#process" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Process
              </Link>
              <Link href="#faq" className="text-sm text-gray-600 hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link 
                href="#contact" 
                className="text-sm bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenu && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="container py-4 space-y-3">
              <Link href="#services" className="block text-gray-600" onClick={() => setMobileMenu(false)}>
                Services
              </Link>
              <Link href="#process" className="block text-gray-600" onClick={() => setMobileMenu(false)}>
                Process
              </Link>
              <Link href="#faq" className="block text-gray-600" onClick={() => setMobileMenu(false)}>
                FAQ
              </Link>
              <Link href="#contact" className="block text-primary font-medium" onClick={() => setMobileMenu(false)}>
                Get Started →
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Now building in Calgary, Edmonton & Vancouver
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Professional websites for{' '}
              <span className="text-accent">Canadian businesses</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Fast, modern, and built to convert. We handle everything from design to launch so you can focus on your business.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#free-website"
                className="w-full sm:w-auto bg-accent text-white font-medium px-8 py-4 rounded-full hover:bg-accent-light transition-colors flex items-center justify-center gap-2"
              >
                Claim your free website
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#services"
                className="w-full sm:w-auto text-gray-600 font-medium px-8 py-4 hover:text-primary transition-colors"
              >
                See our services →
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Free option available</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>48-hour delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Canadian owned & operated</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-12 border-y border-gray-100">
        <div className="container">
          <p className="text-center text-sm text-gray-500 mb-8">
            Trusted by businesses across Canada
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            <span className="text-xl font-bold">United Health Centres</span>
            <span className="text-xl font-bold">Calgary Medical</span>
            <span className="text-xl font-bold">Edmonton Care</span>
            <span className="text-xl font-bold">Prairie Health</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything you need to succeed online
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No templates. No bloated plugins. Just clean, fast websites that work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-gray-100 hover:border-accent/20 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Website CTA */}
      <section id="free-website" className="py-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-6">
              Limited time offer
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Get a website built for free
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Yes, actually free. No credit card, no hidden fees, no catch. We build you a professional website in 48 hours because we believe in proving our value first.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
              <div className="p-6 rounded-xl bg-white/5">
                <Check className="w-6 h-6 text-green-400 mb-4" />
                <h3 className="font-semibold mb-2">Custom design</h3>
                <p className="text-white/70 text-sm">Not a template. Built for your brand.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5">
                <Check className="w-6 h-6 text-green-400 mb-4" />
                <h3 className="font-semibold mb-2">Mobile optimized</h3>
                <p className="text-white/70 text-sm">Looks perfect on every device.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5">
                <Check className="w-6 h-6 text-green-400 mb-4" />
                <h3 className="font-semibold mb-2">Ready to launch</h3>
                <p className="text-white/70 text-sm">We handle hosting and setup.</p>
              </div>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-primary font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              Claim your free website
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to your new website
            </p>
          </div>

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
                <span className="text-6xl font-bold text-accent/10">{s.num}</span>
                <h3 className="text-2xl font-semibold mt-4 mb-3">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Loved by Canadian businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-gray-50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-6 text-gray-700">"{t.quote}"</p>
                <div>
                  <p className="font-semibold">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Questions? Answered.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-600">
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
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to get started?
              </h2>
              <p className="text-xl text-gray-600">
                Tell us about your project. We'll get back to you within 24 hours.
              </p>
            </div>

            {!formSubmitted ? (
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:outline-none transition-colors"
                      placeholder="you@business.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Business name</label>
                  <input
                    type="text"
                    name="business"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">What do you need? *</label>
                  <select
                    name="service"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:outline-none transition-colors"
                    placeholder="What does your business do? What are your goals?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white font-medium py-4 rounded-lg hover:bg-accent-light transition-colors"
                >
                  Send message →
                </button>
              </form>
            ) : (
              <div className="text-center py-12 bg-green-50 rounded-2xl">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Message sent!</h3>
                <p className="text-gray-600">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xl font-bold">
              MyWebsiteBuilder<span className="text-accent">.ca</span>
            </div>
            <p className="text-sm text-gray-500">
              © 2026 MyWebsiteBuilder.ca — A subsidiary of{' '}
              <Link href="https://mybuilder.ca" className="text-accent hover:underline">
                MyBuilder
              </Link>
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="mailto:hello@mybuilder.ca" className="hover:text-primary transition-colors">
                hello@mybuilder.ca
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
