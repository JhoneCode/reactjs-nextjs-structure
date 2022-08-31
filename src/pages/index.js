import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/home'

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Next-React</title>
      </Head>

      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure adapted by JhoneCode.</p>
    </Container>
  )
}

export default Home
