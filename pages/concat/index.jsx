import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { Navbar } from '../components/Navbar'

export default function ConcatPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Esytoy en el concat</title>
        <meta name="description" content="Concat Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
        
      <main className={styles.main}>
        <h1>Concat Page</h1>

        <h1 className={styles.title}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/concat.jsx</code>
        </p>
      </main>
    </div>
  )
}
