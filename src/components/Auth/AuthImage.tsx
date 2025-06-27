'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const AuthImage = () => {
    const path = usePathname()
  // console.log(path)
  return (
    <figure className="w-full lg:h-screen">
      <Image
        src={
          path === '/login'
            ? '/auth/login.png'
            : path === '/signUp'
            ? '/auth/register.png'
            : path === '/forget-pass'
            ? '/auth/forgetPass.png'
            : path === '/varification'
            ? '/auth/varification.png'
            : path === '/new-pass'
            ? '/auth/newPass.png'
            : '/auth/login.png'
        }
        alt="Auth Image"
        className="w-80 md:h-full mx-auto md:w-full object-cover brightness-50 rounded-lg lg:rounded-none rounded-r-lg"
        width={1000}
        height={1000}
      />
    </figure>
  )
}

export default AuthImage
