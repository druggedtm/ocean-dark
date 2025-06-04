import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js"
            strategy="afterInteractive"
          />
          <Script 
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/836/simplex-noise.min.js" 
            strategy="beforeInteractive"
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
