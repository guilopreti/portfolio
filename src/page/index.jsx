import About from "../components/About";
import Contact from "../components/Contact";
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
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Page;
