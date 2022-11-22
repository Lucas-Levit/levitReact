import { React, useState } from 'react'
import cart from "../assets/img/cart.svg"
import { useCartContext } from "../context/cartcontext";

export const CartWidget = () => {
    const { carrito } = useCartContext()
    let arr = []
    const sumarCantidad = () => {
        carrito.forEach(producto => arr.push(producto.cantidad))
        return arr.reduce((a, b) => a + b, 0)

    }
    return (
        <div>
            <img className="logo" src={cart} alt="carrito"></img>
            <p className='contadorCarro'>{sumarCantidad()}</p>

        </div>
    )


}
export default CartWidget
