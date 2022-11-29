import React, { useEffect, useState } from 'react'
import Item from "./Item"
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore'
import { useCartContext } from '../context/cartcontext';
import { useParams } from 'react-router-dom';


export const ItemListContainer = ({ greeting }) => {
    const { carrito } = useCartContext()
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true);
    const { idCategoria } = useParams()
    
    const obtenerInfo = async () => {
        const db = getFirestore()
        const queryCollector = collection(db, 'items')
        const queryFilter = idCategoria ? query(queryCollector, where('categoria', '==', idCategoria))
            : query(queryCollector)
        getDocs(queryFilter)
            .then(resp => setProducto(resp.docs.map(prod=>({id:prod.id, ...prod.data()}))))
            .catch(()=>console.error())
            .finally(()=> setLoading(false))
    }

    useEffect(()=> {
        obtenerInfo()
    },[idCategoria])


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






