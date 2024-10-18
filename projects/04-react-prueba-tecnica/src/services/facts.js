const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json() //promise
        const {fact} = data
        return fact            
}

/*Las promesas se pueden concatenar
fetch(CAT_ENDPOINT_RANDOM_FACT) //-> devuelve una Promise
.then(res => res.json()) // -> promise 
.then(data => {
    const {fact} = data
    return fact            
})*/

