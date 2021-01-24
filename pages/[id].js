import React from 'react'
import { players } from '../data'
import Head from 'next/head'
import style from '../styles/Home.module.css'

export default function SinglePage({ result }) {
  return (
    <React.Fragment>
      <Head>
        <title>{result.name}</title>
      </Head>
      <div className={style.container}>
        <div className={style.card}>
          <h1>{result.name}</h1>
          <h3>{result.club}</h3>
          <h4>{result.age}</h4>
        </div>
      </div>
    </React.Fragment>
  )
}

export async function getStaticPaths() {
  const paths = players.map(player => {
    return { params: { id: player.id.toString() } }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const result = players.find(player => player.id === params.id)
  return {
    props: {
      result,
    },
  }
}
