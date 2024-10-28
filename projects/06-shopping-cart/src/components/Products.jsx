import './Products.css'
import { AddToCartIcon } from './Icons.jsx'

export function Products ({ products}) {
    
    /* const {AddToCart, removeFromCart, cart} = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    } */
    return(
        <main className='products'>
            <ul>                
                {products.slice(0, 10).map(product => {
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title}/>
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon/>
                            </button>
                        </div>
                    </li>                                            
                })}
            </ul>
        </main>
    )
}