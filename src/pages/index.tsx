import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import { useRouter } from 'next/router';
import HomePage from './HomePage'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <Head>
        <title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        </title>
      </Head>

      
      {pathname === '/' && <HomePage />}      
    </>


  )
}
