const data: Record<TCountryId, TCountry> = {
  'Thailand': {
    id: 'THA',
    worldMarketPercentage: 0.5,
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
    id: 'PER',
    worldMarketPercentage: 3,
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
    id: 'MEX',
    worldMarketPercentage: 3,
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
    id: 'JAM',
    worldMarketPercentage: 0.01,
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
    id: 'IDN',
    worldMarketPercentage: 7,
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
    id: 'CHN',
    worldMarketPercentage: 0.5,
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
