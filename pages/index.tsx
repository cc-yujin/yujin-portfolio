import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>한유진 포트폴리오</title>
      </Head>
      <div>
        <h1> 오늘도 한유진 </h1>
      </div>
    </div>
  )
}
