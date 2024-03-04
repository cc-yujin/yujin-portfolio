# 한유진 개인 포트폴리오 프로젝트

<img width="958" alt="포폴메인이미지" src="https://github.com/cc-yujin/yujin-portfolio/assets/111138337/6bdd9d2e-3125-4508-a2fc-29630cae271c">

<a href="https://todoapp4adhd.netlify.app/](https://portfolio-93a45.firebaseapp.com/">
  <img src="https://img.shields.io/badge/배포사이트 이동-0e76ff?style=for-the-badge&logo=netlify&logoColor=white" />
</a>

<br /><br />

# 1. 프로젝트 소개 💁🏻‍♀️
### 기획 의도 및 기능 구현

- 한유진의 포트폴리오를 Next.js와 TypeScript를 이용해 만들어보았습니다.
- 사용자 편의를 위한 반응형 웹으로 구현하였습니다.
- Firebase를 활용하여 프로젝트의 DataBase 연동 및 배포를 진행했습니다.
- 빠른 개발을 위해 Tailwind CSS를 도입하여 스타일링했습니다.
  
<br />

- Figma를 이용한 와이어프레임 설계
- 사용자 경험 향상을 위한 light / dark 모드 구현
- Firebase를 도입하여 기존 Notion API의 사용량 제한 이슈 해결
- SEO 검색엔진 최적화 및 속도 개선을 위한 SSG 방식 렌더링 구현

<br />

### 개발 기간

- 2024.02.01 ~ 2024.02.13
- 개인 프로젝트

<br /><br />

# 2. 기술 스택 ⚙️
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<br><img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"> <img src="https://img.shields.io/badge/tailwindcss-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white">
<br><img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">


<br><br>

# 3. 구현 기능 동작 예시 💻

<details>
<summary>1. 반응형 웹 구현</summary>

![반응형](https://github.com/cc-yujin/yujin-portfolio/assets/111138337/503e6c41-9d1f-4101-91c9-6259240416b6)

- PC, Tablet, Mobile 등 다양한 화면에서 볼 수 있도록 반응형 웹으로 구현
- Tailwind CSS의 정의된 미디어 쿼리를 활용하여 각 뷰포트에 따른 스타일 적용
<br>
</details>
<details>
<summary>2. 다크/라이트 모드 구현</summary>

![다크모드](https://github.com/cc-yujin/yujin-portfolio/assets/111138337/10ae0bc8-db48-4c00-8b2e-a0b65684d78a)

- 다크/라이트 모드 토글 버튼 클릭 시 페이지의 테마가 전환되도록 구현
- ThemeProvide를 App 컴포넌트에 적용하여 모든 페이지와 컴포넌트에서 사용 가능
<br>
</details>
<details>
<summary>3. 노션 API 사용량 제한 개선을 위한 Firebase 도입</summary>
  
<img width="1019" alt="데이터베이스" src="https://github.com/cc-yujin/yujin-portfolio/assets/111138337/7ece1f39-a8a7-4914-ae8a-20b3321dc735">

![firebase도입](https://github.com/cc-yujin/yujin-portfolio/assets/111138337/71b8360b-40ec-4053-9e3e-e012d49a0bcc)

- Notion Database API를 사용하는 과정에서 이미지 로딩 문제 발생
- Notion API의 요청 한도 초과와 이미지 서버의 이슈로 판단하여 데이터베이스 관리 시스템을 Notion에서 Firebase로 전환
- 프로젝트 성격에 따라 getStaticProps 함수로 구현 (SSG)

<br>
</details>
<details>
<summary>4. Next.js의 CSR, SSR, SSG 렌더링 방식 비교 및 적용</summary>
  
![포트폴리오성능비교](https://github.com/cc-yujin/yujin-portfolio/assets/111138337/0ff50e0d-a64d-44f3-bfd0-814ec05bd5c1)

- 렌더링 방식의 성능 비교를 위해 개발자 도구 내 Performance를 활용하여 페이지 로딩 속도 측정
- 포트폴리오 사이트의 특성(데이터 변동 없음)과 SEO 검색 엔진 최적화, 빠른 응답 속도를 위해 최적의 렌더링 방식인 SSG 채택
- SSG 렌더링 방식 채택 후 Lighthouse 점수와 개선 가이드를 참고하여 성능 최적화 진행

<br>
</details>

<br /><br />

# 4. 회고 및 배운 점 👍
- React의 react-router-dom 라이브러리와 다른 Next.js의 pages 라우팅방식에 대해 학습했습니다.
- 데이터를 가져오는 방법에 따른 getStaticProps와getServerSideProps 함수를 적용하며 각각의 특징을 익혔습니다.
- 처음엔 프로젝트를 계속해서 업데이트 할 목적으로 getServerSideProps로 구현했었으나, 업데이트 주기가 느리고 실시간 요청이 필요하지 않은 프로젝트의 성격에 맞추어 getStaticProps로 수정하였습니다.
- Image 렌더링 관련 에러를 경험하면서 Next.js만의 Image 컴포넌트를 통한 최적화에 대해 알게 되었습니다.
- Notion API 사용량 제한에 따른 트러블 슈팅을 경험하며 Firebase로 데이터 관리 시스템 변경 및 배포 방법을 배울 수 있었습니다.
- Lighthouse를 통한 성능 측정 및 개선 방법을 익히며 사용자 경험 향상을 위한 성능 최적화를 진행했습니다.

