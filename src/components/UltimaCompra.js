import React from 'react'
import { useCartContext } from '../context/cartcontext'

const UltimaCompra = () => {

    const { id } = useCartContext()
    const order = [...id].pop()
    console.log(order)
    return (
        <>
            {order !== undefined &&
                <div className='compra'>Ultima Compra: {order.id}</div>
            }
        </>
    )
}

export default UltimaCompra