import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MyWebsiteBuilder.ca | Professional Websites for Canadian Businesses',
  description: 'Get a professional website built for your business. Fast, modern, and conversion-focused. Free website offer available.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-dark_black">{children}</body>
    </html>
  )
}
