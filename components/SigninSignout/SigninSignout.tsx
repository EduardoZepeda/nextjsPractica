import React from 'react'
import { signOut, useSession } from "next-auth/react"
import Link from 'next/link'

const SigninSignout = () => {

  return (
    <Link href="/">
      <a>
        <div onClick={(e) => { e.preventDefault(); signOut() }} className="inline-flex mr-4">
          <img className="mr-2" width="25px" height="25px" src="/icons/account.svg" /><span>Logout</span></div>
      </a>
    </Link>
  )
}

export default SigninSignout