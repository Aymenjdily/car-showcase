import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'RentCar',
  description: 'Discover the best Cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
