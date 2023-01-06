import Link from "next/link"
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"

function footer() {
  return (
    <footer className="bg-gray-800 shrink-0 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            &#169; 2023 by Umair Saeed
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link href="https://github.com/Umair2311" target="_blank">
              <FaGithub className="text-2xl mx-2 cursor-pointer hover:text-blue-500" />
            </Link>
            <FaFacebook className="text-2xl mx-2 cursor-pointer hover:text-blue-500" />
            <FaLinkedin className="text-2xl mx-2 cursor-pointer hover:text-blue-500" />
            <FaTwitter className="text-2xl mx-2 cursor-pointer hover:text-blue-500" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
