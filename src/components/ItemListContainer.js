import React, { useEffect, useState } from 'react'
import Item from "./Item"
import { collection, getDocs, getFirestore } from "firebase/firestore";


export const ItemListContainer = ({ greeting }) => {
    const [producto, setProducto] = useState([])

    // const obtenerInfo = async () => {
    //     const respuesta = await fetch("https://fakestoreapi.com/products")
    //     const productos = await respuesta.json()
    //     setProducto(productos);
    //     console.log(productos);
    // }

    const obtenerInfo = async () => {
    const db = getFirestore ()
    const querycollection = collection (db, "items")
    getDocs (querycollection)
        .then(res => res.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        .then (items => setProducto (items))
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





