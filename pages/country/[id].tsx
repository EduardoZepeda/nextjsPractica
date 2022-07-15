import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import CountryDataCard from '@components/CountryDataCard/CountryDataCard'
import Loading from '@components/Loading/Loading'
import CountryHorizontalBar from '@components/CountryHorizontalBar/CountryHorizontalBar'

const Country = (): React.ReactElement => {
  const { query: { id } } = useRouter()
  const [country, setCountry] = useState<TCountry | null>(null)
  const [loading, setLoading] = useState<Boolean>(false)
  const [error, setError] = useState<String>("")

  useEffect(() => {
    if (id) {
      setLoading(true)
      window.fetch(`/api/coffee/${id}`).then(response => {
        return response.json()
      })
        .then(data => {
          setLoading(false)
          setError("")
          setCountry(data)
        })
        .catch(error => {
          setLoading(false)
          setError(error)
        })
    }
  }, [id])
  if (loading) {
    return <Loading />
  }
  return (
    <div className="main__container p-8">
      <Head>
        <title>{`Coffee from ${id}`}</title>
        <meta property="og:title" content={`Coffee from ${id}`} key={id as string} />
        <meta property="og:description" content={`Info and graphics about coffee production from ${id}`} key={id as string} />
        <meta name="description" content={`Info and graphics about coffee production from ${id}`} />
      </Head>
      {error ? <div className="text-red-400 font-bold">{error}</div> : null}
      {country ? <CountryDataCard country={country} /> : null}
      <CountryHorizontalBar />
    </div>
  )
}

export default Country
