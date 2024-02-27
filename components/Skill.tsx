import Image from 'next/image';

export default function Skill() {
  return (
    <div
      id="skill"
      className="text-black-600 body-font max-w-5xl mx-auto mt-2 pt-10"
    >
      <div className="container px-2 py-10 mx-auto">
        <div className="flex flex-wrap w-full mb-2">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
              Skill 기술 스택
            </h1>
            <div className="h-1 w-20 bg-green-500 rounded"></div>
          </div>
          <p className="w-full leading-relaxed text-slate-800 mt-4 dark:text-gray-100">
            다양한 프론트엔드 기술을 익히고 있습니다. <br />
            아직 부족하지만 깊이 있게 작동 원리를 이해하고자 노력합니다.
          </p>
        </div>
        <section className="text-gray-700 body-font max-w-5xl mx-auto">
          <div className="container px-5 py-1 mx-auto">
            <div className="flex flex-wrap -m-4 mt-4">
              <div className="xl:w-1/3 md:w-1/2 sm:w-full w-full p-4">
                <div className="border border-gray-200 p-6 rounded-lg dark:bg-gray-100 ">
                  <div className="w-100 h-18 inline-flex items-center justify-center mb-2">
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
              <div className="xl:w-1/3 md:w-1/2 sm:w-full w-full p-4">
                <div className="border border-gray-200 p-6 rounded-lg dark:bg-gray-100">
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
              <div className="xl:w-1/3 md:w-1/2 sm:w-full w-full p-4">
                <div className="border border-gray-200 p-6 rounded-lg dark:bg-gray-100">
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
              <div className="xl:w-1/3 md:w-1/2 sm:w-full w-full p-4">
                <div className="border border-gray-200 p-6 rounded-lg dark:bg-gray-100">
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
                    <Image
                      className="mr-2 rounded-lg"
                      src="/notion-2.svg"
                      width={37}
                      height={53}
                      alt="notion icon"
                    />
                    <Image
                      className="mr-2 rounded-lg"
                      src="/discord-6.svg"
                      width={37}
                      height={53}
                      alt="discord icon"
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
              <div className="xl:w-1/3 md:w-1/2 sm:w-full w-full p-4">
                <div className="border border-gray-200 p-6 rounded-lg dark:bg-gray-100">
                  <div className="w-100 h-18 inline-flex items-center justify-center mb-2">
                    <Image
                      className="mr-2 rounded-lg"
                      src="/netlify.svg"
                      width={37}
                      height={53}
                      alt="netlify icon"
                    />
                    <Image
                      className="mr-2 rounded-lg"
                      src="/vercel.svg"
                      width={37}
                      height={53}
                      alt="vercel icon"
                    />
                    <Image
                      className="mr-2 rounded-lg"
                      src="/firebase-logo.svg"
                      width={30}
                      height={53}
                      alt="firebase icon"
                    />
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Deploy & Database
                  </h2>
                  <p className="leading-relaxed text-base">Netlify, Vercel</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 sm:w-full w-full p-4">
                <div className="border border-gray-200 p-6 rounded-lg dark:bg-gray-100">
                  <div className="w-100 h-18 inline-flex items-center justify-center mb-2">
                    <Image
                      className="mr-2 rounded-lg"
                      src="/figma-svgrepo-com.svg"
                      width={37}
                      height={53}
                      alt="figma icon"
                    />
                    <Image
                      className="mr-2 rounded-lg"
                      src="/adobe-illustrator-cc-icon.svg"
                      width={37}
                      height={53}
                      alt="illustrator icon"
                    />
                    <Image
                      className="mr-2 rounded-lg"
                      src="/adobe-photoshop-2.svg"
                      width={37}
                      height={53}
                      alt="photoshop icon"
                    />
                    <Image
                      className="mr-2 rounded-lg"
                      src="/adobe-indesign-cc-icon.svg"
                      width={37}
                      height={53}
                      alt="indesign icon"
                    />
                    <Image
                      className="mr-2 rounded-lg"
                      src="/premiere-pro-cc.svg"
                      width={37}
                      height={53}
                      alt="premere icon"
                    />
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
        </section>{' '}
      </div>
    </div>
  );
}
