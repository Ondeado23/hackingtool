import './globals.css'

export const metadata = {
  title: 'HackingTool v2.0.0',
  description: '185+ Security & Penetration Testing Tools',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-background">
      <body>
        {children}
      </body>
    </html>
  )
}
