import React from 'react'
import {
  useParams
} from "react-router-dom";

export const EditarProducto = () => {
  let { id } = useParams();
  return (
    <div>
        <h1>{id}</h1>
    </div>
  )
}
