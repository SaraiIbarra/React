import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons.jsx'

export function Cart () {
    const cartCheckboxId = useId()
    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />
            <aside className='cart'>
                <ul>
                    <li>
                        <img 
                            src='https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png'
                            alt='fragances'
                        />
                        <div>
                            <strong>Fragancia</strong> - $1499
                        </div>

                        <footer>
                            <small>
                                Qty: 1
                            </small>
                            <button>+</button>
                        </footer>
                    </li>                    
                </ul>

                <button>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}