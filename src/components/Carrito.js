import React from 'react'
import { useCartContext } from "../context/cartcontext";

export const Carrito = () => {
    const { carrito } = useCartContext()

    return (
        <div>{carrito.map(producto => <h1>{producto.name} , {producto.cantidad} </h1>)}</div>

    )
}
export default Carrito