import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer () {
    //const {filters} = useFilters()
    //const {cart} = useCart()

    return (
        <footer className='footer'>
            {/*Ver los filtros
            {
                JSON.stringify(filters, null, 2)
            }
            
            Ver los productos del carrito
            {
                JSON.stringify(cart, null, 2)
            } 
            */}
            <h4>Prueba técnica de React</h4>
            <span>Sarai Ibarra</span>
            <h5>Shopping Cart con useContext & useReducer</h5>            
        </footer>
    )
}