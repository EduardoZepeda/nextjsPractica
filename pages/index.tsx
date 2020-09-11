import React, { useState, useEffect } from 'react'
import Navbar from '@components/Navbar/Navbar'
import CountryCard from '@components/CountryCard/CountryCard'
import Link from 'next/link'
import Head from 'next/head'
import { useFavorites } from '@store/Favorites'

type CountryCardProps = {
  id: string,
  name: string,
  image: string
}


const Home = () => {
  const [countryList, setCountryList] = useState<TCountry[]>([])
  const {count: favoritesCount, favorites: favoriteCountries, favoritesById: favoritesCountriesById } = useFavorites()

  useEffect(() => {
    window.fetch('api/coffee').then(response => response.json()).then(({ data }: TAPICoffeeResponse) => {
      setCountryList(data)
    })
  }, [])
  return (<div className="main flex flex-row flex-wrap justify-center content-start">
    <Head>
      <title>Home</title>
    </Head>
    <div className="text-2xl text-center w-full text-gray-700 py-8 font-bold"><h2>Know more about the coffee producers</h2></div>
    <div className="main__container flex flex-row flex-wrap justify-center items-center md:w-2/3">

      {
        countryList.map(({ id, name, image }: CountryCardProps) => {
          return <CountryCard key={id} name={name} image={image} />
        })
      }
    </div>
  </div>)
}

export default Home
