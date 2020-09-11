import React from 'react'
import Navbar from '@components/Navbar/Navbar'
import Head from 'next/head'


const About = () => {
  return(
    <div className="about flex flex-row text-gray-700 justify-center">
    <Head>
      <title>About us</title>
    </Head>
      <div className="px-4 sm:w-1/2 md:1/4">
        <h2 className="text-xl py-4 text-center">About us</h2>
        <p>We are passionated about coffee.  We travel the world looking for the best coffee for you, with all our love and care, so that every drink from your cup becomes an experience to be remembered.  </p>
      </div>
    </div>
  )
}

export default About
