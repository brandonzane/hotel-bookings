import Head from "next/head"
import Header from "../components/Header"
import Banner from "../components/Banner"
import SmallCard from "../components/SmallCard"

export default function Home({ exploreData }) {
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
          <div className="lg: grid grid-cols-1 sm:grid-cols-2">
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
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
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
