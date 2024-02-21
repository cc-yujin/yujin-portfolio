import ProjectItem from './ProjectItem';

export default function Projects({ repo }: any) {
  const projects = repo.results ? [...repo.results] : [];

  projects.sort((a, b) => {
    const startA = new Date(a.properties['진행 기간'].date.start).getTime();
    const startB = new Date(b.properties['진행 기간'].date.start).getTime();
    return startB - startA;
  });

  return (
    <div
      id="projects"
      className="text-black-600 body-font max-w-5xl mx-auto mt-10"
    >
      <div className="container px-2 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-12">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
              PROJECTS 프로젝트
            </h1>
            <div className="h-1 w-20 bg-green-500 rounded"></div>
          </div>
          <p className="w-full leading-relaxed text-slate-800 mt-4 dark:text-gray-50">
            React, Next.js, TypeScript, JavaScript 등을 활용하여 진행한 프로젝트
            입니다. <br />
            새로운 기술에 관심이 생기면 곧바로 도전하고 실행하며 학습합니다.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => {
            return <ProjectItem key={project.id} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
}
