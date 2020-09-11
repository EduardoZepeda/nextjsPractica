import React, { useState, useContext, useEffect } from 'react'
import { useFavoriteMutations, useFavorites } from '@store/Favorites'

type AddToFavoritesProps = {
  country: TCountry
}

let req;

const addOrRemoveFromFavoritesRequest = () =>
  new Promise((resolve, reject) => {
    req = window.setTimeout(resolve, 400)
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
          console.log("error")
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
    <button onClick= { countryInFavorites? handleRemove: handleSubmit } className = { "inline-flex bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded " + (loading ? "cursor-not-allowed" : "") } >
      <object width="25px" height = "25px" type = "image/svg+xml" data = "/icons/estrella.svg" > </object><span>{countryInFavorites? "Remove from": "Add to"} favorites</span > </button>
        </div>)
}

export default AddToFavorites
