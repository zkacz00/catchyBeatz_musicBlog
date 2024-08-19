import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }: Record<string, any>) => {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   )
}

export default Layout;