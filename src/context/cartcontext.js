import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext("")
export const useCartContext = () => useContext(CartContext)


const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    const [id, setId] = useState([])

    const agregarAlCarrito = (newProduct, cantidad) => {
        
        const producto = carrito.find(producto => producto.id === newProduct.id)

        if (producto) {
            producto.cantidad += cantidad
            producto.total = producto.cantidad * producto.price
            setCarrito([...carrito])
        } else {
            setCarrito([...carrito, { ...newProduct, cantidad, total: newProduct.price * cantidad }])
        }
    }

    const totalCantidad = () => {
        return(carrito.reduce((acum, prod) => acum += prod.cantidad , 0))
    }

    const vaciarCarrito = () => setCarrito([])

    const removeProducto = (id) => setCarrito(carrito.filter(producto => producto.id !== id))

    const totalFinal = () => {
        return (carrito.reduce((acc, producto) => acc + producto.total, 0))
    }

    

    return (
        <CartContext.Provider 
            value= { { 
                carrito, 
                agregarAlCarrito, 
                vaciarCarrito, 
                removeProducto,
                totalCantidad,
                totalFinal,
                id, 
                setId
            } } >
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider