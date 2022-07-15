import React from 'react'
import  { signOut, useSession } from "next-auth/react"
import Link from 'next/link'

const SigninSignout = () => {
  const {data: session, status} = useSession()
  if(session==null){
      return null
  }

  return (
    <Link href="/">
    <a>
    <div onClick={()=> signOut()} className="inline-flex">
    <img className="mr-2" width="25px" height="25px" src="/icons/account.svg"/><span>Logout</span></div>
    </a>
    </Link>
  )
}

export default SigninSignout