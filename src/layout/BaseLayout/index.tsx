import Footer from "@/components/footer";
import React from "react";

export default function BaseLayout({children}: React.PropsWithChildren<{}>) {
  return (
    <>
        {children}
        <Footer/>
    </>
  )
}
