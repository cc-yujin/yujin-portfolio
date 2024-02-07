export default function Header() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="shadow-md fixed top-0 z-10 bg-white w-full ">
      <header className="text-gray-600 body-font max-w-5xl mx-auto">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            onClick={() => scrollToTop()}
          >
            <span className="ml-3 text-xl text-black">
              🌳 한유진 포트폴리오
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center active">
            <a
              className="mr-5 hover:text-gray-900 cursor-pointer"
              onClick={() => scrollToTop()}
            >
              About
            </a>
            <a
              className="mr-5 hover:text-gray-900 cursor-pointer"
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">Skill</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">Contact</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  )
}
