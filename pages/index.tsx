import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import About from '../components/About'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <Layout>
        <About />
        <Projects />
      </Layout>
    </div>
  )
}
