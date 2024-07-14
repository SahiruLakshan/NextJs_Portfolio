import Image from "next/image";
import Header from "./Header";
import Details from "./Details";
import Projects from "./Projects";
import Experience from "./Experience";
import Technologies from "./Technologies";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Header/>
      <Details/>
      <Projects/>
      <Experience/>
      <Technologies/>
      <Contact/>
    </>
  );
}
