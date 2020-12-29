import React from 'react'
import Head from 'next/head'


const About = () => {
  return (
    <div className="about flex mb-16 flex-row text-gray-700 justify-center">
      <Head>
        <title>About us</title>
      </Head>
      <div className="px-4 sm:w-1/2 md:1/4">
        <h2 className="text-2xl py-4 text-center">About us</h2>
        <p className="text-xl">We are passionated about coffee.  We travel around the world looking for the best coffee for you, with all our love and care, so that every drink from your cup becomes an experience to be remembered. We bring a new variety of speciality coffee each month. Be sure to follow us on social media, we share recipes and we will let you know when we receive new coffee. </p>
      </div>
    </div>
  )
}

export default About
