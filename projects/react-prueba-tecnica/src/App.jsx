import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App() {
    const [fact, setFact] = useState()

    useEffect(() => {
        //peticiones de datos con fetch
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json()) //respuesta 
        .then(data => setFact(data.fact))
    }, [])

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
        </main>        
    )
}