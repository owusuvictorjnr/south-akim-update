'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link href="/">
          <div className="navlogo flex items-center gap-2">
            <Image
              src="/logo/logo.jpeg"
              alt="logo"
              width={70}
              height={70}
              quality={100}
              className="logo"
              //   placeholder="blur"
            />
            <h1 className="md:text-lg">south akim rural bank</h1>
          </div>
        </Link>

        <div className="">
          <ul className="">
            <div className="About duration-700">
              <label className="">about us</label>

              <div className="dropDownItems ">
                <Link href="/about/corporate">
                  <div className="dropDownDiv">Corporate Overview</div>
                </Link>

                <Link href="/about/board-of-directors">
                  <div className="dropDownDiv">Board of Directors</div>
                </Link>

                <Link href="/about/management">
                  <div className="dropDownDiv">Management</div>
                </Link>

                <Link href="/about/hallmarks">
                  <div className="dropDownDiv">Major Hallmarks</div>
                </Link>
              </div>
            </div>

            {/* Products */}
            <div className="Products duration-700">
              <label className="">products</label>

              <div className="dropDownItems ">
                <Link href="/products/loans">
                  <div className="dropDownDiv">loans</div>
                </Link>

                <Link href="/products/investments">
                  <div className="dropDownDiv">investments</div>
                </Link>

                <Link href="/products/micro-finance-scheme">
                  <div className="dropDownDiv">micro finance scheme</div>
                </Link>
              </div>
            </div>

            {/* Agency */}

            <div className="Agency duration-700">
              <label className="">agency network</label>

              <div className="dropDownItems ">
                <Link href="/agency/nankese">
                  <div className="dropDownDiv">Nankese Head Office</div>
                </Link>

                <Link href="/agency/koforidua">
                  <div className="dropDownDiv">Koforidua Agency</div>
                </Link>

                <Link href="/agency/asamankese">
                  <div className="dropDownDiv">Asamankese Agency</div>
                </Link>

                <Link href="/agency/adoagyiri">
                  <div className="dropDownDiv">adoagyiri Agency</div>
                </Link>

                <Link href="/agency/adweso">
                  <div className="dropDownDiv">adweso Agency</div>
                </Link>

                <Link href="/agency/kade">
                  <div className="dropDownDiv">kade Agency</div>
                </Link>

                <Link href="/agency/suhum">
                  <div className="dropDownDiv">suhum Agency</div>
                </Link>

                <Link href="/agency/osenase">
                  <div className="dropDownDiv">osenase Agency</div>
                </Link>
              </div>
            </div>

            <Link href="/contact-us">
              <li>contact us</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
