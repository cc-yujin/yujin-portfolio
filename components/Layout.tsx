import Header from './Header';
import Footer from './Footer';
import * as React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="bg-primary dark:bg-gray-900 mx-auto">
      <Header />
      <div> {props.children}</div>
      <Footer />
    </div>
  );
}
