import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (<footer className="footer text-white py-8 bg-gray-800 flex flex-row justify-around flex-wrap">
    <div className="footer__socialMedia text-center">
      <h2>Follow us on social media</h2>
      <div className="footer__icons flex flex-row py-4 justify-center">
        <object className="mr-2" width="35px" height="35px" type="image/svg+xml" data="/icons/instagram.svg"></object>
        <object className="mr-2" width="35px" height="35px" type="image/svg+xml" data="/icons/facebook.svg"></object>
        <object className="mr-2" width="35px" height="35px" type="image/svg+xml" data="/icons/twitter.svg"></object>
      </div>
      <small>Iconos diseñados por <a href="https://www.flaticon.es/autores/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></small>
    </div>
    <div className="footer__address py-4 text-center">
      <h2>Visit us</h2>
      <address>
        <p>Fake st. 123</p>
        <p>5555555555</p>
        <p>example@example.org</p>
      </address>
    </div>
  </footer>)
}

export default Footer
