import { createContext, useReducer, useState } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart";

export const CartContext = createContext()

//const initialState = []

function useCartReducer () {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART'
    })

    return {state, addToCart, removeFromCart, clearCart}
}

//la dependencia de usar React Context es MINIMA
export function CartProvider ({ children }) {
    const {state, addToCart, removeFromCart, clearCart} = useCartReducer()

    //const [cart, setCart] = useState([])
    
    /* const addToCart = product => {
        //Checar si el producto ya esta en el carrito
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if(productInCartIndex >= 0) {
            //una forma de crear el carrito seria usando structuredClone
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        //si el producto no esta en el carrito
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    } 

    const removeFromCart = product => {
        //setCart(cart.filter(item => item.id !== product.id))
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    const cleanCart = () => {
        setCart([])
    }*/

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}