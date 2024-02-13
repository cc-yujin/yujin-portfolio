import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'

export default function ArthiveProject() {
  return (
    <Layout>
      <div className="text-black-600 body-font max-w-5xl mx-auto mt-10">
        <div className="container px-2 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-full w-full mb-4 lg:mb-0">
              <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
                Arthive(아타이브) 프로젝트 : 서울시 문화행사 모음 플랫폼
              </h1>
              <div className="h-1 w-20 bg-green-500 rounded"></div>
            </div>
          </div>
          <p className="w-full leading-relaxed text-slate-800 dark:text-gray-50">
            <span className="bg-pink-300 rounded-full px-2 text-gray-900 mr-2">
              한 줄 소개
            </span>
            아타이브는 전시, 공연, 축제에 관심 많은 사용자들이 서울의 모든
            문화행사 정보를 한 눈에 확인할 수 있는 플랫폼입니다.
          </p>
          <p className="leading-relaxed text-base dark:text-gray-800 mt-4 mr-4 dark:text-gray-50">
            <span className="bg-blue-300 rounded-full px-2 text-gray-900 mr-2">
              기간
            </span>
            <span className="dark:text-gray-50">
              2023.11 ~ 2024.2 [팀프로젝트]
            </span>
          </p>
          <p className="leading-relaxed text-base dark:text-gray-800 mt-4 mb-4">
            <span className="bg-green-300 rounded-full px-2 text-gray-900 mr-2">
              기술
            </span>
            <span className="dark:text-gray-50">
              React, JavaScript, Recoil, Axios, Emotion, Kakao Maps API
            </span>
          </p>
          <Link
            href={'https://github.com/Arthive-project/Arthive-FE'}
            className="cursor-pointer"
            target="_blank"
          >
            <p className="leading-relaxed text-base dark:text-gray-800 mt-4 inline">
              <span className="bg-orange-300 rounded-full px-2 text-gray-900 mr-2">
                깃헙 링크로 이동하기
              </span>
            </p>
          </Link>
          <div className="flex flex-wrap -m-4 my-10">
            <Image
              className="h-90 rounded object-cover object-center mb-6 drop-shadow-xl mx-auto"
              src="/아타이브로고2.png"
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
              🎨 Arthive(아타이브) 프로젝트는{' '}
              <b>서울시 문화행사 정보 Open API</b>를 활용한 프로젝트입니다.
              <br />
              평소 문화활동에 관심이 많은 사용자에게 서울 모든 문화 행사 정보를
              소개합니다. <br />
              전시, 공연, 축제로 나뉘어진 <b>카테고리</b>를 선택하여 다양한
              <b>행사 정보와 위치</b>를 확인할 수 있습니다. <br />
              <br />
              💻 프론트엔드 1명, 백엔드 2명으로 구성된 팀 프로젝트입니다. <br />
              주 1회 정기 회의를 통해 진행상황과 기술적 블로킹 상황을
              공유했습니다.
              <br />
              회의록, 컨벤션, API 명세서 등 모든 문서는 Notion에서 관리했습니다.
              <br />
              서울시 Open API를 활용하였으며, 게시판(CRUD) 기능, 유저
              기능(JWT)에 더해 어드민 패널까지 구현한 프로젝트입니다.
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
              • React <br />• JavaScript
              <br /> • Recoil
              <br /> • HTML/CSS
              <br /> • Emotion
              <br /> • Kakao Maps API
              <br /> • Swiper
              <br /> • ESLint, Prettier
            </p>
          </div>
          <div className="flex flex-wrap w-full mb-12 mt-32">
            <div className="lg:w-full w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 dark:text-white">
                담당한 기능
              </h1>
              <div className="h-1 w-20 bg-green-500 rounded"></div>
            </div>
            <p className="w-full leading-relaxed text-slate-800 mt-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
              • 프로젝트 기획 및 디자인, 프론트 파트 100% 구현 (팀 리더) <br />
              • 프로젝트 API 문서화 <br />
              • Figma를 활용한 와이어프레임 및 UI 설계 <br />
              • React를 이용하여 사용자와 상호작용하는 동적 UI, 재사용 가능한
              공통 컴포넌트 개발 <br />
              • Kakao Maps API를 활용하여 자동 경위도 변환 기능 구현 및 상세
              페이지 지도 구현 <br />• JWT 토큰을 통한 로그인, 회원가입 기능
              구현 <br />
              • 어드민 대시보드를 제작하여 유저 관리, 게시물 관리(CRUD) 기능
              구현 <br />
              • Recoil을 이용한 유저정보 전역 상태 관리 <br />• Axios를 활용한
              서버와의 RESTful API 연동
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
            1. 메인 페이지 & 네비바
          </h2>
          <Image
            className="h-90 rounded object-cover object-center mb-6 drop-shadow-xl mx-auto"
            src="/arthive/메인페이지.gif"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <p className="w-full leading-relaxed text-slate-800 mt-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            <b className="text-lg">1. 메인 페이지</b> <br /> • AdBanner 슬라이드
            자동으로 전환 <br />• 배너 클릭 시 해당 공연 상세 페이지로 이동{' '}
            <br />• SubBanner 슬라이드 화살표 클릭시 다음 아이템으로 이동 <br />
            • 포스터 클릭 시 해당 공연 상세 페이지로 이동 <br />• 더보기 클릭 시
            해당 카테고리 페이지로 이동
          </p>
          <Image
            className="h-90 rounded object-cover object-center my-8 drop-shadow-xl mx-auto"
            src="/arthive/네비바.gif"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <p className="w-full leading-relaxed text-slate-800 mt-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            <b className="text-lg">2. 네비바</b> <br />• 네비바 마우스 오버 시
            상세 카테고리 메뉴 드롭 다운 <br />• 전시, 공연, 축제, 커뮤니티
            게시판으로 이동 <br />• 로그인, 회원가입, 마이페이지, 찜 목록, 검색
            페이지로 이동
            <br />• 로그인 상태에서 로그인 버튼이 유저 이름으로 변경
          </p>
          <h2 className="sm:text-xl text-xl title-font text-gray-900 dark:text-white mt-16 my-6">
            2. 문화행사 카테고리 페이지 & 상세 페이지
          </h2>
          <Image
            className="h-90 rounded object-cover object-center mb-6 drop-shadow-xl mx-auto"
            src="/arthive/카테고리상세페이지.gif"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <p className="w-full leading-relaxed text-slate-800 mt-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            <b className="text-lg">1. 문화행사 카테고리 페이지</b> <br /> •
            대분류 카테고리 클릭 시 해당 카테고리 전체 데이터 렌더링 <br />•
            공연 포스터 및 타이틀 클릭 시 상세 페이지로 이동 <br />
            <b className="text-lg">2. 상세 페이지</b> <br />• 위도 경도 데이터
            주소로 전환 <br />
            • Kakao 지도 api로 공연 장소 확인 <br />• 프로그램 출연자, 추가
            정보, 기타 내용이 기입되어 있는 경우만 항목 렌더링
          </p>
          <h2 className="sm:text-xl text-xl title-font text-gray-900 dark:text-white mt-16 my-6">
            3. 로그인 페이지
          </h2>
          <Image
            className="h-90 rounded object-cover object-center mb-6 drop-shadow-xl mx-auto"
            src="/arthive/로그인.gif"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <p className="w-full leading-relaxed text-slate-800 mt-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            <b className="text-lg">1. 유효성 검사</b> <br /> • Email: email
            형식이 맞는지, 입력 값이 있는지 검사 <br />• Password: 입력 값이
            있는지 검사 <br />
            <b className="text-lg">2. JWT 토큰을 통한 로그인</b> <br />• 성공:
            AccessToken과 RefreshToken을 Cookie에 저장 <br />• 실패: 유효성
            검사를 통과하지 못했거나, Email-Password가 일치 하지 않을 때 안내창
            출력
          </p>
          <h2 className="sm:text-xl text-xl title-font text-gray-900 dark:text-white mt-16 my-6">
            4. 회원가입 페이지
          </h2>
          <Image
            className="h-90 rounded object-cover object-center mb-6 drop-shadow-xl mx-auto"
            src="/arthive/회원가입.gif"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <p className="w-full leading-relaxed text-slate-800 my-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            <b className="text-lg">1. 유효성 검사</b> <br /> • 이메일, 비밀번호,
            비밀번호 확인 등 입력항목 조건과 일치하는지 확인 <br />
            <b className="text-lg">2. 회원가입 성공</b> <br />• 로그인 페이지로
            이동
          </p>
          <Image
            className="h-90 rounded object-cover object-center mb-6 drop-shadow-xl mx-auto"
            src="/arthive/회원가입불가.gif"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <p className="w-full leading-relaxed text-slate-800 my-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            <b className="text-lg">3. 회원가입 불가 안내</b> <br /> • 이미
            가입된 email인 경우 <br />• 유효성 검사를 통과하지 못한 경우
          </p>
          <h2 className="sm:text-xl text-xl title-font text-gray-900 dark:text-white mt-16 my-6">
            5. 마이페이지
          </h2>
          <Image
            className="h-90 rounded object-cover object-center mb-6 drop-shadow-xl mx-auto"
            src="/arthive/휴대폰번호변경.gif"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <p className="w-full leading-relaxed text-slate-800 my-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            <b className="text-lg">1. 회원 정보</b> <br /> • 로그인한 유저의
            회원 정보를 요청하여 이름, 이메일, 생년월일 표시 <br />
            <b className="text-lg">2. 회원가입 수정</b> <br />• 휴대폰 번호
            변경: 유효성 검사 후 업데이트 <br />• 비밀번호 변경: 비밀번호 변경
            페이지로 이동 이동
          </p>
          <h2 className="sm:text-xl text-xl title-font text-gray-900 dark:text-white mt-16 my-6">
            6. 공연/행사 등록 페이지
          </h2>
          <Image
            className="h-90 rounded object-cover object-center mb-6 drop-shadow-xl mx-auto"
            src="/arthive/공연행사등록신청폼.gif"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <p className="w-full leading-relaxed text-slate-800 my-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            <b className="text-lg">1. 공연/행사 등록 폼</b> <br /> • 유저는 신청
            폼을 작성한 후 신청 완료 <br />• 필수항목 입력 유효성 확인
          </p>
          <h2 className="sm:text-xl text-xl title-font text-gray-900 dark:text-white mt-16 my-6">
            7. 어드민 대시보드
          </h2>
          <Image
            className="h-90 rounded object-cover object-center mb-6 drop-shadow-xl mx-auto"
            src="/arthive/어드민로그인로그아웃.gif"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <p className="w-full leading-relaxed text-slate-800 my-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            <b className="text-lg">1. 어드민 대시보드</b> <br /> • 어드민
            Email-Password로 로그인 시 어드민 대시보드로 이동 <br />• 어드민
            대시보드 레이아웃으로 변경 됨<br />• 로그아웃 시 유저 레이아웃으로
            변경 및 메인 페이지로 이동
          </p>
          <Image
            className="h-90 rounded object-cover object-center mb-6 drop-shadow-xl mx-auto"
            src="/arthive/게시물검색필터.gif"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <p className="w-full leading-relaxed text-slate-800 my-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            <b className="text-lg">2. 문화 정보 게시물 관리</b> <br /> •
            문화행사 정보 게시물 전체 렌더링 <br />• 키워드 검색시 해당하는
            문화정보만 렌더링
            <br />
          </p>
          <Image
            className="h-90 rounded object-cover object-center mb-6 drop-shadow-xl mx-auto"
            src="/arthive/어드민_게시물등록.gif"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <p className="w-full leading-relaxed text-slate-800 my-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            <b className="text-lg">3. 문화 정보 게시물 등록</b> <br /> • Kakao
            지도 api 활용하여 상세 주소 입력시 위도, 경도 자동 변환 <br />
            • base64를 통한 이미지 업로드
            <br />• 이미지 미리보기
          </p>
          <Image
            className="h-90 rounded object-cover object-center mb-6 drop-shadow-xl mx-auto"
            src="/arthive/어드민유저관리.png"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <p className="text-gray-400 mx-auto align-center">
            (해당 이미지는 png 파일입니다)
          </p>
          <p className="w-full leading-relaxed text-slate-800 my-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            <b className="text-lg">4. 유전 관리</b> <br /> • 회원가입 된 전체
            유저 목록 <br />• 유저 상세 정보 확인
          </p>
        </div>
        {/*구현기능 동작예시 끝*/}
        <div className="flex flex-wrap w-full mb-12 mt-22">
          <div className="lg:w-full w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 dark:text-white">
              성장한 부분
            </h1>
            <div className="h-1 w-20 bg-green-500 rounded"></div>
          </div>
          <p className="w-full leading-relaxed text-slate-800 mt-4 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            • 첫 팀 프로젝트의 <b>팀장</b>을 맡아 기획, 일정 관리 그리고 팀
            회의를 주도하였습니다. 개발 기능 구현 외에도 <b>협업 능력</b>을 기를
            수 있는 기회였습니다.
            <br />• <b>GitHub PR, Commit 컨벤션</b>을 활용하며 효율적인{' '}
            <b>코드 협업</b>을 실천했습니다. <br />• 서비스의 기본적인 기능인{' '}
            <b>유저(로그인, 회원가입) 기능</b>과 <b>시물 CRUD 기능</b>을 모두
            구현했습니다. 다양한 구현 방법이 존재하며 서비스의 성격에 따라
            적합한 기술을 선택하여 적용할 수 있다는 것을 배웠습니다. <br />•
            유저의 인증과 인가에 대해 학습하고 실제로 구현함으로써, <b>보안</b>
            과 관련된 측면에 대해 더욱 깊게 고민할 수 있는 시간을 가졌습니다.
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
                'https://velog.io/@muscatcola/React-페이지-이동-시-스크롤-위치-초기화'
              }
            >
              1. React에서 페이지 이동 시 스크롤 위치 초기화{' '}
            </Link>
            <br />
            <Link
              className="hover:cursor-pointer text-blue-800"
              href={
                'https://velog.io/@muscatcola/eslint-Error-process-is-not-defined'
              }
            >
              2. [ESLint 에러 해결] eslint-Error-process-is-not-defined{' '}
            </Link>{' '}
            <br />
            <Link
              className="hover:cursor-pointer text-blue-800"
              href={
                'https://velog.io/@muscatcola/Cookie-vs-Session-vs-Token-based-authentication'
              }
            >
              3. Cookie vs Session vs Token based-authentication{' '}
            </Link>{' '}
            <br />
            <Link
              className="hover:cursor-pointer text-blue-800"
              href={
                'https://velog.io/@muscatcola/React-React-emotion-오류-해결-eslint-Unknown-property-css-found-reactno-unknown-property'
              }
            >
              4. [React emotion 오류 해결] eslint Unknownproperty css found
              reactno unknown property{' '}
            </Link>{' '}
            <br />
            <Link
              className="hover:cursor-pointer text-blue-800"
              href={'https://velog.io/@muscatcola/JS-Web-API-REST-API'}
            >
              5. [JS] Web API, REST API{' '}
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}
