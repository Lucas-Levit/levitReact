import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const ItemListContainer = ({ greeting }) => {
    const [producto,setProducto] = useState ([])
    const obtenerInfo = async ()=> { 
    const respuesta = await fetch ("https://fakestoreapi.com/products")
    const productos = await respuesta.json()
    setProducto (productos);
    console.log(productos);
}


    useEffect (()=>{ 
        obtenerInfo()
    },[])

    return ( 
    <div>
    {
        producto.map ((prod, index)=>{
            return (<div key={index} className = "catalogo">
                <p>{prod.title}</p>
                <p className='imagen'><img src={prod.image} alt="articulos" /></p>
                <p>{prod.price}</p>
                <p>{prod.description}</p>
                <Link to={`item/${prod.id}`}> Ir al detalle </Link>
                </div>
            )
        } ) 
    }
    </div>
    )
}


export default ItemListContainer





