import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="h-full grid grid-rows-burguer">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
