import React from 'react';
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';


export const ItemDetailContainer = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState({})
  const obtenerInfo = async () => {
    const respuesta = await fetch(`https://fakestoreapi.com/products/${id}`)
    const productos = await respuesta.json()
    setProducto(productos);
    console.log(productos);
  }
  useEffect(() => {
    obtenerInfo()
  }, [])

  return (<ItemDetail producto={producto} />
  )
}

export default ItemDetailContainer

