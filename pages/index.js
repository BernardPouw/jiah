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
        <link rel="stylesheet" href="index.css"/>
        <script src="script.js"></script>
      </Head>

      <main>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
      <h1 class="ml10">
        <span class="text-wrapper">
        <span class="letters">Domino Dreams</span>
        </span>
      </h1>
        <p class="animate__animated animate__bounce">
          I have something that I want to <code>TELL YOU!</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}