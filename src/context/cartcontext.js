import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext("")
export const useCartContext = () => useContext(CartContext)


const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (newProduct, cantidad = 1) => {
        const producto = carrito.find(producto => producto.id === newProduct.id)

        if (producto) {
            producto.cantidad += cantidad
            producto.total = producto.cantidad * producto.price
        } else {
            setCarrito([...carrito, { ...newProduct, cantidad, total: newProduct.price * cantidad }])
        }
    }
    const vaciarCarrito = () => setCarrito([])
    const removeProducto = (id) => setCarrito(carrito.filter(producto => producto.id !== id))
    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito, removeProducto }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider