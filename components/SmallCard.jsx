import React from "react"
import Image from "next/image"

function SmallCard({ img, location, distance }) {
  return (
    <div>
      <div>
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
    </div>
  )
}

export default SmallCard
