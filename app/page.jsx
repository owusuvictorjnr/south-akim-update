'use client'
import dynamic from 'next/dynamic'

import Image from 'next/image'
import Link from 'next/link'

import { FiFileText } from 'react-icons/fi'
import { SlScreenDesktop, SlSettings } from 'react-icons/sl'
import { AiOutlineCar } from 'react-icons/ai'
import { LiaHomeSolid } from 'react-icons/lia'
import { BiCreditCard } from 'react-icons/bi'
import { BsShieldCheck, BsCurrencyDollar } from 'react-icons/bs'
import { HiChartBar } from 'react-icons/hi'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'

// Server Component:

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen mt-[5rem]">
      <section>
        <Image
          src="/imgs/bawumia.jpg"
          alt=""
          height={1000}
          width={1000}
          quality={100}
          className="landingPage"
        />
      </section>

      <div className="">
        <section className=" mx-auto">
          <div className="min-h-[15rem] grid grid-cols-1 gap-3 capitalize px-5 pt-8 text-sm  md:bg-white">
            <div className="md:flex md:gap-5  md:justify-center lg:flex lg:justify-center">
              <div className="bannerBox">
                <Link
                  href="open-acc"
                  className="flex gap-5 md:flex md:flex-col"
                >
                  <div className="md:flex md:justify-center md:pt-5">
                    <FiFileText size="30" color="" className="" />
                  </div>
                  <div className="openAccDiv">open an account</div>
                </Link>
              </div>

              <div className="md:border-r-2 md:h-[10rem]" />

              <div className="bannerBox">
                <Link
                  href="online-banking"
                  className="flex gap-5 md:flex md:flex-col"
                >
                  <div className="md:flex md:justify-center md:pt-5">
                    <SlScreenDesktop size="30" color="" className="" />
                  </div>
                  <div className="openAccDiv">online banking service</div>
                </Link>
              </div>

              <div className="md:border-r-2 md:h-[10rem]" />

              <div className="bannerBox">
                <Link
                  href="indemnity-form"
                  className="flex gap-5 md:flex md:flex-col"
                >
                  <div className="md:flex md:justify-center md:pt-5">
                    <FiFileText size="30" color="" className="" />
                  </div>
                  <div className="openAccDiv">sign an indemnity form</div>
                </Link>
              </div>

              <div className="md:border-r-2 md:h-[10rem]" />

              <div className="bannerBox">
                <Link href="sign-in" className="flex gap-5 md:flex md:flex-col">
                  <div className="md:flex md:justify-center md:pt-5">
                    <SlSettings size="30" color="" className="" />
                  </div>
                  <div className="openAccDiv">self service</div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center pt-10 text-sm text-black/50 tracking-wider md:text-xl lg:text-3xl">
          <p>Choose what`s right for</p>
          <p className="flex justify-center">you</p>
        </div>

        <div className="">
          <p className="flex justify-center pt-5 text-sm text-black/60 tracking-wide md:text-xl lg:text-3xl">
            Banking tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 pt-8 px-5 gap-5 md:grid-cols-3 lg:grid-cols-6 lg:flex lg:justify-center ">
          <Link href="bank-account" className="">
            <div className="divBox2">
              <FiFileText size={35} color="orange" className="" />

              <h1 className="text-sm text-blue-900/90 md:text-xl pt-1 md:pt-0">
                bank accounts
              </h1>
            </div>
          </Link>

          <Link href="bank-account" className="">
            <div className="bg-white capitalize gap-2 px-5 py-3 shadow-lg flex items-center md:flex md:flex-col md:pt-10 md:h-[10rem] lg:w-[12rem] lg:h-[10rem] ">
              <AiOutlineCar size={35} color="orange" className="" />
              <h1 className="text-sm text-blue-900 md:text-xl pt-2 md:pt-0">
                vehicle and personal loans
              </h1>
            </div>
          </Link>

          <Link href="bank-account" className="">
            <div className="bg-white capitalize gap-2 px-5 py-3 shadow-lg flex items-center md:flex md:flex-col md:pt-10 md:h-[10rem] lg:w-[12rem] lg:h-[10rem] ">
              <LiaHomeSolid size={35} color="orange" className="" />
              <h1 className="text-sm text-blue-900 md:text-xl pt-2 md:pt-0">
                home loans
              </h1>
            </div>
          </Link>

          <Link href="bank-account" className="">
            <div className="bg-white capitalize gap-2 px-5 py-3 shadow-lg flex items-center md:flex md:flex-col md:pt-10 md:h-[10rem] lg:w-[12rem] lg:h-[10rem] ">
              <BiCreditCard size={35} color="orange" className="" />
              <h1 className="text-sm text-blue-900 md:text-xl pt-2 md:pt-0">
                credit cards
              </h1>
            </div>
          </Link>

          <Link href="bank-account" className="">
            <div className="bg-white capitalize gap-1 px-5 py-3 shadow-lg flex items-center md:flex md:flex-col md:pt-10 md:h-[10rem] lg:w-[12rem] lg:h-[10rem] ">
              <HiChartBar size={35} color="orange" className="" />
              <h1 className="text-sm text-blue-900 md:text-lg pt-2 md:pt-0">
                savings and investments
              </h1>
            </div>
          </Link>

          <Link href="bank-account" className="">
            <div className="bg-white capitalize gap-2 px-5 py-3 shadow-lg flex items-center md:flex md:flex-col md:pt-10 md:h-[10rem] lg:w-[12rem] lg:h-[10rem] ">
              <BsShieldCheck size={35} color="orange" className="" />
              <h1 className="text-sm text-blue-900 md:text-xl pt-2 md:pt-0">
                insurance
              </h1>
            </div>
          </Link>
        </div>

        <div className="">
          <div className="mt-10  mx-auto  px-[1rem]">
            <Image
              src="/imgs/pic3.jpg"
              alt=""
              height="1000"
              width="1000"
              className="h-[30rem] w-full lg:h-[40rem]"
            />

            {/* TODO: text on the image */}
          </div>

          {/* Rates */}
          <div className="">
            <section className="mt-5 px-5 font-bold text-black/70">
              <h2 className="uppercase lg:pl-[26.5rem]">rates</h2>
            </section>

            <div className="px-5 lg:container lg:mx-auto">
              <section className="grid grid-cols-1 md:grid-cols-1  lg:flex lg:justify-end lg:mt-0">
                <section className="mt-4 lg:px-[15rem]">
                  <h3 className="text-black/50 text-sm md:text-xl lg:text-3xl">
                    View our daily Forex/Exchange Rates and monthly Bank of
                    Ghana Reference Rates
                  </h3>
                </section>

                <div className="md:flex md:gap-5">
                  <Link href="daily-forex" className="">
                    <div className="ratebox">
                      <div className="md:flex md:justify-center md:pt-10">
                        <BsCurrencyDollar
                          size="30"
                          color="orange"
                          className=""
                        />
                      </div>
                      <div className="pt-1  text-center text-blue-900/100 text-sm md:text-lg">
                        daily forex rates
                      </div>
                    </div>
                  </Link>

                  <Link href="daily-forex" className="">
                    <div className="ratebox">
                      <div className="md:flex md:justify-center md:pt-10">
                        <HiOutlineArrowUpRight
                          size="30"
                          color="orange"
                          className=" "
                        />
                      </div>
                      <div className="pt-1  text-center text-blue-900/100 text-sm md:text-lg">
                        ghana reference rates
                      </div>
                    </div>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
