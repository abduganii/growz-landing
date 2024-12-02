'use client'
import Footer from "@/components/footer";
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import React from "react";

export default function BaseLayout({children}: React.PropsWithChildren<{}>) {
  const pathName = usePathname()
  console.log(pathName)
  return (
    <>
  {pathName.includes('/news') ? <Header/>:""}
        {children}
        <Footer/>
    </>
  )
}
