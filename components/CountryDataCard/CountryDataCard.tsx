import React from 'react'
import Link from 'next/link'

const CountryDataCard = (props) => {
  const {name, id, worldMarketPercentage, proportion:{arabica, robusta}, harvesting:{startMonth, endMonth}, types, processes, worldProducerPlace} = props.country

  return(
    <div className="bg-gray-300">
      <div className="countryName">
        <p>Name: {name}</p>
      </div>
      <div className="countryWorldMarketPercentage">
        <p>world market percentage: {worldMarketPercentage}%</p>
      </div>
      <div className="countryProportion">
        <p>proportion: Arabica: {arabica}% Robusta: {robusta}%</p>
      </div>
      <div className="countryHarvesting">

      </div>
      <div className="countryTypes">

      </div>
      <div className="countryProcesses">

      </div>
      <div className="countryWorldProducerPlace">

      </div>
    </div>
  )
}

export default CountryDataCard
