import React from 'react'
import Image from 'next/image'
import Logo from '../assets/k-logo.png'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid'

const style = {
  header: `sticky top-0 z-50 grid grid-cols-3 bg-white p-5 py-5 px-5 shadow-md md:px-10`,
  logoContainer: `relative my-auto flex h-10 cursor-pointer items-center`,
  searchWrapper: `flex items-center rounded-full py-2 md:border-2`,
  searchIcon: `hidden h-8 cursor-pointer rounded-full bg-blue-300 p-2 text-white md:mx-2 md:inline-flex`,
  searchInput: `flex-grow bg-transparent pl-5 placeholder-gray-400 outline-none`,
  menuWrapper: `flex items-center justify-end space-x-4 text-gray-500`,
  paragraph: `hidden cursor-pointer md:inline`,
  menuItems: `flex items-center space-x-2 rounded-full border-2 p-2`,

  globeAltIcon: `h-6 cursor-pointer`,
}

function Header() {
  return (
    <header className={style.header}>
      {/* Left Section */}
      <div className={style.logoContainer}>
        <Image
          src={Logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle section */}
      <div className={style.searchWrapper}>
        <input
          className={style.searchInput}
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className={style.searchIcon} />
      </div>

      {/* Right Section */}
      <div className={style.menuWrapper}>
        <p className={style.paragraph}>Join Us</p>
        <GlobeAltIcon className={style.globeAltIcon} />

        <div className={style.menuItems}>
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  )
}

export default Header
