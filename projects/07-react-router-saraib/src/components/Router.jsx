import { EVENTS } from "../consts.js"
import { useState, useEffect, Children } from "react"
import { match } from "path-to-regexp"
import { getCurrentPath } from "../utils.js"

export function Router({children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1>}) {
    //tecnica del renderizado condicional
    const [currentPath, setCurrentPath] = useState(getCurrentPath())
  
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(getCurrentPath())
      }
  
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
      //popstate cuando se regresa a la pagina con el boton 'atras'
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
  
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
      }
    }, [])
    
    let routeParams = []

    //add routes from children <Route /> components
    const routesFromChildren = Children.map(children, ({props, type}) => {
      const {name} = type
      const isRoute = name === 'Route'
      return isRoute ? props : null
    })

    const routesToUse = routes.concat(routesFromChildren).filter(Boolean)
    
    const Page = routesToUse.find(({path}) => { 
      if(path === currentPath) return true

      //decode - decodificarlo 
      //se ha usado path-to-regexp (match) para poder detectar rutas dinámicas
      //Ejemplo: /search/:query <- :query es una ruta dinámica
      const matcherUrl = match(path, {decode: decodeURIComponent})
      const matched = matcherUrl(currentPath) // devuelve /search/javascript
      if(!matched) return false

      //Guardar los parámetros de la url que eran dinámicos 
      //y que hemos extraído con path-to-regexp
      //Por ejemplo, si la ruta es /search/:query
      //y la url es /search/javascript
      //matched.params.query === 'javascript'
      routeParams = matched.params 
      return true
    })?.Component

    return Page 
      ? <Page routeParams={routeParams} /> 
      : <DefaultComponent routeParams={routeParams} />
  }