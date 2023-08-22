import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'



export const metadata: Metadata = {
  title: 'Andrew Kan',
  description: 'Andrew Kan portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
