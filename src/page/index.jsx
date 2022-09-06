import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Projects from "../components/Projects";
import TechsList from "../components/TechsList";

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <TechsList />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Page;
