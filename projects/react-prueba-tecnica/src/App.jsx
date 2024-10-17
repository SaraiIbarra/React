import { useEffect, useState } from "react";
import "./App.css"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true'
const CAT_PREFIX_IMAGE_URL = `https://cataas.com`

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, SetImageUrl] = useState()

    //para recuperar la cita al cargar la pagina
    useEffect(() => {
        //peticiones de datos con fetch
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json()) //respuesta 
        .then(data => {
            const {fact} = data
            setFact(fact)            
        })
    }, [])

     
    //para recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(() => {
        if(!fact) return
        //split separar cadena de texto
        //slice obtener las tres primeras palabras
        //join unir las palabras en una cadena de texto
        //const firstWord = fact.split(' ').slice(0, 3).join(' ')
        const threeFirstWords = fact.split(' ', 3).join(' ')
        console.log(threeFirstWords)

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
        .then(res => res.json()) //respuesta 
        .then(response => {
            const {url} = response
            SetImageUrl(url)
        })
    }, [fact])

    /*useEffect(() => {
        async function getRandomFact(){
            const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
            const json = await res.json()setFact(json.fact)
        }
        
        getRandomFact()
    }, [])*/

    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>} //renderizado condicional
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
        </main>        
    )
}