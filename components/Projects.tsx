import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
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
          <div className="xl:w-1/2 md:w-1/2 sm:w-full w-full p-4 transform transition duration-200 ease-in-out hover:scale-95">
            <Link href={'/project/1'} className="hover:cursor-pointer">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-60 rounded w-full object-cover object-center mb-6"
                  src="/아타이브로고.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
                <h2 className="text-xl text-gray-900 font-medium title-font mb-5 ml-1">
                  아타이브: 서울시 문화행사 모음 플랫폼
                </h2>
                <p className="leading-relaxed text-base dark:text-gray-800">
                  <span className="bg-blue-300 rounded-full px-2 text-gray-900 mr-2">
                    기간
                  </span>
                  2023.11 ~ 2024.2 [팀프로젝트]
                </p>
                <p className="leading-relaxed text-base dark:text-gray-800">
                  <span className="bg-green-300 rounded-full px-2 text-gray-900 mr-2">
                    기술
                  </span>
                  React, JavaScript, Recoil, Axios, Emotion, Kakao Maps API
                </p>
              </div>
            </Link>
          </div>
          <div className="xl:w-1/2 md:w-1/2 sm:w-full w-full p-4 transform transition duration-200 ease-in-out hover:scale-95">
            <Link href={'/project/2'} className="hover:cursor-pointer">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-60 rounded w-full object-cover object-center mb-6"
                  src="/포폴.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
                <h2 className="text-xl text-gray-900 font-medium title-font mb-5 ml-1">
                  한유진 포트폴리오
                </h2>
                <p className="leading-relaxed text-base dark:text-gray-800">
                  <span className="bg-blue-300 rounded-full px-2 text-gray-900 mr-2">
                    기간
                  </span>
                  2023.2.3 ~ 2024.2.12
                </p>
                <p className="leading-relaxed text-base dark:text-gray-800">
                  <span className="bg-green-300 rounded-full px-2 text-gray-900 mr-2">
                    기술
                  </span>
                  Next.js, React, TypeScript, Vercel, Tailwind CSS, Vercel
                </p>
              </div>
            </Link>
          </div>
          <div className="xl:w-1/2 md:w-1/2 sm:w-full w-full p-4 transform transition duration-200 ease-in-out hover:scale-95">
            <Link href={'/project/3'} className="hover:cursor-pointer">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-60 rounded w-full object-cover object-center mb-6"
                  src="/todoapp.png"
                  width={600}
                  height={600}
                  alt="Picture of the author"
                />
                <h2 className="text-xl text-gray-900 font-medium title-font mb-5 ml-1">
                  To Do App For ADHD 🤩 : 할 일을 실천하기 어려운 사람들을 위한
                  투두앱
                </h2>
                <p className="leading-relaxed text-base dark:text-gray-800">
                  <span className="bg-blue-300 rounded-full px-2 text-gray-900 mr-2">
                    기간
                  </span>
                  2023.9.5 ~ 2023.9.14
                </p>
                <p className="leading-relaxed text-base dark:text-gray-800">
                  <span className="bg-green-300 rounded-full px-2 text-gray-900 mr-2">
                    기술
                  </span>
                  React, JavaScript, Netlify, styled-components
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
