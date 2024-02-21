import Projects from '../components/Projects';
import About from '../components/About';
import Layout from '../components/Layout';
import Skill from '../components/Skill';
import Contact from '../components/Contact';
import { TOKEN, DATABASE_ID } from '../config/index';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

type Projects = {
  name: string;
  stargazers_count: number;
};

export const getStaticProps: GetStaticProps<{
  projects: Projects;
}> = async () => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/9c005f16321245758ebfcf424ff77f7b/query`,
    options,
  );
  const projects = await res.json();

  return { props: { projects } };
};

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
