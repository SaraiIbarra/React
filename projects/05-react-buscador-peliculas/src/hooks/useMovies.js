import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies.js'

export function useMovies ({search, sort}) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [, setError] = useState(null)

    //guardar la búsqueda anterior
    const previousSearch = useRef(search)

    //useMemo para cualquier cosa, useCallback para funciones
    const getMovies = useCallback( async ({search}) => {
        if(search === previousSearch.current) return
        
        try{
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newMovies = await searchMovies({search})
            setMovies(newMovies)            
        }catch(e){
            setError(e.message)
        } finally{
            //se va a ejecutar tanto en el try como en el catch 
            setLoading(false)
        }   
    }, []) 
    
  /*   const getSortedMovies = () => {
        console.log('getSortedMovies')
        const sortedMovies = sort
        ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
        : movies

        return sortedMovies
    } */

    const sortedMovies = useMemo(() => {
        if(!movies) return;
        return sort
        ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
        : movies
    }, [sort, movies])
        
   
    return {movies: sortedMovies, getMovies, loading}
  }