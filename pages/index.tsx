import { useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { motion } from 'framer-motion';

export default function Home() {
  const scrollRef = useRef(null);
  return (
    <div className={styles.container}>
      <Head>
        <title>THOR KAMMER</title>
        <meta name='description' content='Thorkammer chamber music' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <nav>
          <ul>
            <li>THORKAMMER</li>
            <li>CONCERTS</li>
            <li>RECORDINGS</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <div className={styles.landing}>
          <motion.p
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <Link href='/'>THOR KAMMER</Link>
          </motion.p>
          <p className={styles.description}>
            {/* <Image src='/icons/down.svg' alt='' height={30} width={30} /> */}
            🠋
          </p>
        </div>

        <div className={styles.grid}>
          <motion.a
            href='https://nextjs.org/docs'
            className={styles.card}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h2>Next Events &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </motion.a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h2>Records &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className={styles.card}
          >
            <h2>Musicians &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h2>Contact &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Copyright Thorkammer
          <span className={styles.logo}>
            <Image
              src='/icons/thk.svg'
              alt='Vercel Logo'
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
