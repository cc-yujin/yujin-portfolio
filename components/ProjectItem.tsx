import Image from 'next/image'
import Link from 'next/link'
import { ProjectItem } from '../types/types'

export default function ProjectItem({
  project: { cover, properties },
}: ProjectItem) {
  const title = properties.Name.title[0].plain_text
  const start = properties['진행 기간']?.date?.start ?? ''
  const end = properties['진행 기간']?.date?.end ?? ''
  const skill = properties['skill']?.rich_text[0]?.plain_text ?? ''
  const detailLink = properties['detailLink']?.rich_text[0]?.plain_text ?? ''
  const imgSrc = cover.file?.url || properties.cover.external.url

  return (
    <div className="xl:w-1/2 md:w-1/2 sm:w-full w-full p-4 transform transition duration-200 ease-in-out hover:scale-95">
      <Link href={detailLink} className="hover:cursor-pointer">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-60 rounded w-full object-cover object-center mb-6"
            src={imgSrc}
            width={600}
            height={600}
            alt="Picture of the author"
          />
          <h2 className="text-xl text-gray-900 font-medium title-font mb-5 ml-1">
            {title}
          </h2>
          <p className="leading-relaxed text-base dark:text-gray-800">
            <span className="bg-blue-300 rounded-full px-2 text-gray-900 mr-2">
              기간
            </span>
            {start} ~ {end}
          </p>
          <p className="leading-relaxed text-base dark:text-gray-800">
            <span className="bg-green-300 rounded-full px-2 text-gray-900 mr-2">
              기술
            </span>
            {skill}
          </p>
        </div>
      </Link>
    </div>
  )
}
