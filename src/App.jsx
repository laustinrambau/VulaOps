import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import UseCases from './components/UseCases'
import WhyVulaOps from './components/WhyVulaOps'
import Research from './components/Research'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Methods from './components/Methods'
import ContactForm from './components/ContactForm'
import FeaturesSection from './components/FeaturesSection'
import AboutV1 from './components/Aboutv1'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutV1/>
        <FeaturesSection/>
        <UseCases />
      
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
