import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> game development blogs  </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to  Hrdv Thoughts " />
        <p className="description">
          dev jobs  techstacks and latest news  <code>subbscribe to our blog page </code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
