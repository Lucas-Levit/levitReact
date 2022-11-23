import React from 'react'
import { useCartContext } from "../context/cartcontext";

export const FinalizarCompra = () => {
    const { carrito } = useCartContext()

    return (
        <div>
            El total de tu compra es de ${carrito.reduce((acc, producto) => acc + producto.total, 0)}

        </div>
    )
}


export default FinalizarCompra