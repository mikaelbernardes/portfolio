import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const IbmPlexMono = IBM_Plex_Mono({
  subsets: ['cyrillic'],
  weight: ['100', '200', '300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Mikael Bernardes',
  description: 'Mikael`s Blog and Portfolio'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={IbmPlexMono.className}>{children}</body>
    </html>
  )
}
