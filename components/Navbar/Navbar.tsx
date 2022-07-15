import React from 'react'
import Link from 'next/link'
import { useFavorites } from '@store/Favorites'


const Navbar = () => {
   const { count: favoritesCount } = useFavorites()

  return(
    <nav className="navbar h-16 flex flex-row justify-around items-center text-lg text-white bg-green-400">
      <menu className="navbar__menu inline-flex">
        <div className="mx-2"><Link href="/"><a>Home </a></Link></div>
        <div className="mx-2"><Link href="/about"><a>About</a></Link></div>
      </menu>
      <div className="navbar__cart">
        <Link href="/country/favorites"><a>
          <div className="inline-flex">
            <img className="mr-2" width="25px" height="25px" src="/icons/estrella.svg"/><span>Favorites{favoritesCount>0?`(${favoritesCount})`:null}</span></div>
          </a></Link>
      </div>
    </nav>
  )
}

export default Navbar
