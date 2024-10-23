import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Slotfy - White-label Casino Platform',
  description: 'A white-label casino platform for licensed casinos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="m-4 bg-[#1B0A24] flex justify-center items-start min-h-screen">
        <main className="w-full max-w-[500px] min-h-screen bg-[#1d0d24] shadow-lg overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}