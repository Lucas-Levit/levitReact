import React from 'react';
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';


export const ItemDetailContainer = () => {
  const params = useParams()
  const [producto,setProducto] = useState ([])
  const obtenerInfo = async ()=> { 
  const respuesta = await fetch ("https://fakestoreapi.com/products")
  const productos = await respuesta.json()
  setProducto (productos);
  console.log(productos);
}

  useEffect (()=>{ 
      obtenerInfo()
  },[])

  console.log(params);
  return (
      <>
          {producto.map((prod,i)=>{
            return(
                <>
                {prod.id==="params.id" &&
                  <>
                    <div>
                      <h2>{prod.title}</h2>
                      <img src={prod.image} alt="articulo"/>
                      <p>{prod.price}</p>
                      <p>{prod.description}</p>
                    </div>
                  </>
                }
                </>
            )
          }
          )
          }
      </>
  )
}
