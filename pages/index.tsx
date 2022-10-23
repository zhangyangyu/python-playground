import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import evaluate from '../funcs/evaluate'
import share from '../funcs/share'

const Home: NextPage = () => {
    return (
    <div className={styles.container}>
      <Head>
        <title>Python Playground</title>
        <meta name="application-name" content="Python Playground, run and share Python code snippet." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.nav}>
          <img src="/favicon.ico" style={{width: "30px", marginRight: "10px"}}/>
          <h3 className={styles.navleft}>
            The Python Playground
          </h3>

          <button className={styles.button} onClick={evaluate}>Run</button>
          <button className={styles.button} onClick={share} id="share">Share</button>
        </div>

        <textarea id="code" style={{width: "100%", resize: "none"}} rows={25}>
        </textarea>

        <textarea id="output" style={{width: "100%", resize: "none"}} rows={15} disabled>
        </textarea>
      </main>

      <footer className={styles.footer}>
        <a>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
          <span className={styles.logo}>
            <Image src="/tidbcloud.png" alt="TiDB Cloud Logo" width={98} height={17} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
