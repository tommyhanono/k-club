import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TheVilla from './components/TheVilla'
import Services from './components/Services'
import Experience from './components/Experience'
import Location from './components/Location'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TheVilla />
      <Services />
      <Experience />
      <Location />
      <Pricing />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
