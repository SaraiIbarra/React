import { useEffect, useState } from "react"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({fact}) {
    const [imageUrl, SetImageUrl] = useState()

    //para recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(() => {
        if(!fact) return
        //split separar cadena de texto
        //slice obtener las tres primeras palabras
        //join unir las palabras en una cadena de texto
        //const firstWord = fact.split(' ').slice(0, 3).join(' ')
        const threeFirstWords = fact.split(' ', 3).join(' ')        

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
        .then(res => res.json()) //respuesta 
        .then(response => {
            const {_id} = response
            const url = `/cat/${_id}/says/${threeFirstWords}`
            SetImageUrl(url)
        })
    }, [fact])

    //Guardar y recuperar la imagen
    return {imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
} //{ imageUrl: 'https://...'}