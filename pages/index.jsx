import Head from "next/head"
import Header from "../components/Header"
import Banner from "../components/Banner"
import SmallCard from "../components/SmallCard"
import MediumCard from "../components/MediumCard"
import LargeCard from "../components/LargeCard"
import Footer from "../components/Footer"

const style = {
  exploreGrid: `lg: grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`,
  scrollGrid: `flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3`,
}

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Hotel Bookings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="mx-auto max-w-7xl px-8">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>

          {/* Pull data from server - API Endpoints */}
          <div className={style.exploreGrid}>
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>

          {/* Pull data from server - API Endpoints */}
          <div className={style.scrollGrid}>
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Kuzimba Bookings"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/1LS4").then((res) =>
    res.json()
  )

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  )

  return {
    props: {
      exploreData,
      cardsData,
    },
  }
}
