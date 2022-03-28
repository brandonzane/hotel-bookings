import React from "react"
import Image from "next/image"

const style = {
  container: `flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
  hover:bg-gray-100 hover:scale-105 transition duration-200 ease-out`,
  distance: `text-gray-500`,
  location: `text-lg font-semibold`,
  wrapper: `relative h-16 w-16`,
}

function SmallCard({ img, location, distance }) {
  return (
    <div className={style.container}>
      {/* Left */}
      <div className={style.wrapper}>
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      {/* Right */}
      <div>
        <h2 className={style.location}>{location}</h2>
        <h3 className={style.distance}>{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
