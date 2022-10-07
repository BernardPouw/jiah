import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hey!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
      </Head>

      <main>
        <Header title="Hey there!" />
        <h1 class="animate__animated animate__bounce">
          I have something that I want to <code>TELL YOU!</code>
        </h1>
      </main>

      <Footer />
    </div>
  )
}