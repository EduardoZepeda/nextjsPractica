import React, { useState, useEffect } from 'react'
import CountryCard from '@components/CountryCard/CountryCard'
import Loading from '@components/Loading/Loading'

type CountryCardProps = {
  id: string,
  name: string,
  image: string
}


const CountryHorizontalBar = (): React.ReactElement => {
  const [countryList, setCountryList] = useState<TCountry[]>([])
  const [loadingCountryBar, setCountryBarLoading] = useState<Boolean>(false)
  const [countryBarError, setCountryBarError] = useState<String>("")

  useEffect(() => {
    setCountryBarLoading(true)
    window.fetch('/api/coffee').then(response => {
      return response.json()
    })
      .then(({ data }: TAPICoffeeResponse) => {
        setCountryBarLoading(false)
        setCountryBarError("")
        const shuffled = data.sort(() => 0.5 - Math.random())
        let selected = shuffled.slice(0, 4)
        setCountryList(selected)
      })
      .catch(error => {
        setCountryBarError(countryBarError);
        setCountryBarLoading(false)
      })
  }, [])

  return (<div className="mt-16 country-horizontal-bar">
    <div className="text-2xl text-center w-full text-gray-700 py-8 font-bold"><h2>More coffee providers</h2></div>
    <div className="flex flex-inline flex-wrap justify-center">
      {loadingCountryBar ? <Loading /> :
        countryList.map(({ id, name, image }: CountryCardProps) => {
          return <CountryCard key={id} name={name} image={image} />
        })
      }
      {countryBarError ? <div className="text-red-400 font-bold">{countryBarError}</div> : null}
    </div>
  </div>)
}

export default CountryHorizontalBar
