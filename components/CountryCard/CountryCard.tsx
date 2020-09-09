import React from 'react'
import Link from 'next/link'

const handleOnMouseOver = (event)=> {
  event.target.classList.add("opacity-75")
}

const handleOnMouseLeave = (event)=> {
  event.target.classList.remove("opacity-75")
}

const CountryCard = ({name, image}) => {
  return(
    <>
    <div className="main__country bg-white mx-2 my-2" >
      <div className="h-48 w-48 text-white shadow-lg rounded-full flex flex-row justify-center font-bold items-center bg-cover bg-center transition duration-700 ease-in-out"
        style={{ backgroundImage: `url(${image})` }}
        onMouseOver={handleOnMouseOver}
        onMouseLeave={handleOnMouseLeave}>
        <Link href={"country/" + name}>
          <a className="text-2xl text-center">{name}</a>
        </Link>
      </div>
    </div>
  </>
  )
}

export default CountryCard
