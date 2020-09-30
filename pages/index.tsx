import React, { useState, useEffect } from 'react'
import CountryCard from '@components/CountryCard/CountryCard'
import Head from 'next/head'
import Loading from '@components/Loading/Loading'

type CountryCardProps = {
  id: string,
  name: string,
  image: string
}


const Home = () => {
  const [countryList, setCountryList] = useState<TCountry[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    window.fetch('api/coffee').then(response => {
      setLoading(true)
      return response.json()})
      .then(({ data }: TAPICoffeeResponse) => {
      setLoading(false)
      setError("")
      setCountryList(data)
    }).catch(error=>{
      setError(error);
      setLoading(false)})
  }, [])
  return (<div className="main flex flex-row flex-wrap justify-center content-start">
    <Head>
      <title>Home</title>
    </Head>

    <div className="text-2xl text-center w-full text-gray-700 py-8 font-bold"><h2>Know more about our coffee providers</h2></div>
    <div className="main__container flex flex-row flex-wrap justify-center items-center md:w-2/3">


      {loading?<Loading/>:
        countryList.map(({ id, name, image }: CountryCardProps) => {
          return <CountryCard key={id} name={name} image={image} />
        })
      }
      {error?<div className="text-red-400 font-bold">{error}</div>:null}
    </div>
  </div>)
}

export default Home
