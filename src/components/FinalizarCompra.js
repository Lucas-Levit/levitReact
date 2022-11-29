import React from 'react'
import { useCartContext } from "../context/cartcontext";

export const FinalizarCompra = () => {
    const { carrito, totalFinal } = useCartContext()

    return (
        <div className={'finalizarCompra'}>
            El total de tu compra es de ${carrito.reduce((acc, producto) => acc + producto.total, 0)}

        </div>
    )
}


export default FinalizarCompra