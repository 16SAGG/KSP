import './App.css'
import { LanguageProvider } from './LanguageContext'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Partners from './sections/Partners'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <div
        style={{
          background:'#fff',
          minHeight:'100vh'
        }}
      >
        <div>
          <Navbar/>
          <Home/>
          <About/>
          <Services/>
          <Projects/>
          <Partners/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </LanguageProvider>
  )
}

export default App
