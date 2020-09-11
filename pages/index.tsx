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
  console.log(favoritesCount)
  console.log(favoritesCountriesById)

  useEffect(() => {
    window.fetch('api/coffee').then(response => response.json()).then(({ data }: TAPICoffeeResponse) => {
      setCountryList(data)
    })
  }, [])
  return (<div className="main">
    <Head>
      <title>Home</title>
    </Head>
    <h2 className="text-xl text-center text-gray-700 py-8 font-bold">Know more about the producers</h2>
    <div className="main__container flex flex-row flex-wrap justify-center items-center">

      {
        countryList.map(({ id, name, image }: CountryCardProps) => {
          return <CountryCard key={id} name={name} image={image} />
        })
      }
    </div>
  </div>)
}

export default Home
