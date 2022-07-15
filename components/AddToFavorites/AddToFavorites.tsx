import React, { useState } from 'react'
import { useFavoriteMutations, useFavorites } from '@store/Favorites'

type AddToFavoritesProps = {
  country: TCountry
}


const addOrRemoveFromFavoritesRequest = () =>
  new Promise((resolve) => {
    window.setTimeout(resolve, 400)
  })

const AddToFavorites = ({ country }: AddToFavoritesProps) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false)
  const { addToFavorites, removeFromFavorites } = useFavoriteMutations()
  const { favoritesById: favoritesCountriesById } = useFavorites()
  const countryInFavorites = favoritesCountriesById[country.id] != undefined
  // useEffect(() => {
  //     return function cleanup() {
  //       clearTimeout(req)
  //     }
  // })

  const toggleMessage = () => {
    setTimeout(() => {
      setVisible(false)
    }, 1000)
  }

  const handleSubmit = async () => {
    if (!error) {
      setLoading(true)
      addOrRemoveFromFavoritesRequest()
        .then(() => {
          addToFavorites(country)
          setLoading(false)
          setVisible(true)
          toggleMessage()
        })
        .catch((err: Error) => {
          setError(`Error: ${err}` || 'There was an error hang in there')
          setLoading(false)
        })
    }
  }

  const handleRemove = async () => {
    if (!error) {
      setLoading(true)
      addOrRemoveFromFavoritesRequest()
        .then(() => {
          removeFromFavorites(country)
          setLoading(false)
          setVisible(true)
          toggleMessage()
        })
        .catch((err: Error) => {
          setError(`Error: ${err}` || 'There was an error hang in there')
          setLoading(false)
        })
    }
  }

  return (<div>
    <button onClick={countryInFavorites ? handleRemove : handleSubmit} className={"countryCard__favoriteButton inline-flex bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 my-4 border-b-4 border-blue-700 hover:border-blue-500 rounded " + (loading ? "cursor-not-allowed" : "")} >
      <img width="25px" height="25px" src="/icons/estrella.svg" /> <span>{countryInFavorites ? "Remove from" : "Add to"} favorites</span > </button>
    <p className={"text-green-600 font-bold text-white absolute left-0 right-0 " + (visible ? "" : "hidden")}>{countryInFavorites ? "✓ Added to" : "✓ Removed from"} favorites!</p>
    <p className={"text-red-400 absolute left-0 right-0 " + (error ? "" : "hidden")}>{error}</p>
  </div>)
}

export default AddToFavorites
