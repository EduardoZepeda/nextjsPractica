import React, {useEffect} from 'react'
import ProportionChart from '@components/ProportionChart/ProportionChart'
import WorldMarketPercentageChart from '@components/WorldMarketPercentageChart/WorldMarketPercentageChart'
import AddToFavorites from '@components/AddToFavorites/AddToFavorites'

type CountryDataCardProps = {
  country: TCountry
}

const CountryDataCard = ({country}: CountryDataCardProps) => {
  const months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const {
    name,
    id,
    worldMarketPercentage,
    proportion: {
      arabica,
      robusta
    },
    harvesting: {
      startMonth,
      endMonth
    },
    types,
    processes,
    worldProducerPlace
  } = country

  return (<div>
    <div className="text-center pb-8">
      <h2 className="text-gray-800 text-2xl py-4">Coffee from {name}</h2>
      <AddToFavorites country={country}/>
    </div>
    <div className="flex flex-row flex-wrap justify-center gap-12">
      <div className="countryWorldMarketPercentage">
        <h2 className="text-xl text-center text-gray-800">Proportion</h2>
        <ProportionChart arabica={arabica} robusta={robusta}/>
        <p className="text-center text-gray-700">Arabica: {arabica}% Robusta: {robusta}%</p>
      </div>
      <div className="countryProportion">
        <h2 className="text-xl text-center text-gray-800">Percentage</h2>
        <WorldMarketPercentageChart worldMarketPercentage={worldMarketPercentage} name={name}/>
        <p className="text-center text-gray-700">{name}: {worldMarketPercentage}%</p>
      </div>
      <div className="countryHarvesting">
        <h2 className="text-xl text-center text-gray-800">Harvesting</h2>
        <div className="flex flex-row">
        <div className="mx-2 border-solid border border-t-8 border-red-300 w-20 h-20">
          <small className="text-gray-500">From</small>
          <p className="text-xl text-gray-600">{months[startMonth].substring(0, 3)}</p>
        </div>
        <div className="mx-2 border-solid border border-t-8 border-red-300 w-20 h-20">
          <small className="text-gray-500">To</small>
          <p className="text-xl text-gray-600">{months[endMonth].substring(0, 3)}</p>
        </div>
        </div>
      </div>
      <div className="countryTypes">
        <h2 className="text-xl text-center text-gray-800">Types</h2>
        <div className="text-center text-gray-700">{types.map((type:string, index:number)=><p key={index}>{type}</p>)}</div>
      </div>
      <div className="countryProcesses">
        <h2 className="text-xl text-center text-gray-800">Processes</h2>
        <p className="text-center text-gray-700">{processes.join(", ")}</p>
      </div>
      <div className="countryWorldProducerPlace">
        <h2 className="text-xl text-center text-gray-800">Producer place</h2>
        <p className="text-center text-2xl text-gray-700">{worldProducerPlace}°</p>
      </div>
    </div>
  </div>)
}

export default CountryDataCard
