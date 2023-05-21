import { Navbar } from '../component'
import Footer from './Footer'

interface PropertyDetailLayout {
    children: React.ReactNode
}
export default function PropertyDetailLayout({children}: PropertyDetailLayout) {
  return (
    <>
    <Navbar />
    <div>{children}</div>
    <Footer />
    </>
  )
}
