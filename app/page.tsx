import Image from "next/image";
import Header from "./Header";
import Details from "./Details";
import Projects from "./Projects";
import Experience from "./Experience";
import Technologies from "./Technologies";
import Contact from "./Contact";
import Background from "@/components/ui/Background";
import { LayoutGroup } from "framer-motion";
import Layout from "./layout";
import RootLayout from "./layout";
import { StickyScrollRevealDemo } from "./StickeyScrollRevealDemo";
// pages/_app.js or pages/_app.tsx



export default function Home() {
  return (
    <>
    
      <Header/>
      <Details/>
      <StickyScrollRevealDemo/>
      <Projects/>
      <Experience/>
      <Technologies/>
      <Contact/>
      
    </>
  );
}
