import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function ToDoAppProject() {
  return (
    <Layout>
      <div className="text-black-600 body-font max-w-5xl mx-auto mt-10">
        <div className="container px-2 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-full w-full mb-4 lg:mb-0">
              <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
                To Do App For ADHD 🤩 : 할 일을 실천하기 어려운 사람들을 위한
                투두앱
              </h1>
              <div className="h-1 w-20 bg-green-500 rounded"></div>
            </div>
          </div>
          <p className="w-full leading-relaxed text-slate-800 dark:text-gray-50">
            <span className="bg-pink-300 rounded-full px-2 text-gray-900 mr-2">
              한 줄 소개
            </span>
            유저가 작성한 투두리스트의 달성률을 높일 수 있도록 고안된
            투두앱입니다.
          </p>
          <p className="leading-relaxed text-base dark:text-gray-800 mt-4 mr-4 dark:text-gray-50">
            <span className="bg-blue-300 rounded-full px-2 text-gray-900 mr-2">
              기간
            </span>
            <span className="dark:text-gray-50">
              2023.09.05 ~ 2024.09.14 [개인 프로젝트]
            </span>
          </p>
          <p className="leading-relaxed text-base dark:text-gray-800 mt-4 mb-4">
            <span className="bg-green-300 rounded-full px-2 text-gray-900 mr-2">
              기술
            </span>
            <span className="dark:text-gray-50">
              React, JavaScript, Netlify, HTML/CSS, styled-components
            </span>
          </p>
          <Link
            href={'https://github.com/cc-yujin/ToDoApp_for_ADHD'}
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
            href={'https://todoapp4adhd.netlify.app/'}
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
              src="/TodoAppforADHD.png"
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
              📝 ToDoApp for ADHD(투두앱)는 <b>React</b>를 처음 학습하고{' '}
              <b>CRUD</b> 기능 구현을 위해 진행한 프로젝트입니다. <br />
              할 일을 실천하기 어려워하는 ADHD를 가진 친구의 고민에서 아이디어를
              얻어 제작하였습니다.
              <br />
              일반적인 투두앱애서 발전하여, <b>우선순위</b>를 정하거나{' '}
              <b>세부 항목</b>을 추가할 수 있는 기능이 있습니다. <br />
              <br />
              1. <b>우선순위</b>: 할 일 추가 시 스스로 우선순위를 선택
              <br />
              2. <b>세부적으로 나누기</b>: 할 일을 더 작게 나누어 작성. 할 일에
              대한 부담감을 줄이며 단계별로 성취감 고취
              <br />
              3. <b>응원과 격려</b>: 리스트를 하나씩 지워나갈 때마다 응원 문구
              생성. 계속해서 다음 할 일을 진행할 수 있도록 격려
              <br />
              4. <b>톡톡 튀는 UI</b>: 너무 깔끔하고 딱딱한 디자인보다는, 할 일에
              대한 부담을 덜 수 있도록 발랄한 컬러를 사용
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
              <br /> • HTML/CSS
              <br /> • Styled-component
              <br /> • Netlify
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
              • Figma를 활용한 UX/UI 디자인
              <br />
              • 할 일 목록, 추가, 수정, 삭제 구현 (CRUD) <br />
              • 세부적인 할 일 추가 기능 <br />
              • 우선 순위 추가 기능 <br />
              • 할 일 생성되거나 완료 시 랜덤 문구 생성 <br />•
              Styled-component 를 활용한 스타일링 <br />
              • Netlify 배포 <br />
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
            1. 할 일 추가 (feat. 우선순위)
          </h2>
          <Image
            className="h-90 rounded object-cover object-center mb-6 drop-shadow-xl mx-auto"
            src="/todoapp/todo-add.gif"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <p className="w-full leading-relaxed text-slate-800 mt-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            • 할 일을 입력하고 우선순위를 설정 <br />• 설정한 우선순위대 할 일
            리스트 옆에 번개 갯수 표시 <br />• useState Hook으로 data관리,
            useRef Hook으로 할 일 아이템의 고유한 ID를 생성
            <br />• 할 일 추가 및 완료 동작마다 랜덤 문구 렌더링
          </p>

          <h2 className="sm:text-xl text-xl title-font text-gray-900 dark:text-white mt-16 my-6">
            2. 할 일 수정, 완료, 삭제
          </h2>
          <Image
            className="h-90 rounded object-cover object-center my-8 drop-shadow-xl mx-auto"
            src="/todoapp/todo-done-delete.gif"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <p className="w-full leading-relaxed text-slate-800 mt-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            • 추가한 리스트를 수정할 수 있으며, 완료시 체크 표시로 변경 <br />•
            삭제 버튼을 클릭 시 리스트에서 할 일이 삭제
            <br />• 삼항 (조건) 연산자를 활용하여 할 일의 상태를 조건에 맞게
            렌더링
          </p>
          <h2 className="sm:text-xl text-xl title-font text-gray-900 dark:text-white mt-16 my-6">
            3. 세부항목 추가, 완료, 삭제
          </h2>
          <Image
            className="h-90 rounded object-cover object-center mb-6 drop-shadow-xl mx-auto"
            src="/todoapp/detail-done-delete.gif"
            width={800}
            height={800}
            alt="Picture of the author"
          />
          <p className="w-full leading-relaxed text-slate-800 mt-3 dark:text-gray-50 bg-gray-100 rounded-xl p-4 leading-8 dark:text-gray-900">
            • 할 일에 대한 세부 항목을 추가, 완료, 삭제 <br /> • 세부 항목
            추가시, 기존 할 일의 데이터에 새로운 detailTodo 배열을 추가
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
            • React를 처음 학습하고 바로 프로젝트에 적용시켜보면서 핵심 개념 중
            하나인 <b>가상 DOM</b>에 대해 이해할 수 있었습니다.
            <br />• React Hooks 중 <b>useState, useRef</b>를 활용하여 상태와
            참조를 관리하는 법을 배웠습니다.
            <br />• JavaScript의 다양한{' '}
            <b>배열 메서드(filter, map, find, push 등)</b>를 사용하여{' '}
            <b>데이터를 다루는 방법</b>을 익혔습니다.
            <br />• <b>Component</b> 단위의 개발을 하여 <b>재사용성</b>을 높이는
            방법에 대해 깊이 이해할 수 있었습니다. <br />• 타겟층을 선정한
            프로젝트로 <b>사용자 관점에서 UI/UX</b>를 개발할 수 있는
            기회였습니다. <br />• 이론 공부 뿐만 아니라, <b>프로젝트를 통해</b>{' '}
            기능을 활용하고 스스로 적용하는 <b>학습 방식</b>의 중요성을
            깨달았습니다.
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
                'https://velog.io/@muscatcola/React-Toy-Project-Todo-app-for-ADHD-계획을-지키기-어려운-사람들을-위한-투두앱'
              }
              target="_blank"
            >
              1. [React Toy Project] Todoapp for ADHD 계획을 지키기 어려운
              사람들을 위한 투두엡
            </Link>
            <br />
            <Link
              className="hover:cursor-pointer text-blue-800"
              href={'https://velog.io/@muscatcola/React-Props'}
              target="_blank"
            >
              2. React Props
            </Link>{' '}
            <br />
            <Link
              className="hover:cursor-pointer text-blue-800"
              href={
                'https://velog.io/@muscatcola/JS-배열-메소드-forEach-map-설명-그리고-차이점'
              }
              target="_blank"
            >
              3. JS 배열 메소드 forEach, map 설명 그리고 차이점
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
