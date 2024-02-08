import Image from 'next/image'

export default function Projects() {
  return (
    <div
      id="projects"
      className="text-black-600 body-font max-w-5xl mx-auto mt-10"
    >
      <div className="container px-2 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900">
              PROJECTS 프로젝트
            </h1>
            <div className="h-1 w-20 bg-green-500 rounded"></div>
          </div>
          <p className="w-full leading-relaxed text-slate-800 mt-4">
            React, Next.js, TypeScript, JavaScript 등을 활용하여 진행한 프로젝트
            입니다. <br />
            새로운 기술에 관심이 생기면 곧바로 도전하고 실행하며 학습합니다.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/2 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/profile.png"
                width={290}
                height={400}
                alt="Picture of the author"
              />
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                아타이브: 서울시 문화행사 모음 플랫폼
              </h2>
              <p className="leading-relaxed text-base">
                React, JavaScript, Recoil, Axios, Emotion, Kakao Maps API
              </p>
            </div>
          </div>
          <div className="xl:w-1/2 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                한유진 포트폴리오
              </h2>
              <p className="leading-relaxed text-base">
                Next.js, TypeScript, Vercel, Tailwind CSS, Vercel
              </p>
            </div>
          </div>
          <div className="xl:w-1/2 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                To Do App For ADHD 🤩 : 할 일을 실천하기 어려운 사람들을 위한
                투두앱
              </h2>
              <p className="leading-relaxed text-base">
                React, JavaScript, Netlify, styled-components
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
