import React, {useState, useEffect} from 'react'
import Navbar from '@components/Navbar/Navbar'
import CountryCard from '@components/CountryCard/CountryCard'
import Link from 'next/link'

const Home = () => {
  const [countryList, setCountryList] = useState([])
  useEffect(() => {
    window.fetch('api/coffee').then(response => response.json()).then(({data, length}) => {
      setCountryList(data)
    })
  }, [])
  return (<div className="main">
    <h2 className="text-xl text-center text-gray-700 py-8 font-bold">Know more about the producers</h2>
    <div className="main__container flex flex-row flex-wrap justify-center items-center">

      {
        countryList.map(({id, name, image}) => {
          return <CountryCard key={id} name={name} image={image}/>
        })
      }
    </div>
  </div>)
}

export default Home
