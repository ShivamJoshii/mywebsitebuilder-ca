'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Script from 'next/script'
import { ArrowRight, ArrowLeft, Check, Building2, Briefcase, FileText, Globe, User, Mail, Phone, DollarSign, Clock, Star, TrendingUp } from 'lucide-react'

// Facebook Pixel tracking helper
const trackPixelEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, params)
  }
}

// Animation variants
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0
  })
}

const steps = [
  {
    id: 1,
    question: "What's your business name?",
    description: "This helps us understand who we're building for.",
    field: "businessName",
    type: "text",
    placeholder: "e.g., Smith & Associates",
    icon: Building2,
    required: true
  },
  {
    id: 2,
    question: "What industry are you in?",
    description: "We'll tailor the design to your industry.",
    field: "industry",
    type: "select",
    options: [
      "Healthcare / Medical",
      "Professional Services (Law, Accounting, Consulting)",
      "Retail / E-commerce",
      "Restaurant / Food",
      "Real Estate",
      "Fitness / Wellness",
      "Technology / SaaS",
      "Construction / Trades",
      "Education",
      "Other"
    ],
    icon: Briefcase,
    required: true
  },
  {
    id: 3,
    question: "What's your approximate monthly revenue?",
    description: "This helps us understand your business stage.",
    field: "revenue",
    type: "radio",
    options: [
      { value: "under10k", label: "Under $10,000/month" },
      { value: "10k-50k", label: "$10,000 - $50,000/month" },
      { value: "50k-100k", label: "$50,000 - $100,000/month" },
      { value: "100k+", label: "$100,000+/month" },
      { value: "startup", label: "Just starting out" }
    ],
    icon: DollarSign,
    required: true
  },
  {
    id: 4,
    question: "Do you have a domain name?",
    description: "A domain is your website address (e.g., yourbusiness.com)",
    field: "hasDomain",
    type: "radio",
    options: [
      { value: "yes", label: "Yes, I have a domain" },
      { value: "no", label: "No, I need help getting one" },
      { value: "later", label: "I'll get one later" }
    ],
    icon: Globe,
    required: true
  },
  {
    id: 5,
    question: "When do you need your website?",
    description: "This helps us prioritize applications.",
    field: "timeline",
    type: "radio",
    options: [
      { value: "asap", label: "ASAP — I'm losing business without one" },
      { value: "30days", label: "Within 30 days" },
      { value: "later", label: "Just exploring options" }
    ],
    icon: Clock,
    required: true
  },
  {
    id: 6,
    question: "Describe the website you want to build",
    description: "What pages do you need? What's the main goal?",
    field: "description",
    type: "textarea",
    placeholder: "I need a simple website for my dental clinic. Main pages: Home, Services, About, Contact. Goal: Get more appointment bookings.",
    icon: FileText,
    required: true
  },
  {
    id: 7,
    question: "What's your name?",
    description: "So we know who we're working with.",
    field: "name",
    type: "text",
    placeholder: "John Smith",
    icon: User,
    required: true
  },
  {
    id: 8,
    question: "What's your email?",
    description: "We'll send updates about your application here.",
    field: "email",
    type: "email",
    placeholder: "john@yourbusiness.com",
    icon: Mail,
    required: true
  },
  {
    id: 9,
    question: "What's your phone number?",
    description: "Optional, but helps us reach you faster.",
    field: "phone",
    type: "tel",
    placeholder: "(555) 123-4567",
    icon: Phone,
    required: false
  }
]

// Testimonials with specific results
const testimonials = [
  {
    quote: "They built our clinic website in 48 hours. We got 3 new patient bookings in the first week.",
    author: "Dr. Sarah Chen",
    role: "Family Practice, Calgary",
    metric: "3 new patients",
    metricLabel: "in first week"
  },
  {
    quote: "Finally got off Wix and look professional. My clients actually mention how nice the website is.",
    author: "Mike Rodriguez",
    role: "Landscaping Business, Edmonton",
    metric: "100%",
    metricLabel: "more professional"
  },
  {
    quote: "The booking integration they set up saved me 5 hours a week on phone calls.",
    author: "Jennifer Walsh",
    role: "Salon Owner, Edmonton",
    metric: "5 hours/week",
    metricLabel: "time saved"
  }
]

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [direction, setDirection] = useState(0)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Track page view on mount
  useEffect(() => {
    trackPixelEvent('PageView')
    trackPixelEvent('Lead', { step: 1, total_steps: steps.length })
  }, [])

  const currentStepData = steps[currentStep]
  const progress = ((currentStep + 1) / steps.length) * 100

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1)
      setCurrentStep(currentStep + 1)
      // Track step completion
      trackPixelEvent('Lead', { step: currentStep + 1, total_steps: steps.length })
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection(-1)
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (currentStep < steps.length - 1) {
      handleNext()
      return
    }

    setIsSubmitting(true)
    
    // Submit to Netlify
    try {
      const form = new FormData()
      form.append('form-name', 'website-application')
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value)
      })

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(form as any).toString()
      })

      setIsSubmitted(true)
      // Track successful form submission
      trackPixelEvent('CompleteRegistration', {
        content_name: 'Website Application',
        status: true,
        revenue: 0
      })
    } catch (error) {
      console.error('Submission error:', error)
      alert('There was an error submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const canProceed = () => {
    if (!currentStepData.required) return true
    const value = formData[currentStepData.field]
    return value && value.trim() !== ''
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-dark_black">
        {/* Success Page */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Check className="w-10 h-10 text-green" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-medium mb-4 text-center">
            Application <span className="instrument-font italic">received!</span>
          </h1>
          
          <p className="text-lg text-dark_black/60 dark:text-white/60 mb-6 text-center max-w-xl">
            Thanks for applying, {formData.name}. We'll review your application and get back to you within 24-48 hours.
          </p>
          
          <div className="bg-dark_black/5 dark:bg-white/5 rounded-xl p-6 mb-8 max-w-md w-full">
            <p className="text-sm text-dark_black/60 dark:text-white/60 mb-4">
              <strong>We accept approximately 30% of applicants</strong> based on:
            </p>
            <ul className="text-sm text-dark_black/80 dark:text-white/80 space-y-2">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green" />
                Business viability & revenue
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green" />
                Timeline alignment
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green" />
                Project scope fit
              </li>
            </ul>
          </div>

          {/* Testimonials on success page */}
          <div className="max-w-4xl w-full mb-8">
            <p className="text-center text-sm text-dark_black/50 dark:text-white/50 mb-4">
              Join 100+ businesses worldwide who've gotten free websites
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-dark_black/5 dark:bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-purple_blue mb-1">{t.metric}</div>
                  <div className="text-xs text-dark_black/50 dark:text-white/50 mb-2">{t.metricLabel}</div>
                  <p className="text-sm text-dark_black/70 dark:text-white/70">"{t.quote.substring(0, 60)}..."</p>
                  <p className="text-xs text-dark_black/50 dark:text-white/50 mt-2">— {t.author}</p>
                </div>
              ))}
            </div>
          </div>
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple_blue hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark_black">
      {/* Hero Section with Guarantee */}
      <div className="bg-gradient-to-br from-purple_blue/5 via-transparent to-yellow_gradient/10 pt-24 pb-12">
        <div className="container text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green/10 text-green text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-green" />
            Rated 5.0 by businesses worldwide
          </div>

          {/* Main headline with guarantee */}
          <h1 className="text-4xl md:text-6xl font-medium mb-4">
            Professional website in{' '}
            <span className="instrument-font italic text-purple_blue">48 hours</span>
          </h1>
          <p className="text-2xl md:text-3xl font-medium mb-6">
            completely free.
          </p>
          <p className="text-lg text-dark_black/60 dark:text-white/60 max-w-2xl mx-auto mb-8">
            We build custom websites for businesses worldwide, completely free. 
            No hidden fees. No catch.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-dark_black/50 dark:text-white/50">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green" />
              <span>100+ websites built</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green" />
              <span>30% acceptance rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green" />
              <span>48-hour delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-dark_black/50 dark:text-white/50 mb-2">
              <span>Step {currentStep + 1} of {steps.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="h-2 bg-dark_black/10 dark:bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-purple_blue rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentStep}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="min-h-[400px] bg-white dark:bg-dark_black rounded-2xl p-8 shadow-xl border border-dark_black/10 dark:border-white/10"
              >
                {/* Question icon */}
                <div className="w-12 h-12 rounded-xl bg-purple_blue/10 flex items-center justify-center mb-6">
                  <currentStepData.icon className="w-6 h-6 text-purple_blue" />
                </div>

                {/* Question */}
                <h2 className="text-2xl md:text-3xl font-medium mb-3">
                  {currentStepData.question}
                </h2>
                <p className="text-dark_black/60 dark:text-white/60 mb-8">
                  {currentStepData.description}
                </p>

                {/* Input field */}
                <div className="mb-8">
                  {currentStepData.type === 'text' && (
                    <input
                      type={currentStepData.type}
                      value={formData[currentStepData.field] || ''}
                      onChange={(e) => updateField(currentStepData.field, e.target.value)}
                      placeholder={currentStepData.placeholder}
                      className="w-full px-4 py-4 text-lg rounded-xl border border-dark_black/20 dark:border-white/20 bg-transparent focus:outline-none focus:border-purple_blue transition-colors"
                      autoFocus
                    />
                  )}

                  {currentStepData.type === 'email' && (
                    <input
                      type="email"
                      value={formData[currentStepData.field] || ''}
                      onChange={(e) => updateField(currentStepData.field, e.target.value)}
                      placeholder={currentStepData.placeholder}
                      className="w-full px-4 py-4 text-lg rounded-xl border border-dark_black/20 dark:border-white/20 bg-transparent focus:outline-none focus:border-purple_blue transition-colors"
                      autoFocus
                    />
                  )}

                  {currentStepData.type === 'tel' && (
                    <input
                      type="tel"
                      value={formData[currentStepData.field] || ''}
                      onChange={(e) => updateField(currentStepData.field, e.target.value)}
                      placeholder={currentStepData.placeholder}
                      className="w-full px-4 py-4 text-lg rounded-xl border border-dark_black/20 dark:border-white/20 bg-transparent focus:outline-none focus:border-purple_blue transition-colors"
                      autoFocus
                    />
                  )}

                  {currentStepData.type === 'textarea' && (
                    <textarea
                      value={formData[currentStepData.field] || ''}
                      onChange={(e) => updateField(currentStepData.field, e.target.value)}
                      placeholder={currentStepData.placeholder}
                      rows={5}
                      className="w-full px-4 py-4 text-lg rounded-xl border border-dark_black/20 dark:border-white/20 bg-transparent focus:outline-none focus:border-purple_blue transition-colors resize-none"
                      autoFocus
                    />
                  )}

                  {currentStepData.type === 'select' && currentStepData.options && (
                    <div className="space-y-3">
                      {currentStepData.options.map((option) => {
                        const optionStr = String(option)
                        return (
                          <label
                            key={optionStr}
                            className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                              formData[currentStepData.field] === optionStr
                                ? 'border-purple_blue bg-purple_blue/5'
                                : 'border-dark_black/20 dark:border-white/20 hover:border-purple_blue/50'
                            }`}
                          >
                            <input
                              type="radio"
                              name={currentStepData.field}
                              value={optionStr}
                              checked={formData[currentStepData.field] === optionStr}
                              onChange={(e) => updateField(currentStepData.field, e.target.value)}
                              className="w-5 h-5 text-purple_blue"
                            />
                            <span className="text-lg">{optionStr}</span>
                          </label>
                        )
                      })}
                    </div>
                  )}

                  {currentStepData.type === 'radio' && currentStepData.options && (
                    <div className="space-y-3">
                      {currentStepData.options.map((option: any) => (
                        <label
                          key={option.value}
                          className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                            formData[currentStepData.field] === option.value
                              ? 'border-purple_blue bg-purple_blue/5'
                              : 'border-dark_black/20 dark:border-white/20 hover:border-purple_blue/50'
                          }`}
                        >
                          <input
                            type="radio"
                            name={currentStepData.field}
                            value={option.value}
                            checked={formData[currentStepData.field] === option.value}
                            onChange={(e) => updateField(currentStepData.field, e.target.value)}
                            className="w-5 h-5 text-purple_blue"
                          />
                          <span className="text-lg">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Navigation buttons */}
                <div className="flex items-center gap-4">
                  {currentStep > 0 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex items-center gap-2 px-6 py-3 rounded-full border border-dark_black/20 dark:border-white/20 text-dark_black dark:text-white hover:bg-dark_black/5 dark:hover:bg-white/5 transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Back
                    </button>
                  )}
                  
                  <button
                    type="submit"
                    disabled={!canProceed() || isSubmitting}
                    className={`flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all ${
                      canProceed() && !isSubmitting
                        ? 'bg-purple_blue text-white hover:bg-purple_blue/90'
                        : 'bg-dark_black/20 dark:bg-white/20 text-dark_black/50 dark:text-white/50 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : currentStep === steps.length - 1 ? (
                      <>
                        SEE IF I QUALIFY
                        <TrendingUp className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        Next
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Keyboard hint */}
                <p className="mt-6 text-sm text-dark_black/40 dark:text-white/40">
                  Press Enter ↵ to continue
                </p>
              </motion.div>
            </AnimatePresence>
          </form>

          {/* Trust signals below form */}
          <div className="mt-12 text-center">
            <p className="text-sm text-dark_black/50 dark:text-white/50 mb-4">
              Trusted by businesses worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-dark_black/40 dark:text-white/40">
              <span>North America</span>
              <span>•</span>
              <span>Europe</span>
              <span>•</span>
              <span>Asia</span>
              <span>•</span>
              <span>Australia</span>
            </div>
          </div>
        </div>
      </main>

      {/* Testimonials Section */}
      <section className="py-16 bg-dark_black/5 dark:bg-white/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Real results from <span className="instrument-font italic">real businesses</span>
            </h2>
            <p className="text-dark_black/60 dark:text-white/60">
              Join 100+ businesses worldwide who've gotten free websites
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-dark_black rounded-2xl p-8 shadow-lg border border-dark_black/10 dark:border-white/10"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-purple_blue mb-1">{t.metric}</div>
                  <div className="text-sm text-dark_black/50 dark:text-white/50">{t.metricLabel}</div>
                </div>
                <p className="text-dark_black/80 dark:text-white/80 mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-medium">{t.author}</p>
                  <p className="text-sm text-dark_black/50 dark:text-white/50">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA after testimonials */}
          <div className="text-center mt-12">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 bg-purple_blue text-white font-medium px-8 py-4 rounded-full hover:bg-purple_blue/90 transition-colors"
            >
              Apply Now — It's Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-dark_black/10 dark:border-white/10">
        <div className="container text-center">
          <p className="text-sm text-dark_black/50 dark:text-white/50">
            © 2026 MyWebsiteBuilder.ca — A subsidiary of{' '}
            <Link href="https://mybuilder.ca" className="text-purple_blue hover:underline">
              MyBuilder
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
