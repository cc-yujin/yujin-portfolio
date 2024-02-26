import Image from 'next/image';
import Link from 'next/link';
import { ProjectItem } from '../types/types';

export default function ProjectItem({
  project,
}: ProjectItem) {

  return (
    <div className="xl:w-1/2 md:w-1/2 sm:w-full w-full p-4 transform transition duration-200 ease-in-out hover:scale-95">
      <Link href={project.detailLink} className="hover:cursor-pointer">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-60 rounded w-full object-cover object-center mb-6"
            src={project.이미지}
            width={600}
            height={600}
            alt="Picture of the author"
          />
          <h2 className="text-xl text-gray-900 font-medium title-font mb-5 ml-1">
            {project.projectName}
          </h2>
          <p className="leading-relaxed text-base dark:text-gray-800">
            <span className="bg-blue-300 rounded-full px-2 text-gray-900 mr-2">
              기간
            </span>
            {project['진행 기간']}
          </p>
          <p className="leading-relaxed text-base dark:text-gray-800">
            <span className="bg-green-300 rounded-full px-2 text-gray-900 mr-2">
              기술 
            </span>
            {project.skill}
          </p>
        </div>
      </Link>
    </div>
  );
}
