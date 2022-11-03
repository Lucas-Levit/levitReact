import React, { useState } from 'react'

export const ItemCount = () => {
    const  {setCounter, counter} = useState
    const add = () => { setCounter (setCounter+1) } 
    const subtract = () => { setCounter (setCounter-1) } 
    return (
    <div>
    <button onClick={add}>+</button>
    <div>{counter}</div>
    <button onClick={subtract}>-</button>
    <button>Agregar al carrito</button>
    </div>
)
}
