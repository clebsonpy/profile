import Head from 'next/head';
import styled from 'styled-components';

import styles from '../styles/Home.module.css';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clebson Farias</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/clebsonpy">ClebsonPy</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://github.com/clebsonpy/hidrocomp" className={styles.card}>
            <h3>HidroComp &rarr;</h3>
            <p>Package Python for hydrological data analysis</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/clebsonpy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Clebsonpy
        </a>
      </footer>
    </div>
  )
}
