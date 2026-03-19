'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Clock, ArrowLeft } from 'lucide-react'

// Facebook Pixel tracking helper
const trackPixelEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, params)
  }
}

// Track CTA clicks
const trackCTA = (ctaName: string, location: string) => {
  trackPixelEvent('Lead', {
    content_name: ctaName,
    location: location,
    value: 0.0,
    currency: 'CAD'
  })
}

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

export default function AppliedPage() {
  const [applicantName, setApplicantName] = useState<string>('')

  // Track page view on mount and retrieve name from sessionStorage
  useEffect(() => {
    trackPixelEvent('PageView')
    
    // Get applicant name from sessionStorage (set during form submission)
    const storedName = sessionStorage.getItem('applicantName')
    if (storedName) {
      setApplicantName(storedName)
    }
  }, [])

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
          Thanks for applying{applicantName ? `, ${applicantName}` : ''}. We'll review your application and get back to you within 24-48 hours.
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
        
        {/* Book a Call CTA */}
        <div className="text-center mb-6">
          <p className="text-dark_black/60 dark:text-white/60 mb-4">
            Want to discuss your project sooner?
          </p>
          <a
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2hkzZr-aMGxNbQOI2afBAvcZauqQFj3pd96dOe3BN9F5wUUh6icE2KM3jq4BQYuEMa7EDiYIAr"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTA('Book a Call - Success Page', 'success_page')}
            className="inline-flex items-center gap-2 bg-purple_blue text-white font-medium px-8 py-4 rounded-full hover:bg-purple_blue/90 transition-colors"
          >
            <Clock className="w-5 h-5" />
            Book a 15-Minute Call
          </a>
        </div>

        <Link
          href="/"
          onClick={() => trackCTA('Back to Home - Success Page', 'success_page')}
          className="inline-flex items-center gap-2 text-purple_blue hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>
    </div>
  )
}
