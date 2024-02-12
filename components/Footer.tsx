export default function Footer() {
  return (
    <div className="dark:bg-gray-800">
      <footer className="text-gray-600 body-font">
        <div className="bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto py-3 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2024 한유진의 포트폴리오 —
              <a
                href="https://github.com/cc-yujin"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @cc-yujin
              </a>
            </p>
          </div>
        </div>
      </footer>{' '}
    </div>
  )
}
