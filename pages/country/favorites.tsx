import React from 'react'
import Head from 'next/head'
import { useFavorites } from '@store/Favorites'
import CountryCard from '@components/CountryCard/CountryCard'
import Link from 'next/link'

type FavoriteCountryProps = {
  id: string,
  name: string,
  image: string
}

const Favorites = () => {
  const { count: favoritesCount, favorites: favoriteCountries } = useFavorites()


  return (<div className="main">
    <Head>
        <title>My favorite coffee providers</title>
        <meta property="og:title" content="Favorite coffee providers" key="Favorites" />
        <meta property="og:description" content="Favorite coffee providers from around the world" key="Favorites" />
        <meta name="description" content="Favorite coffee providers from around the world" />
    </Head>
    <h2 className="text-2xl text-center text-gray-700 py-8 font-bold">My favorites</h2>
    <div className="main__container flex flex-row flex-wrap justify-center items-center mb-16">

      {favoritesCount > 0 ?
        favoriteCountries.map(({ id, name, image }: FavoriteCountryProps) => {
          return <CountryCard key={id} name={name} image={image} />
        }) : <div className="text-center"><div className="text-gray-500 text-xl">You have no favorite countries</div><Link href="/"><a><button className="mt-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Return</button></a></Link></div>
      }
    </div>
  </div>)
}


export default Favorites
