import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface PropsInterface {
  children?: JSX.Element | JSX.Element[];
}

function Layout(props: PropsInterface) {
  const { children } = props;

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
