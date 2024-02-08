import Image from 'next/image'

export default function Skill() {
  return (
    <>
      <div
        id="Skill"
        className="text-black-600 body-font max-w-5xl mx-auto mt-10"
      >
        <div className="container px-2 py-10 mx-auto">
          <div className="flex flex-wrap w-full mb-1">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900">
                Skill 기술 스택
              </h1>
              <div className="h-1 w-20 bg-green-500 rounded"></div>
            </div>
            <p className="w-full leading-relaxed text-slate-800 mt-4">
              다양한 프론트엔드 기술을 익히고 있습니다. <br />
              부족한 점이 많지만 깊이 있게 작동 원리를 이해하고자 노력합니다.
            </p>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font max-w-5xl mx-auto">
        <div className="container px-5 py-1 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-100 h-16 inline-flex items-center justify-center mb-2">
                  <Image
                    className="mr-2 rounded-lg"
                    src="/typescriptlang-icon.svg"
                    width={37}
                    height={53}
                    alt="email icon"
                  />
                  <Image
                    className="mr-2 rounded-lg"
                    src="/javascript-icon.svg"
                    width={37}
                    height={53}
                    alt="email icon"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Language
                </h2>
                <p className="leading-relaxed text-base">
                  TypeScript, JavaScript
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-100 h-18 inline-flex items-center justify-center mb-2">
                  <Image
                    className="mr-2 rounded-lg"
                    src="/next-js.svg"
                    width={37}
                    height={53}
                    alt="email icon"
                  />
                  <Image
                    className="mr-2 rounded-lg"
                    src="/react-2.svg"
                    width={37}
                    height={53}
                    alt="email icon"
                  />
                  <Image
                    className="mr-2 rounded-lg"
                    src="/recoil-js.svg"
                    width={37}
                    height={53}
                    alt="email icon"
                  />
                  <Image
                    className="mr-2 rounded-lg"
                    src="/redux.svg"
                    width={37}
                    height={53}
                    alt="email icon"
                  />
                  <Image
                    className="mr-2 rounded-lg"
                    src="/html-1.svg"
                    width={37}
                    height={53}
                    alt="email icon"
                  />
                  <Image
                    className="mr-2 rounded-lg"
                    src="/css-3.svg"
                    width={37}
                    height={53}
                    alt="email icon"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Front-End
                </h2>
                <p className="leading-relaxed text-base">
                  Next.js, React, Redux, Recoil, HTML/CSS
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-100 h-18 inline-flex items-center justify-center mb-2">
                  <Image
                    className="mr-2 rounded-lg"
                    src="/emotion.png"
                    width={37}
                    height={53}
                    alt="emotion icon"
                  />
                  <Image
                    className="mr-2 rounded-lg"
                    src="/sc.png"
                    width={37}
                    height={53}
                    alt="styled-components icon"
                  />
                  <Image
                    className="mr-2 rounded-lg"
                    src="/css-modules-logo.png"
                    width={37}
                    height={53}
                    alt="styled-components icon"
                  />
                  <Image
                    className="mr-2 rounded-lg"
                    src="/tailwind-css-2.svg"
                    width={37}
                    height={53}
                    alt="tailwind icon"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Styling
                </h2>
                <p className="leading-relaxed text-base">
                  Emotion, Styled-Components, CSS Module, TailwindCSS
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-100 h-18 inline-flex items-center justify-center mb-2">
                  <Image
                    className="mr-2 rounded-lg"
                    src="/git-icon.svg"
                    width={37}
                    height={53}
                    alt="git icon"
                  />
                  <Image
                    className="mr-2 rounded-lg"
                    src="/github.png"
                    width={37}
                    height={53}
                    alt="git icon"
                  />
                  <Image
                    className="mr-2 rounded-lg"
                    src="/slack-new-logo.svg"
                    width={37}
                    height={53}
                    alt="slack icon"
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Tool
                </h2>
                <p className="leading-relaxed text-base">
                  Git, GitHub, Slack, Notion, Discord
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-100 h-18 inline-flex items-center justify-center mb-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Deploy
                </h2>
                <p className="leading-relaxed text-base">Netlify, Vercel</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-100 h-18 inline-flex items-center justify-center mb-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Design
                </h2>
                <p className="leading-relaxed text-base">
                  Figma, Illustrator, Photoshop, InDesign, Premere Pro
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
