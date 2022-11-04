import React, { useEffect, useState } from 'react'
import Item from "./Item"
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useCartContext } from '../context/cartcontext';


export const ItemListContainer = ({ greeting }) => {
    const {carrito} = useCartContext()
    const [producto, setProducto] = useState([])
    console.log({carrito})
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





