import React from 'react'
import { useCartContext } from '../context/cartcontext'
import { ItemCount } from './ItemCount'



export const ItemDetail = ({ producto }) => {
    const {agregarAlCarrito} = useCartContext()


    const handleOnAdd = (cantidad) => {
        agregarAlCarrito({...producto, cantidad})
    }
     
    return (
        <div className='borde row'>
            <h2 className='titulo'>{producto.name}</h2>
            <img src={producto.image} alt="articulo" className='imgSelect img-thumbnail' />
            <p className='precio'>$ {producto.price}</p>
            <p className='descripcion'>{producto.descripcion}</p>
            <ItemCount producto={producto} onAdd={handleOnAdd} />
        </div>
    )
}
