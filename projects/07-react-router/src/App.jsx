import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { EVENTS } from './consts'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'

export function navigate (href) {
  window.history.pushState({}, '', href)
  //Crear un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  //Enviar el evento
  window.dispatchEvent(navigationEvent)
}

function App() {
  //tecnica del renderizado condicional
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    //popstate cuando se regresa a la pagina con el boton 'atras'
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])
  
  return (
    <main>
      {currentPath === '/' && <HomePage/>}
      {currentPath === '/about' && <AboutPage/>}
    </main>
  )
}

export default App
