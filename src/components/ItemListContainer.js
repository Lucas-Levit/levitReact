import React, { useEffect, useState } from 'react'
import Item from "./Item"


export const ItemListContainer = ({ greeting }) => {
    const [producto, setProducto] = useState([])
    const obtenerInfo = async () => {
        const respuesta = await fetch("https://fakestoreapi.com/products")
        const productos = await respuesta.json()
        setProducto(productos);
        console.log(productos);
    }


    useEffect(() => {
        obtenerInfo()
    }, [])

    return (
        <div>
            {
                producto.map((prod, index) => {
                    return (<Item prod={prod} index={index} />
                    )
                })
            }
        </div>
    )
}


export default ItemListContainer





