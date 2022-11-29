import React, { useState, useEffect } from 'react'
import { useCartContext } from "../context/cartcontext";


export const ItemCount = ({ producto, onAdd }) => {
    const { agregarAlCarrito, carrito } = useCartContext()
    const [counter, setCounter] = useState(1)
    const add = () => { setCounter(counter + 1) }
    const subtract = () => { setCounter(counter - 1) }
    return (
        <div className='contador'>
            <button onClick={subtract} className="btn btn-outline-primary">-</button>
            <div className='number'>{counter}</div>
            <button onClick={add} className="btn btn-outline-primary">+</button>
            <button onClick={() => agregarAlCarrito(producto, counter)} className="btn btn-outline-primary">Agregar al carrito</button>
        </div>

    )
}

