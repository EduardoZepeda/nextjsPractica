import React, {useState, useEffect} from 'react'
import Navbar from '@components/Navbar/Navbar'
import Link from 'next/link'

const Home = () => {
  const [countryList, setCountryList] = useState([])
  useEffect(() => {
    window.fetch('api/coffee').then(response => response.json()).then(({data, length}) => {
      setCountryList(data)
    })
  }, [])
  return (<div>
    {
      countryList.map(country => {
        return <div key={country.name}>
          <Link href={"country/" + country.name}>
            <a>{country.name}</a>
          </Link>
        </div>
      })
    }
  </div>)
}

export default Home
