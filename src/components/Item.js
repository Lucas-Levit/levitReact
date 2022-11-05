import React from 'react'
import { Link } from 'react-router-dom'



export const Item = ({ prod, index }) => {

    console.log(prod);
    return (
        <div key={index} className="catalogo">
            <p className='name'>{prod.name}</p>
            <p className='imagen'><img src={prod.image} alt="articulos" /></p>
            <p>${prod.price}</p>
            <p>{prod.descripcion}</p>
            <p>Hay {prod.stock} unidades disponibles</p>
            <Link to={`/item/${prod.id}`}> Ir al detalle </Link>
        </div>
    )
}

export default Item