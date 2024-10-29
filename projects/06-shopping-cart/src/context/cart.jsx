import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        //Checar si el producto ya esta en el carrito
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if(productInCartIndex >= 0) {
            //una forma de crear el carrito seria usando structuredClone
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            setCart(newCart)
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

    const cleanCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            cleanCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}