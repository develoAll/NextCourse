import Head from "next/head";
import { Navbar } from "../Navbar";
import styles from "../layouts/MainLayout.module.css";
import { FC, ReactNode } from 'react';

interface ComponentNameProps {
  children: ReactNode,
}

export const MainLayout: FC<ComponentNameProps> = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home - prueba</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar/>

          <main className={styles.main}>
            {  children }
          </main>
        </div>
      )
}