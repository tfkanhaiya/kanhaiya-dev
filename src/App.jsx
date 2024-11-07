import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

const App = () => {
  return (
   <main className="mx-auto max-w-7xl overflow-x-hidden antialised">
    <div className="bg-image fixed inset-0 bg-cover bg-fixed bg-center"></div>
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
   </main>
  )
}

export default App
