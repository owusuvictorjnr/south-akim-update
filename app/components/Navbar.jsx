'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
// import dropDown from ''

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineCaretDown,
  AiOutlineCaretUp,
} from 'react-icons/ai'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }

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
          <ul className="hidden sm:flex">
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

        {/* Sidebar */}
        <div
          onClick={handleNav}
          className="sm:hidden cursor-pointer flex items-center pt-2 pl-24 "
        >
          <AiOutlineMenu
            size={30}
            color="white"
            className="hover:bg-blue-500 p-1 px-1 rounded duration-500"
          />
        </div>
        <div
          className={
            menuOpen
              ? 'fixed left-0 top-0 sm:hidden w-[65%] h-screen bg-green-700 p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-700'
          }
        >
          <div className="flex w-full items-center justify-between border-b border-gray-400">
            <div className="flex items-center gap-2  ">
              <Image
                src="/logo/logo.jpeg"
                alt="logo"
                height={1000}
                width={1000}
                quality={100}
                className="rounded-full h-[2rem] w-[2rem]"
              />
              <h1>south akim rural bank</h1>
            </div>
            <div onClick={handleNav} className="cursor-pointer duration-700">
              <AiOutlineClose
                size={30}
                color="white"
                className="hover:bg-red-500 p-1 px-1 rounded duration-500"
              />
            </div>
          </div>

          {/* Small Screen DropDown */}
          <div className="smDropdownDiv">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="dropDownButton"
            >
              about
              {!isOpen ? (
                <AiOutlineCaretDown size={20} className="h-8" />
              ) : (
                <AiOutlineCaretUp size={20} className="h-8" />
              )}
            </button>

            {isOpen && (
              <div className="bg-red-800 absolute">
                {/* {dropDown.map((item, i) => (
                  <div key={i}>
                    <h3>{}</h3>
                  </div>
                ))} */}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
