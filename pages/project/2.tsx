import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';

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
              Next.js, TypeScript, Firebase, HTML/CSS, Tailwind CSS
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
            href={'https://portfolio-93a45.firebaseapp.com/'}
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
              src="/portfolio/portfolio-main.png"
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
              <b>Firebase</b>를 활용하여 프로젝트의 DataBase 연동 및 배포를 진행했습니다.
              <br />
              <br />
              🔍 리액트의 CSR로 인한 크롤링이 불가능한 측면을 보완하고,
              포트폴리오 사이트의 <b>SEO</b>를 위해 <b>Next.js</b> 
              프레임워크를 사용하였습니다.<br />
              🚀 CSR, SSR, SSG 렌더링 방식을 각각 적용해보고 성능을 측정하여 가장 최적의 방식인 <b>SSG</b>  방식을 적용했습니다.
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
              <br /> • Firebase
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
              • Figma를 이용한 와이어프레임 설계<br />
              • 사용자 경험 향상을 위한 light / dark 모드 구현<br />
              • Firebase를 도입하여 기존 Notion API의 사용량 제한 이슈 해결 <br />
              • SEO 검색엔진 최적화 및 속도 개선을 위한 SSG 방식 렌더링 구현 <br />
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
            src="/portfolio/responsive.gif"
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
            src="/portfolio/dark-mode.gif"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <p className="w-full leading-relaxed text-slate-800 mt-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            • <b>다크/라이트 모드</b> 토글 버튼 클릭 시 페이지의 테마가
            전환되도록 구현 <br />• <b>ThemeProvide</b>를 App 컴포넌트에
            적용하여 모든 페이지와 컴포넌트에서 사용 가능
          </p>

          <h2 className="sm:text-xl text-xl title-font text-gray-900 dark:text-white mt-16 my-6">
            3. 노션 API 사용량 제한 개선을 위한 Firebase 도입
          </h2>
          <Image
            className="h-90 rounded object-cover object-center mb-6 drop-shadow-xl mx-auto"
            src="/portfolio/db.png"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <Image
            className="h-90 rounded object-cover object-center mb-6 drop-shadow-xl mx-auto"
            src="/portfolio/firebase.png"
            width={800}
            height={800}
            alt="firebase 도입 다이어그램"
          />
          <p className="w-full leading-relaxed text-slate-800 mt-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            • Notion Database API를 사용하는 과정에서 <b>이미지 로딩 문제</b> 발생
            <br /> • Notion API의 <b>요청 한도 초과</b>와 <b>이미지 서버의 이슈</b>로 판단하여 데이터베이스 관리 시스템을 Notion에서 <b>Firebase</b>로 전환
            <br /> • 프로젝트 성격에 따라 <b>getStaticProps</b> 함수로 구현 (SSG)
          </p>
          
          <h2 className="sm:text-xl text-xl title-font text-gray-900 dark:text-white mt-16 my-6">
            4. Next.js의 CSR, SSR, SSG 렌더링 방식 비교 및 적용
          </h2>
          <Image
            className="h-90 rounded object-cover object-center mb-6 drop-shadow-xl mx-auto"
            src="/portfolio/rendering.png"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <p className="w-full leading-relaxed text-slate-800 mt-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            • 렌더링 방식의 <b>성능 비교</b>를 위해 개발자 도구 내 Lighthouse를 활용하여 속도 측정
            <br /> • 포트폴리오 <b>사이트의 특성</b>(데이터 변동 없음)과 <b>SEO 검색 엔진 최적화</b>, <b>빠른 응답 속도</b>를 위해 최적의 렌더링 방식인 SSG 채택
            <br /> • SSG 렌더링 방식 채택 후 Lighthouse 점수와 개선 가이드를 참고하여 <b>성능 최적화</b> 진행
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
            <br />• 처음엔 프로젝트를 계속해서 업데이트 할 목적으로
            getServerSideProps로 구현했었으나, 업데이트 주기가 느리고 실시간
            요청이 필요하지 않은 <b>프로젝트의 성격</b>에 맞추어{' '}
            <b>getStaticProps</b>로 수정하였습니다.
            <br />• Image 렌더링 관련 에러를 경험하면서{' '}
            <b>Next.js만의 Image 컴포넌트</b>를 통한 최적화에 대해 알게 되었습니다.
            <br />• Notion API 사용량 제한에 따른 트러블 슈팅을 경험하며 <b>Firebase</b>로 데이터 관리 시스템 변경 및 배포 방법을 배울 수 있었습니다.
            <br />• Lighthouse를 통한 성능 측정 및 개선 방법을 익히며 사용자 경험 향상을 위한 <b>성능 최적화</b>를 진행했습니다.
          </p>
        </div>

        <div className="flex flex-wrap w-full mb-12 mt-32">
          <div className="lg:w-full w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 dark:text-white">
              프로젝트를 진행하며 배운 것 기록
            </h1>
            <div className="h-1 w-20 bg-green-500 rounded"></div>
          </div>
          <p className="w-full leading-relaxed text-slate-800 mt-4 mb-16 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            프로젝트를 진행하며 발생한 에러 해결 경험과 새롭게 알게 된 지식을
            기술 블로그에 기록하였습니다.
            <br />
            <Link
              className="hover:cursor-pointer text-blue-800"
              href={
                'https://velog.io/@muscatcola/Next.js-%EB%B0%B0%ED%8F%AC-%ED%9B%84-%EB%B3%80%EA%B2%BD-%EC%82%AC%ED%95%AD%EC%9D%B4-%EC%A0%81%EC%9A%A9%EB%90%98%EC%A7%80-%EC%95%8A%EB%8A%94-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0'
              }
            >
              1. [Next.js] 배포 후 변경 사항이 적용되지 않는 에러 해결{' '}
            </Link>
            <br />
            <Link
              className="hover:cursor-pointer text-blue-800"
              href={
                'https://velog.io/@muscatcola/Next.js-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%98%A4%EB%A5%98'
              }
            >
              2. [Next.js] 이미지 렌더링 오류{' '}
            </Link>{' '}
            <br />
            <Link
              className="hover:cursor-pointer text-blue-800"
              href={
                'https://velog.io/@muscatcola/Next.js-%ED%94%84%EB%A6%AC-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%A0%95%EB%A6%AC'
              }
            >
              3. [Next.js] 프리 렌더링 정리{' '}
            </Link>{' '}
            <br />
            <Link
              className="hover:cursor-pointer text-blue-800"
              href={
                'https://velog.io/@muscatcola/Next.js-%EC%A0%95%EC%A0%81-%EC%83%9D%EC%84%B1-vs-SSR'
              }
            >
              4. [Next.js] 정적 생성 vs SSR{' '}
            </Link>{' '}
          </p>
        </div>




      </div>
    </Layout>
  );
}
