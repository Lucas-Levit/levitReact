import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from "../context/cartcontext";
import Form from './Form';


export const Carrito = () => {
    const { carrito, vaciarCarrito, totalFinal, removeProducto  } = useCartContext()
    return (

        <div className={'carrito'}>{carrito.map((producto, index) => 
            <div className='contenedorCarrito'> 
            <h1 key={`${index}${producto.price}`}className={"titulo"}>
            {producto.name} , cantidad de productos a comprar: {producto.cantidad} , ${producto.price}, Total por producto: ${producto.total}</h1> 
            <button onClick={()=>removeProducto(producto.id)} className="border-0 p-1 bg-danger mt-1 mx-1 "> X </button>
            </div>
            )}

            <p className={'total'}>Total de la compra: ${totalFinal()}</p>

            <button className='btn btn-outline-primary' onClick={vaciarCarrito}>Vaciar carrito </button>
            
            <Link to={"/"}><button className='btn btn-outline-primary'>Seguir comprando </button></Link>

            <Form/>
            {/* <Link to={"/FinalizarCompra"}><button className='btn btn-outline-primary'>Finalizar compra </button></Link> */}
        </div>

    )
}
export default Carrito