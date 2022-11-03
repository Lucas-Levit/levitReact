import React from 'react';
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore';


export const ItemDetailContainer = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState({})
  const obtenerInfo = async () => {
    const db = getFirestore()
    const querycollection = collection(db, "items")
    const referenciaDoc = doc(querycollection, id)
    getDoc(referenciaDoc)
    .then((result)=>{
      setProducto({
        id:result.id,
        ...result.data()
      })
    })

}

console.log(producto)
  useEffect(() => {
    obtenerInfo()
  }, [])

  return (<ItemDetail producto={producto} />
  )
}

export default ItemDetailContainer


