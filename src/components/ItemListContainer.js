import React, { useEffect, useState } from 'react'
import Item from "./Item"
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useCartContext } from '../context/cartcontext';


export const ItemListContainer = ({ greeting }) => {
    const { carrito } = useCartContext()
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true);
    const obtenerInfo = async () => {
        const db = getFirestore()
        const querycollection = collection(db, "items")
        getDocs(querycollection)
            .then(res => res.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            .then(items => setProducto(items))
            .catch(err => console.log(err))
            .finally(() => setLoading(!loading))
    }
    useEffect(() => {
        obtenerInfo()

    }, [])
    console.log(loading)
    return (
        <div>
            {
                loading ? <div class="spinner">
                    <div class="dot1"></div>
                    <div class="dot2"></div>
                    <div class="dot3"></div>
                </div> : null
            }

            {
                producto.map((prod, index) => {
                    return (<Item prod={prod} key={`${index}${prod}`} />
                    )
                })
            }
        </div>
    )
}


export default ItemListContainer





