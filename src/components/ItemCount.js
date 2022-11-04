import React, { useState, useEffect } from 'react'
import { useCartContext } from "../context/cartcontext";


export const ItemCount = ({ producto }) => {
    const { agregarAlCarrito, carrito } = useCartContext()
    useEffect(() => console.log(carrito), [carrito])
    const [counter, setCounter] = useState(1)
    const add = () => { setCounter(counter + 1) }
    const subtract = () => { setCounter(counter - 1) }
    console.log({ agregarAlCarrito });
    const comprar = () => { }
    return (
        <div>
            <button onClick={add} className="btn btn-outline-primary">+</button>
            <div>{counter}</div>
            <button onClick={subtract} className="btn btn-outline-primary">-</button>
            <button onClick={() => agregarAlCarrito(producto, counter)} className="btn btn-outline-primary">Agregar al carrito</button>
            <button className="btn btn-outline-primary">Comprar</button>
            
        </div>
    )
}
