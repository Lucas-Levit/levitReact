import { React, useState } from 'react'
import cart from "../assets/img/cart.svg"
import { useCartContext } from "../context/cartcontext";

export const CartWidget = () => {
    const { carrito, totalCantidad } = useCartContext()

    return (
        <>
            {carrito.length ?
                <div>
                    <img className="logo" src={cart} alt="carrito"></img>
                    <div className='contadorCarro'> {totalCantidad()} </div>
                </div>
                :
                <div>
                    <img className="logo" src={cart} alt="carrito"></img>
                </div>
            }
        </>

    )


}
export default CartWidget
