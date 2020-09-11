import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import CountryDataCard from '@components/CountryDataCard/CountryDataCard'

const Country = () => {
  const { query : { id } } = useRouter()
  const [country, setCountry] = useState<TCountry | null>(null)
  useEffect(() => {
    if(id){
      window.fetch(`/api/coffee/${id}`).then(response => response.json()).then(data => setCountry(data))
    }
  }, [id])
  return(
    <div className="main__container p-8">
      <Head>
        <title>Info</title>
      </Head>
      {country?<CountryDataCard country={country}/>:null}
    </div>
  )
}

export default Country
