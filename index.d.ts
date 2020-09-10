type Url = string
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type TCountryId = string

type TCountry = {
  name: string
  id: string
  image: string
  worldMarketPercentage: number
  proportion: TProportion
  types: array
  harvesting: THarvesting
  processes: array
  worldProducerPlace: number
}

type THarvesting = {
  startMonth: number
  endMonth: number
}

type TProportion = {
  robusta: number
  arabica: number
}

type TAPIDetailCoffeeResponse = TCountry

type TAPICoffeeResponse = {
  length: number
  data: TCountry[]
  error?: string
}
