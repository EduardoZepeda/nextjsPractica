import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return(
    <nav className="navbar flex flex-row justify-around items-center text-lg text-yellow-100 bg-green-400">
      <menu className="navbar__menu">
        <Link href="/"><a>Home </a></Link>
        <Link href="/about"><a>About</a></Link>
      </menu>
      <div className="navbar__cart flex flex-row justify-center">
        <object className="mr-2" width="25px" height="25px" type="image/svg+xml" data="/icons/estrella.svg"></object>
        <p>Favorites</p>
      </div>
    </nav>
  )
}

export default Navbar
