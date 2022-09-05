import About from "../components/About";
import Header from "../components/Header";
import TechsList from "../components/TechsList";

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <TechsList />
      </main>
    </>
  );
};

export default Page;
