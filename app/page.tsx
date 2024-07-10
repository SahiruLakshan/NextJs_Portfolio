import Image from "next/image";
import Header from "./Header";
import Details from "./Details";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <Header/>
      <Details/>
      <Projects/>
    </>
  );
}
