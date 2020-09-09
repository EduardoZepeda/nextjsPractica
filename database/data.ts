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
    types: ["Catimor", "Typica", "Bourbun"],
    harvesting: {
      startMonth: 5,
      endMonth: 9
    },
    processes: ["natural", "washed"],
    worldProducerPlace: 20,
  },
}

// Data taken from Anette Moldvaer. (2015). Cafemanía. México: Penguin House.

export default data
