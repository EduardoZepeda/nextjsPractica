import React from 'react'
import { useRouter } from 'next/router'

const Country = () => {
  const { query : { id } } = useRouter()
  return(
    <div>This is the country page id: {id}</div>
  )
}

export default Country
