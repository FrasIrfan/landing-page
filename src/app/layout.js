import './globals.css'
import { Montserrat } from 'next/font/google'
import Header from '../components/LandingPage/Header'
import Footer from '../components/LandingPage/Footer'
import ContactUs from '../components/LandingPage/ContactUs';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Aglivo Web Design',
  description: 'Professional web design and development services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body suppressHydrationWarning>
        <Header />
        {children}
        <ContactUs/>
        <Footer />
      </body>
    </html>
  )
}
