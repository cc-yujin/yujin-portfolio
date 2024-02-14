import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="mb-100">
      <div
        id="contact"
        className="text-black-600 body-font max-w-5xl mx-auto mt-20"
      >
        <div className="container px-2 py-10 mx-auto">
          <div className="flex flex-wrap w-full ">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
                Contact 연락처
              </h1>
              <div className="h-1 w-20 bg-green-500 rounded"></div>
            </div>
            <p className="w-full leading-relaxed text-slate-800 mt-4 dark:text-gray-100">
              하루하루 꾸준히 성장하는 프론트엔드 개발자입니다. <br />
              아래 다양한 채널로 연락주시면 감사하겠습니다. 😃
            </p>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-26 mx-auto mb-40 ">
          <div className="flex flex-wrap max-w-screen-lg mx-auto">
            <div className="p-2 xl:w-1/2 md:w-1/2 sm:w-full w-full transform transition duration-200 ease-in-out hover:scale-95">
              <Link href="mailto:mooo7570@gmail.com" className="cursor-pointer">
                <div className="bg-gray-100 rounded-full flex p-4 h-full items-center">
                  <Image
                    src="/email.png"
                    width={23}
                    height={23}
                    alt="email icon"
                    className="mr-3"
                  />
                  <span className="title-font font-medium">
                    mooo7570@gmail.com
                  </span>
                </div>
              </Link>
            </div>
            <div className="p-2 xl:w-1/2 md:w-1/2 sm:w-full w-full transform transition duration-200 ease-in-out hover:scale-95">
              <div className="bg-gray-100 rounded-full flex p-4 h-full items-center">
                <Image
                  src="/telephone.png"
                  width={23}
                  height={23}
                  alt="telephone icon"
                  className="mr-3"
                />
                <span className="title-font font-medium">010-2327-9817</span>
              </div>
            </div>
            <div className="p-2 xl:w-1/2 md:w-1/2 sm:w-full w-full transform transition duration-200 ease-in-out hover:scale-95">
              <Link
                href="https://github.com/cc-yujin"
                className="cursor-pointer"
                target="_blank"
              >
                <div className="bg-gray-100 rounded-full flex p-4 h-full items-center">
                  <Image
                    src="/github.png"
                    width={23}
                    height={23}
                    alt="github logo"
                    className="mr-3"
                  />
                  <span className="title-font font-medium"> GitHub 깃헙</span>
                </div>
              </Link>
            </div>
            <div className="p-2 xl:w-1/2 md:w-1/2 sm:w-full w-full transform transition duration-200 ease-in-out hover:scale-95">
              <Link
                href="https://velog.io/@muscatcola/posts"
                className="cursor-pointer"
                target="_blank"
              >
                <div className="bg-gray-100 rounded-full flex p-4 h-full items-center">
                  <Image
                    src="/blog.png"
                    width={23}
                    height={23}
                    alt="blog icon"
                    className="mr-3"
                  />
                  <span className="title-font font-medium">
                    기술 및 회고 블로그
                  </span>
                </div>
              </Link>
            </div>
            <div className="p-2 xl:w-1/2 md:w-1/2 sm:w-full w-full transform transition duration-200 ease-in-out hover:scale-95">
              <Link
                href="https://nine-arthropod-974.notion.site/c5a30bf79b654216bc79024c30cd1551"
                className="cursor-pointer"
                target="_blank"
              >
                <div className="bg-gray-100 rounded-full flex p-4 h-full items-center">
                  <Image
                    src="/notion-2.svg"
                    width={23}
                    height={23}
                    alt="notion icon"
                    className="mr-3"
                  />
                  <span className="title-font font-medium">
                    노션 포트폴리오
                  </span>
                </div>
              </Link>
            </div>
            <div className="p-2 xl:w-1/2 md:w-1/2 sm:w-full w-full transform transition duration-200 ease-in-out hover:scale-95">
              <a
                href="/[프론트엔드]한유진 이력서.pdf"
                className="cursor-pointer"
                download
              >
                <div className="bg-gray-100 rounded-full flex p-4 h-full items-center">
                  <Image
                    src="/downloads.png"
                    width={23}
                    height={23}
                    alt="downloads icon"
                    className="mr-3"
                  />
                  <span className="title-font font-medium">
                    이력서 다운로드
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
