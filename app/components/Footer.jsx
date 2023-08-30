import React from 'react'
import Link from 'next/link'

import { AiFillYoutube } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { BiLogoTwitter } from 'react-icons/bi'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="pt-5">
          <div className="flex justify-evenly">
            <Link href="/">
              <AiFillYoutube size={30} color="white" />
            </Link>

            <Link href="/">
              <BiLogoFacebook size={30} color="white" />
            </Link>

            <Link href="/">
              <BiLogoTwitter size={30} color="white" />
            </Link>
          </div>
          <div className="text-white/30 text-center capitalize mt-10 pb-5 border-t border-gray-600 ">
            developed by cre8tive inc
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
