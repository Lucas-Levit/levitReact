import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from "../context/cartcontext";


export const Carrito = () => {
    const { carrito, vaciarCarrito } = useCartContext()
    return (

        <div>{carrito.map((producto, index) => <h1 key={`${index}${producto.price}`}>{producto.name} , {producto.cantidad} , ${producto.price}, Total: ${producto.total}</h1>)}
            <button className='btn btn-outline-primary' onClick={vaciarCarrito}>Vaciar carrito </button>
            <Link to={"/FinalizarCompra"}><button className='btn btn-outline-primary'>Finalizar compra </button></Link>
            <Link to={"/"}><button className='btn btn-outline-primary'>Seguir comprando </button></Link>
        </div>

    )
}
export default Carrito