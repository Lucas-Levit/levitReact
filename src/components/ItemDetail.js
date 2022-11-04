import React from 'react'
import { ItemCount } from './ItemCount'


export const ItemDetail = ({ producto }) => {
    return (
        <div className='borde'>
            <h2 className='titulo'>{producto.name}</h2>
            <img src={producto.image} alt="articulo" className='imgSelect' />
            <p className='precio'>{producto.price}</p>
            <p className='descripcion'>{producto.descripcion}</p>
            <ItemCount producto = {producto} />
        </div>
    )
}
