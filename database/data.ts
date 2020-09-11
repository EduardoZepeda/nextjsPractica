const data: Record<TCountryId, TCountry> = {
  'Thailand': {
    name: 'Thailand',
    id: 'THA',
    worldMarketPercentage: 0.5,
    image:"/imgs/thailand-humphrey-muleva.jpg",
    proportion: {
      robusta: 98,
      arabica: 2
    },
    types: ["Caturra", "Catuhai", "Catimor", "Geisha"],
    harvesting: {
      startMonth: 10,
      endMonth: 3
    },
    processes: ["natural", "washed"],
    worldProducerPlace: 21,
  },
  'Peru': {
    name: 'Peru',
    id: 'PER',
    worldMarketPercentage: 3,
    image:"/imgs/peru-viajero-cool.jpg",
    proportion: {
      robusta: 0,
      arabica: 100
    },
    types: ["Caturra", "Typica", "Bourbon", "Caturra", "Pache", "Catimor"],
    harvesting: {
      startMonth: 5,
      endMonth: 9
    },
    processes: ["natural"],
    worldProducerPlace: 9,
  },
  'Mexico': {
    name: 'Mexico',
    id: 'MEX',
    worldMarketPercentage: 3,
    image:"/imgs/mexico-aura-lppez.jpg",
    proportion: {
      robusta: 10,
      arabica: 90
    },
    types: ["Bourbon", "Typica", "Mundo Novo", "Caturra", "Maragogype", "Catimor", "Catuai", "Garnica"],
    harvesting: {
      startMonth: 11,
      endMonth: 3
    },
    processes: ["natural", "washed"],
    worldProducerPlace: 8,
  },
  'Jamaica': {
    name: 'Jamaica',
    id: 'JAM',
    worldMarketPercentage: 0.01,
    image:"/imgs/jamaica-jose-espinal.jpg",
    proportion: {
      robusta: 0,
      arabica: 100
    },
    types: ["Typica", "Blue Mountain"],
    harvesting: {
      startMonth: 9,
      endMonth: 3
    },
    processes: ["washed"],
    worldProducerPlace: 44,
  },
  'Java': {
    name: 'Java',
    id: 'IDN',
    worldMarketPercentage: 7,
    image:"/imgs/java-pixabay.jpg",
    proportion: {
      robusta: 90,
      arabica: 10
    },
    types: ["Andung", "Sari", "S-lines", "Kartika", "Ateng", "Sigararuntang", "Jember", "Typica"],
    harvesting: {
      startMonth: 6,
      endMonth: 10
    },
    processes: ["washed"],
    worldProducerPlace: 3,
  },
  'China': {
    name: 'China',
    id: 'CHN',
    worldMarketPercentage: 0.5,
    image:"/imgs/china-sam-lim.jpg",
    proportion: {
      robusta: 5,
      arabica: 95
    },
    types: ["Catimor", "Typica", "Bourbon"],
    harvesting: {
      startMonth: 5,
      endMonth: 9
    },
    processes: ["natural", "washed"],
    worldProducerPlace: 20,
  },
  'Burundi': {
    name: 'Burundi',
    id: 'BDI',
    worldMarketPercentage: 0.5,
    image:"/imgs/leila-burundi.jpg",
    proportion: {
      robusta: 4,
      arabica: 96
    },
    types: ["Mibirizi", "Jackson", "Bourbon"],
    harvesting: {
      startMonth: 2,
      endMonth: 5
    },
    processes: ["washed"],
    worldProducerPlace: 31,
  },
  'India': {
    name: 'India',
    id: 'IND',
    worldMarketPercentage: 3.5,
    image:"/imgs/volker-glatsch-india.jpg",
    proportion: {
      robusta: 60,
      arabica: 40
    },
    types: ["Catimor", "Kent", "Bourbon", "S 795", "Selections 4", "5B", "9", "10", "San Ramon", "Caturra", "Devamachy"],
    harvesting: {
      startMonth: 1,
      endMonth: 3
    },
    processes: ["washed"],
    worldProducerPlace: 31,
  },
  'Brazil': {
    name: 'Brazil',
    id: 'BRA',
    worldMarketPercentage: 35,
    image:"/imgs/pexels-brazil.jpg",
    proportion: {
      robusta: 20,
      arabica: 80
    },
    types: ["Catuai", "Acaia", "Bourbon", "Mundo Novo", "Icatu"],
    harvesting: {
      startMonth: 5,
      endMonth: 9
    },
    processes: ["natural", "washed", "semiwashed", "pulped"],
    worldProducerPlace: 1,
  },
  'Honduras': {
    name: 'Honduras',
    id: 'HND',
    worldMarketPercentage: 3,
    image:"/imgs/honduras-maria-michelle.jpg",
    proportion: {
      robusta: 0,
      arabica: 100
    },
    types: ["Catuai", "Caturra", "Pacas", "Typica"],
    harvesting: {
      startMonth: 11,
      endMonth: 4
    },
    processes: ["washed"],
    worldProducerPlace: 7,
  },
}

// Data taken from Anette Moldvaer. (2015). Cafemanía. México: Penguin House.

export default data
