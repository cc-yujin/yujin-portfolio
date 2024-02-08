import Projects from '../components/Projects'
import About from '../components/About'
import Layout from '../components/Layout'
import Skill from '../components/Skill'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Layout>
        <About />
        <Projects />
        <Skill />
        <Contact />
      </Layout>
    </div>
  )
}
