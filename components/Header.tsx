import Link from 'next/link'
import DarkModeButton from './DarkModeButton'

export default function Header() {
  return (
    <div className="shadow-md fixed top-0 z-10 bg-white w-full dark:bg-gray-800">
      <header className="text-gray-600 body-font max-w-5xl mx-auto">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
            href="/"
          >
            <span className="ml-3 text-xl text-black dark:text-white">
              🌳 한유진 포트폴리오
            </span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center active dark:text-white">
            <a
              className="mr-5 hover:text-gray-900 cursor-pointer dark:hover:text-gray-300"
              href="/#about"
            >
              About
            </a>
            <a
              className="mr-5 hover:text-gray-900 cursor-pointer dark:hover:text-gray-300"
              href="/#projects"
            >
              Projects
            </a>
            <a
              className="mr-5 hover:text-gray-900 cursor-pointer dark:hover:text-gray-300"
              href="/#skill"
            >
              Skill
            </a>
            <a
              className="mr-5 hover:text-gray-900 cursor-pointer dark:hover:text-gray-300"
              href="/#contact"
            >
              Contact
            </a>
          </nav>
          <DarkModeButton />
        </div>
      </header>
    </div>
  )
}
