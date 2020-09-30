import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import CountryDataCard from '@components/CountryDataCard/CountryDataCard'
import Loading from '@components/Loading/Loading'

const Country = () => {
  const { query : { id } } = useRouter()
  const [country, setCountry] = useState<TCountry | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if(id){
      setLoading(true)
      window.fetch(`/api/coffee/${id}`).then(response => {
          return response.json()})
        .then(data => {
          setLoading(false)
          setError("")
          setCountry(data)})
        .catch(error=>{
          setLoading(false)
          setError(error)
        })
    }
  }, [id])
  if(loading){
    return <Loading/>
  }
  return(
    <div className="main__container p-8">
      <Head>
        <title>Info</title>
      </Head>
      {error?<div className="text-red-400 font-bold">{error}</div>:null}
      {country?<CountryDataCard country={country}/>:null}
    </div>
  )
}

export default Country
