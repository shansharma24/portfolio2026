import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SidebarNumbers from './components/SidebarNumbers'
import ScrollIndicator from './components/ScrollIndicator'

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <SidebarNumbers />
      <ScrollIndicator />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
