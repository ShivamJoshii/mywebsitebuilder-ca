'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Check, Building2, Briefcase, FileText, Globe, User, Mail, Phone } from 'lucide-react'

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
    question: "Describe the website you want to build",
    description: "What pages do you need? What's the main goal?",
    field: "description",
    type: "textarea",
    placeholder: "I need a simple website for my dental clinic. Main pages: Home, Services, About, Contact. Goal: Get more appointment bookings.",
    icon: FileText,
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
    question: "What's your name?",
    description: "So we know who we're working with.",
    field: "name",
    type: "text",
    placeholder: "John Smith",
    icon: User,
    required: true
  },
  {
    id: 6,
    question: "What's your email?",
    description: "We'll send updates about your application here.",
    field: "email",
    type: "email",
    placeholder: "john@yourbusiness.com",
    icon: Mail,
    required: true
  },
  {
    id: 7,
    question: "What's your phone number?",
    description: "Optional, but helps us reach you faster.",
    field: "phone",
    type: "tel",
    placeholder: "(555) 123-4567",
    icon: Phone,
    required: false
  }
]

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [direction, setDirection] = useState(0)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const currentStepData = steps[currentStep]
  const progress = ((currentStep + 1) / steps.length) * 100

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1)
      setCurrentStep(currentStep + 1)
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
      <div className="min-h-screen bg-white dark:bg-dark_black flex items-center justify-center px-4">
        <div className="max-w-xl w-full text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Check className="w-10 h-10 text-green" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-medium mb-4">
            Application <span className="instrument-font italic">received!</span>
          </h1>
          
          <p className="text-lg text-dark_black/60 dark:text-white/60 mb-6">
            Thanks for applying, {formData.name}. We'll review your application and get back to you within 24-48 hours.
          </p>
          
          <div className="bg-dark_black/5 dark:bg-white/5 rounded-xl p-6 mb-8">
            <p className="text-sm text-dark_black/60 dark:text-white/60 mb-2">
              We accept approximately 30% of applicants based on:
            </p>
            <ul className="text-sm text-dark_black/80 dark:text-white/80 space-y-1">
              <li>• Business viability</li>
              <li>• Project scope fit</li>
              <li>• Timeline alignment</li>
            </ul>
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
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark_black/80 backdrop-blur-md border-b border-dark_black/10 dark:border-white/10">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-semibold text-dark_black dark:text-white">
              MyWebsiteBuilder<span className="instrument-font italic text-purple_blue">.ca</span>
            </Link>
            <div className="text-sm text-dark_black/50 dark:text-white/50">
              Step {currentStep + 1} of {steps.length}
            </div>
          </div>
        </div>
      </header>

      {/* Progress bar */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-dark_black/10 dark:bg-white/10 z-50">
        <motion.div
          className="h-full bg-purple_blue"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Main content */}
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
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
                className="min-h-[400px]"
              >
                {/* Question icon */}
                <div className="w-12 h-12 rounded-xl bg-purple_blue/10 flex items-center justify-center mb-6">
                  <currentStepData.icon className="w-6 h-6 text-purple_blue" />
                </div>

                {/* Question */}
                <h2 className="text-3xl md:text-4xl font-medium mb-3">
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
                      {currentStepData.options.map((option) => (
                        <label
                          key={option}
                          className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                            formData[currentStepData.field] === option
                              ? 'border-purple_blue bg-purple_blue/5'
                              : 'border-dark_black/20 dark:border-white/20 hover:border-purple_blue/50'
                          }`}
                        >
                          <input
                            type="radio"
                            name={currentStepData.field}
                            value={option}
                            checked={formData[currentStepData.field] === option}
                            onChange={(e) => updateField(currentStepData.field, e.target.value)}
                            className="w-5 h-5 text-purple_blue"
                          />
                          <span className="text-lg">{option}</span>
                        </label>
                      ))}
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
                        Submit Application
                        <Check className="w-5 h-5" />
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
        </div>
      </main>
    </div>
  )
}
