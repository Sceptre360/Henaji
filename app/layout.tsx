import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gas Connect',
  description: 'Gas cylinder delivery service',
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
