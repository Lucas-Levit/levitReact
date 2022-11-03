import React from 'react'

export const ItemDetail = ({ producto }) => {
    return (
        <div className='borde'>
            <h2 className='titulo'>{producto.name}</h2>
            <img src={producto.image} alt="articulo" className='imgSelect' />
            <p className='precio'>{producto.price}</p>
            <p className='descripcion'>{producto.descripcion}</p>
        </div>
    )
}
export default ItemDetail