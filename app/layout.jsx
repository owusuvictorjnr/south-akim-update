import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <div className="">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
