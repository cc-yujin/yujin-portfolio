import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'

export default function PortFolioProject() {
  return (
    <Layout>
      <div className="text-black-600 body-font max-w-5xl mx-auto mt-10">
        <div className="container px-2 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-full w-full mb-4 lg:mb-0">
              <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
                한유진 포트폴리오
              </h1>
              <div className="h-1 w-20 bg-green-500 rounded"></div>
            </div>
          </div>
          <p className="w-full leading-relaxed text-slate-800 dark:text-gray-50">
            <span className="bg-pink-300 rounded-full px-2 text-gray-900 mr-2">
              한 줄 소개
            </span>
            Next.js와 TypeScript를 학습하며 포트폴리오를 구현한 프로젝트입니다.
          </p>
          <p className="leading-relaxed text-base dark:text-gray-800 mt-4 mr-4 dark:text-gray-50">
            <span className="bg-blue-300 rounded-full px-2 text-gray-900 mr-2">
              기간
            </span>
            <span className="dark:text-gray-50">
              2023.02.01 ~ 2024.02.13 [개인 프로젝트]
            </span>
          </p>
          <p className="leading-relaxed text-base dark:text-gray-800 mt-4 mb-4">
            <span className="bg-green-300 rounded-full px-2 text-gray-900 mr-2">
              기술
            </span>
            <span className="dark:text-gray-50">
              Next.js, TypeScript, Vercel, HTML/CSS, Tailwind CSS
            </span>
          </p>
          <Link
            href={'https://github.com/cc-yujin/yujin-portfolio'}
            className="cursor-pointer"
            target="_blank"
          >
            <p className="leading-relaxed text-base dark:text-gray-800 mt-4 inline">
              <span className="bg-orange-300 rounded-full px-2 text-gray-900 mr-2">
                깃헙 링크로 이동하기
              </span>
            </p>
          </Link>
          <Link
            href={'https://yujin-portfolio.vercel.app/'}
            className="cursor-pointer"
            target="_blank"
          >
            <p className="leading-relaxed text-base dark:text-gray-800 mt-4 inline">
              <span className="bg-purple-300 rounded-full px-2 text-gray-900 mr-2">
                배포 링크로 이동하기
              </span>
            </p>
          </Link>
          <div className="flex flex-wrap -m-4 my-10">
            <Image
              className="h-90 rounded object-cover object-center mb-6 drop-shadow-xl mx-auto"
              src="/portfolio/포폴메인.png"
              width={800}
              height={800}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-wrap w-full mb-12 mt-32">
            <div className="lg:w-full w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 dark:text-white">
                프로젝트 소개
              </h1>
              <div className="h-1 w-20 bg-green-500 rounded"></div>
            </div>
            <p className="w-full leading-relaxed text-slate-800 mt-4 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-7 dark:text-gray-900">
              💁🏻‍♀️ 한유진의 포트폴리오를 <b>Next.js</b>와 <b>TypeScript</b>를
              이용해 만들어보았습니다. <br />
              학습과 동시에 프로젝트에 적용하며 동작 원리를 익혔습니다.
              <br />
              사용자 편의를 위한 <b>반응형 웹</b>으로 구현하였습니다.
              <br />
              빠른 개발을 위해 <b>Tailwind CSS</b>를 도입하여 스타일링했습니다.
              <br />
              <br />
              🔍 리액트의 CSR로 인한 크롤링이 불가능한 측면을 보완하고,
              포트폴리오 사이트의 <b>SEO 검색 엔진 최적화</b>를 위해 Next.js
              프레임워크를 사용하였습니다.
            </p>
          </div>
          <div className="flex flex-wrap w-full mb-12 mt-32">
            <div className="lg:w-full w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 dark:text-white">
                사용 기술 및 라이브러리
              </h1>
              <div className="h-1 w-20 bg-green-500 rounded"></div>
            </div>
            <p className="w-full leading-relaxed text-slate-800 mt-4 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
              • Next.js <br />• TypeScript
              <br /> • HTML/CSS
              <br /> • Tailwind CSS
              <br /> • Vercel
            </p>
          </div>
          <div className="flex flex-wrap w-full mb-12 mt-32">
            <div className="lg:w-full w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 dark:text-white">
                기능 구현
              </h1>
              <div className="h-1 w-20 bg-green-500 rounded"></div>
            </div>
            <p className="w-full leading-relaxed text-slate-800 mt-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
              • 반응형 UI를 제작하여 PC, Mobile, Tablet에 따른 화면 구현
              <br />
              • Figma를 이용하여 반응형 UI 디자인 <br />
              • light / dark 테마를 적용시킬 수 있는 토글 버튼 구현 <br />
              • 노션 API를 활용한 SSR <br />
              • Vercel 배포 <br />
            </p>
          </div>

          {/**구현기능 동작 예시 시작*/}
          <div className="flex flex-wrap w-full mb-12 mt-32">
            <div className="lg:w-full w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 dark:text-white">
                구현 기능 동작 예시
              </h1>
              <div className="h-1 w-20 bg-green-500 rounded"></div>
            </div>
          </div>
          <h2 className="sm:text-xl text-xl title-font text-gray-900 dark:text-white my-6">
            1. 반응형 웹 구현
          </h2>
          <Image
            className="h-90 rounded object-cover object-center mb-6 drop-shadow-xl mx-auto"
            src="/portfolio/반응형.gif"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <p className="w-full leading-relaxed text-slate-800 mt-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            • PC, Tablet, Mobile 등 다양한 화면에서 볼 수 있도록{' '}
            <b>반응형 웹</b>으로 구현
            <br />• <b>Tailwind CSS</b>의 정의된 <b>미디어 쿼리</b>를 활용하여
            각 뷰포트에 따른 스타일 적용
          </p>

          <h2 className="sm:text-xl text-xl title-font text-gray-900 dark:text-white mt-16 my-6">
            2. 다크/라이트 모드 구현
          </h2>
          <Image
            className="h-90 rounded object-cover object-center my-8 drop-shadow-xl mx-auto"
            src="/portfolio/다크모드.gif"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <p className="w-full leading-relaxed text-slate-800 mt-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            • <b>다크/라이트 모드</b> 토글 버튼 클릭 시 페이지의 테마가
            전환되도록 구현 <br />• <b>ThemeProvide를</b> App 컴포넌트에
            적용하여 모든 페이지와 컴포넌트에서 사용 가능
          </p>
          <h2 className="sm:text-xl text-xl title-font text-gray-900 dark:text-white mt-16 my-6">
            3. 노션 API 연동
          </h2>
          <Image
            className="h-90 rounded object-cover object-center mb-6 drop-shadow-xl mx-auto"
            src="/portfolio/데이터베이스.png"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <p className="w-full leading-relaxed text-slate-800 mt-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            • <b>노션 API</b>를 연동하여 <b>데이터베이스</b>의 프로젝트 정보를
            렌더링하여 화면에 노출
            <br /> • 프로젝트 성격에 따라 <b>getStaticProps</b> 함수로 구현
            <br /> • 호출된 결과값을 ProjectItem 컴포넌트로 넘겨주어{' '}
            <b>설정한 배열 순서대로 렌더링</b>
          </p>
        </div>
        {/*구현기능 동작예시 끝*/}
        <div className="flex flex-wrap w-full mb-20 mt-22">
          <div className="lg:w-full w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 dark:text-white">
              성장한 부분
            </h1>
            <div className="h-1 w-20 bg-green-500 rounded"></div>
          </div>
          <p className="w-full leading-relaxed text-slate-800 mt-4 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            • React의 react-router-dom 라이브러리와 다른{' '}
            <b>Next.js의 pages 라우팅</b>
            방식에 대해 학습했습니다.
            <br />• 데이터를 가져오는 방법에 따른 <b>getStaticProps</b>와
            <b>getServerSideProps</b> 함수를 적용하며 각각의 특징을 익혔습니다.
            <br />• 프로젝트를 계속해서 업데이트 할 목적으로
            getServerSideProps로 구현했으나, 업데이트 주기가 느리고 실시간
            요청이 필요하지 않은 <b>프로젝트의 성격</b>에 맞추어{' '}
            <b>getStaticProps</b>로 수정하였습니다.
            <br />• Image 최적화 관련 트러블슈팅을 경험하면서{' '}
            <b>Next.js의 Image 컴포넌트</b>를 통한 최적화를 알게 되었습니다.
            <br />• 노션 API를 활용하며 발생한 이미지 로딩 오류를{' '}
            <b>next.config.js</b>
            파일에 images 속성을 추가하는 방법을 통해 <b>크로스 오리진 이슈</b>
            를 해결하였습니다.
          </p>
        </div>
      </div>
    </Layout>
  )
}
