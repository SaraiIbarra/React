import './App.css'
import { Component, lazy, Suspense } from 'react'
import HomePage from './pages/Home.jsx'
import Page404 from './pages/404.jsx'
import SearchPage from './pages/Search.jsx'
import { Router } from './components/Router.jsx'
import { Route } from './components/Route.jsx'

const LazyHomePage = lazy(() => import('./pages/Home.jsx')) 
//importar de forma dinamica
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))

const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

/* 
export function navigate (href) {
  window.history.pushState({}, '', href)
  //Crear un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  //Enviar el evento
  window.dispatchEvent(navigationEvent)
} */

function App() {
  return (
    <main>
      {/* {currentPath === '/' && <HomePage/>}
      {currentPath === '/about' && <AboutPage/>} */}
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage}/>
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
