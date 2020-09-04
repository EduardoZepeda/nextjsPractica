import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
  const { query : { id } } = useRouter()
  return(
    <div>Esta es la pagina Product {id}</div>
  )
}

export default ProductItem
