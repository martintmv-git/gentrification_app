import './globals.css'
import { Josefin_Sans } from 'next/font/google'
import NavBar from './components/NavBar';

const josefinSans = Josefin_Sans({
  weight: '500', // Specify the weight if 'Josefin Sans' is not available as a variable font.
  subsets: ['latin'],
})

export const metadata = {
  title: 'Gentrification.app',
  description: 'Platform dedicated to creating awareness and understanding the impacts of gentrification.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}