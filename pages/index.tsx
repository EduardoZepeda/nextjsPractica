import React from 'react'
import fetch from 'isomorphic-unfetch'
import CountryCard from '@components/CountryCard/CountryCard'
import Head from 'next/head'
import { getSession } from "next-auth/react"
import { GetServerSidePropsContext } from 'next'

type CountryCardProps = {
  id: string,
  name: string,
  image: string
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const session = await getSession(context);
  // TODO la API pide autenticacion, por eso retorna un valor inválido :/
  // habia un metodo para excluir rutas usando el middleware, REVISAR
  if (session === null) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false
      },
    }
  } else {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/coffee`)
    const { data: countryList }: TAPICoffeeResponse = await response.json()
    return {
      props: {
        countryList,
        session
      }
    }
  }
}

const Home = ({ countryList }: { countryList: TCountry[] }): React.ReactElement => {

  return (
    <div className="main p-8 flex flex-row flex-wrap justify-center content-start">
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
