import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
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
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Page;
