export { Router } from './components/Router'
export { Link } from './components/Link'
export { Route } from './components/Route'


export function useQueryParams ({req} = {}) {
    const isServer = typeof window === 'undefined'
    if(isServer) {
        const {query} = req
        return query
    }

    const search = window.location.search
    const params = new URLSearchParams(search)
    return Object.fromEntries(params.entries())
    //transform params to object
    /* const query = {}
    for(const [key, value] of params) {
        query[key] = value
    }

    return params */
}