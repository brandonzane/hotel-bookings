import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'

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

          {/* Pull data from server */}
          {exploreData?.map((item) => (
            <h1>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  )
}

export async function gerStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  )

  return {
    props: {
      exploreData,
    },
  }
}
