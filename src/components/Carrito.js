import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from "../context/cartcontext";



export const Carrito = () => {
    const { carrito, vaciarCarrito } = useCartContext()
    return (

        <div>{carrito.map(producto => <h1>{producto.name} , {producto.cantidad} , ${producto.price}</h1>)}
            <button className='btn btn-outline-primary' onClick={vaciarCarrito}>Vaciar carrito </button>
            <button className='btn btn-outline-primary'>Finalizar compra </button>
            <Link to={"/"}><button className='btn btn-outline-primary'>Seguir comprando </button></Link>
        </div>

    )
}
export default Carrito