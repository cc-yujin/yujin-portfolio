import Projects from '../components/Projects';
import About from '../components/About';
import Layout from '../components/Layout';
import Skill from '../components/Skill';
import Contact from '../components/Contact';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase/firestoredb';

type Projects = {
  name: string;
  stargazers_count: number;
};

export async function getStaticProps() {
  const projectsCollectionRef = collection(db, 'portfolio');
  const projectSnapshot = await getDocs(projectsCollectionRef);
  const projects = projectSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  return {
    props: {
      projects,
    },
  };
}

export default function Home({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Layout>
        <About />
        <Projects repo={projects} />
        <Skill />
        <Contact />
      </Layout>
    </div>
  );
}
