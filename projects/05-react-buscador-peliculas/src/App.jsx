import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'
import { useEffect, useRef, useState } from 'react'

function useSearch(){
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    //para saber si es la primera vez qye se renderiza el componente 
    if(isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }

    if(search === ''){
      setError('No se puede buscar una película vacía')
      return
    }

    if(search.match(/^\d+$/)){
      setError('No se puede buscar una película con un número')
      return
    }

    if(search.length < 3){
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  
  },[search])

  return [search, updateSearch, error]
}

function App() {
  const {movies} = useMovies()
  //const [query, setQuery] = useState('')
  const {search, updateSearch, error} = useSearch()

  const counter = useRef(0) //valor que persiste entre renders
  counter.current++
  console.log(counter.current)

  const handleSubmit = (event) => {
    event.preventDefault()
    //forma no controlada
    //const {query} = Object.fromEntries(
      //new window.FormData(event.target))
    console.log({search})
  }

  const handleChange = (event) => {
    updateSearch(event.target.value) //actualizar el estado
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Wars, The Matrix, ...'/>
          <button type='submit'>Buscar</button>    
        </form>  
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies}/>     
      </main>
    </div>
  )
}

export default App
