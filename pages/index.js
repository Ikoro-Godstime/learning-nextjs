import Head from 'next/head'
import Link from 'next/link'
import { players } from '../data'
import style from '../styles/Home.module.css'

export default function Home({ players }) {
  return (
    <div>
      <Head>
        <title>NBA Stats Website</title>
      </Head>
      <div className={style.container}>
        <main className={style.grid}>
          {players.map(player => (
            <div key={player.id} className={style.card}>
              <Link
                href={{
                  pathname: '/[id]',
                  query: { id: player.id },
                }}
              >
                <a className={style.description}>{player.name}</a>
              </Link>
              <h4 className={style.description}>{player.club}</h4>
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: { players },
  }
}
