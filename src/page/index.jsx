import About from "../components/About";
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
      </main>
    </>
  );
};

export default Page;
