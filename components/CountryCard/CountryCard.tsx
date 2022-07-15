import React, { MouseEvent } from 'react'
import Link from 'next/link'

type CountryCardProps = {
  name: string,
  image: string
}

const handleOnMouseOver = (event: MouseEvent) => {
  const element: HTMLElement = event.target as HTMLElement
  element.classList.add("opacity-75")
}

const handleOnMouseLeave = (event: MouseEvent) => {
  const element: HTMLElement = event.target as HTMLElement
  element.classList.remove("opacity-75")
}

const handleOnMouseOverChildren = (event: MouseEvent) => {
  event.stopPropagation()
}

const CountryCard = ({ name, image }: CountryCardProps) => {
  return (<div className="main__country bg-white mx-2 my-2">
    <Link href={"/country/" + name}>
      <a>
        <div className="h-48 w-48 shadow-lg w-80 rounded-md flex flex-row justify-center items-center bg-cover bg-center transition duration-700 ease-in-out" style={{
          backgroundImage: `url(${image})`
        }} onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave}>
          <p onMouseOver={handleOnMouseOverChildren} className="uppercase text-white text-xl text-center font-bold text-shadow-md">{name}</p>
        </div>
      </a>
    </Link>
  </div>)
}

export default CountryCard
