import React, { Dispatch, useContext, useReducer } from 'react'

export type FavoriteCountryType = TCountry & { id: string }

export type FavoritesState = {
  [key: string]: FavoriteCountryType
}

export type FavoritesActions = {
  type: 'add' | 'remove'
  country: TCountry
}

const defaultState = {} as FavoritesState

const FavoritesContext = React.createContext(defaultState)
const FavoritesDispatchContext = React.createContext((() => {}) as Dispatch<FavoritesActions>)

const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(favoritesReducer, defaultState)

  return (
    <FavoritesContext.Provider value={state}>
      <FavoritesDispatchContext.Provider value={dispatch}>
        {children}
      </FavoritesDispatchContext.Provider>
    </FavoritesContext.Provider>
  )
}

function favoritesReducer(
  state: FavoritesState,
  { type, country }: FavoritesActions
) {
  const existingFavorite = state[country.id]

  switch (type) {
    case 'add': {
      if (existingFavorite != undefined) {
        return {
          ...state,
        }
      }

      return {
        ...state,
        [country.id]: {
          ...country,
        },
      }
    }

    case 'remove': {
      if (existingFavorite == undefined) {
        return state
      }

      const newFavorites = { ...state }
      delete newFavorites[country.id]
      return newFavorites
    }

    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

/**
 * https://kentcdodds.com/blog/how-to-use-react-context-effectively
 */
export const useFavorites = () => {
  const favoritesById = useContext(FavoritesContext)
  const favorites = Object.values(favoritesById)
  const count = favorites.length

  return {
    favorites,
    favoritesById,
    count,
  }
}
export const useFavoriteMutations = () => {
  const dispatch = useContext(FavoritesDispatchContext)

  const addToFavorites = (country: TCountry) =>
    dispatch({
      type: 'add',
      country: country,
    })

  const removeFromFavorites = (country: TCountry) =>
    dispatch({
      type: 'remove',
      country: country,
    })

  return {
    addToFavorites,
    removeFromFavorites,
  }
}

export default FavoritesProvider
