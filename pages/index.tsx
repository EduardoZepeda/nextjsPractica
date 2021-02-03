import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import CountryCard from '@components/CountryCard/CountryCard'
import Head from 'next/head'
import Loading from '@components/Loading/Loading'

type CountryCardProps = {
  id: string,
  name: string,
  image: string
}

export const getServerSideProps = async () => {
    const response = await fetch('https://nextjs-practice-mauve.vercel.app/api/coffee')
    const {data: countryList}: TAPICoffeeResponse = await response.json()
  return {
        props: {
            countryList,
        }
    }
}

const Home = ({countryList}: {countryList: TCountry[]}) => {

  return (<div className="main flex flex-row flex-wrap justify-center content-start">
    <Head>
        <title>{`Coffee around the world`}</title>
        <meta property="og:title" content="Coffee around the world" key="Home" />
        <meta property="og:description" content="We provide you good coffee from around the world" key="Home" />
        <meta name="description" content="We provide you good coffee from around the world" />
    </Head>

    <div className="text-2xl text-center w-full text-gray-700 py-8 font-bold"><h2>Know more about our coffee providers</h2></div>
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
