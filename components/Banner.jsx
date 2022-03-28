import React from "react"
import Image from "next/image"
import bannerImage from "../assets/restaurant-exterior.jpg"

const style = {
  image: `relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]`,
  textContainer: `absolute top-1/2 w-full text-center`,
  paragraphText: `text-white text-xl font-semibold`,
  button: `my-3 rounded-full bg-white px-10 py-4 font-bold text-blue-400 shadow-md transition duration-150 hover:shadow-xl active:scale-90`,
}

function Banner() {
  return (
    <div className={style.image}>
      <Image src={bannerImage} layout="fill" objectFit="cover" />
      <div className={style.textContainer}>
        <p className={style.paragraphText}>Don't Know where to go?</p>

        <button className={style.button}>Explore Here!</button>
      </div>
    </div>
  )
}

export default Banner
