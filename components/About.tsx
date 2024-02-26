import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="text-black-600 body-font px- max-w-5xl mx-auto mt-10"
    >
      <div className="container mx-auto flex px-2 py-24 md:flex-row flex-col items-center">
        <div className="lg:w-2/5 md:w-1/2 w-5/6 mb-8 md:mb-0">
          <Image
            className="object-cover object-center rounded-lg mx-auto"
            src="/profile.png"
            width={310}
            height={400}
            alt="Picture of the author"
          />
        </div>
        <div className="lg:w-3/5 md:w-1/2 lg:pl-18 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mt-10">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black-900">
            안녕하세요!
            <br />
            <span className="text-green-700">프론트엔드 개발자 한유진</span>
            입니다.
          </h1><br />
          <p className="mb-8 leading-relaxed text-gray-800 dark:text-gray-300">
            대학에서 광고를 전공하며 자연스레 세상을 바꾸는 아이디어에 관심을 가지게 되었습니다.
            이를 <span className="text-green-600 font-medium">현실로 구현하는 IT 분야</span>에 매료되어 프론트엔드 개발자로서의 여정을 시작하였습다.
            <br />
            <br />
            <span className="text-green-600 font-medium">기획과 디자인 경험</span>이 풍부하여 다양한 직무의 구성원들과도 원활하게
            소통할 수 있습니다. 적극적으로 커뮤니케이션하며 <span className="text-green-600 font-medium">협업</span>할 때 즐거움과
            성취감을 느낍니다. <br />
            <br />지식 공유 및 학습을 위한 <span className="text-green-600 font-medium">기술 블로그</span>를 운영하며 다양한 주제에 대해 <span className="text-green-600 font-medium">80+</span>개의 글을 작성하였습니다.<br />
            <br />좋은 서비스가 더 좋은 세상을 만드는 변화를 믿습니다. 제가 가진 열정과 기술로 더 나은 세상을 위한 변화에 기여하겠습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
