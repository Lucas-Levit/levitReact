import { React, Fragment } from 'react';
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore';


export const ItemDetailContainer = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)
  const obtenerInfo = async () => {
    const db = getFirestore()
    const querycollection = collection(db, "items")
    const referenciaDoc = doc(querycollection, id)
    getDoc(referenciaDoc)
      .then((result) => {
        setProducto({
          id: result.id,
          ...result.data()
        })
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(!loading))


  }

  console.log(producto)
  useEffect(() => {
    obtenerInfo()
  }, [])

  return (
    <Fragment>
      {

        loading ? <div class="spinner" >
          <div class="dot1"></div>
          <div class="dot2"></div>
          <div class="dot3"></div>
        </div > : null
      }
      <ItemDetail producto={producto} />
    </Fragment>
  )
}

export default ItemDetailContainer


