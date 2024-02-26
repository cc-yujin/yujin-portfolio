import Projects from '../components/Projects';
import About from '../components/About';
import Layout from '../components/Layout';
import Skill from '../components/Skill';
import Contact from '../components/Contact';
import type { GetStaticProps } from 'next';
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase/firestoredb';

type Project = {
  id: string;
  name: string;
  stargazers_count: number;
};

export const getStaticProps: GetStaticProps = async () => {
  const projectsCollectionRef = collection(db, 'portfolio');
  const projectSnapshot = await getDocs(projectsCollectionRef);
  const projects = projectSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Project[];

  return {
    props: {
      projects,
    },
  };
};

type Props = {
  projects: Project[];
}

export default function Home({ projects }: Props) {

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
