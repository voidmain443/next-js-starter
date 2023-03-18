import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome here! my name is gregory Paul !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="gregory Paul" />
        <p className="description">
          here will be the reseme and some of my port folio for graduate, and PR myself ! this will make with nextjs and three.js !<code>This will be update! soon!</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
