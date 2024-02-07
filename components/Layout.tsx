import Header from './Header'
import Footer from './Footer'
import * as React from 'react'

export interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="bg-primary w-1023 mx-auto">
      <Header />
      <div> {props.children}</div>
      <Footer />
    </div>
  )
}
