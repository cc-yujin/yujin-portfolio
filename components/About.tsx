import Image from 'next/image'

export default function About() {
  return (
    <section
      id="about"
      className="text-black-600 body-font px- max-w-5xl mx-auto mt-10"
    >
      <div className="container mx-auto flex px-2 py-24 md:flex-row flex-col items-center">
        <div className="lg:w-2/5  md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded-lg mx-auto"
            src="/profile.png"
            width={290}
            height={400}
            alt="Picture of the author"
          />
        </div>
        <div className="lg:w-3/5 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mt-10 mr-7">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            안녕하세요!
            <br />
            프론트엔드 개발자 한유진입니다.
          </h1>
          <p className="mb-8 leading-relaxed text-gray-700">
            예술대학에서 광고를 전공하고 세상에 좀 더 이로운 기술을 배우고 싶어
            프론트엔드 개발을 시작했습니다.
            <br />
            <br />
            기획과 디자인 경험이 풍부하여 다양한 직무의 구성원들과도 어려움 없이
            소통할 수 있습니다. 적극적으로 커뮤니케이션하며 협업할 때 즐거움과
            성취감을 느낍니다. <br />
            <br />한 가지 기술을 학습하고 구현할 때 깊이있게 몰입하여 고민하고
            적용합니다. 더욱 완성도 높고 설득력 있는 코드를 작성하여, 전문성
            있고 기술력이 풍부한 개발자로 성장하겠습니다.
          </p>
        </div>
      </div>
    </section>
  )
}
