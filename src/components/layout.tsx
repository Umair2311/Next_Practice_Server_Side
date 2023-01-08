import { ReactNode } from "react"
import Navbar from "./navbar"
import Footer from "./footer"

interface Props {
  children?: ReactNode
}

function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow shrink-0 basis-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
