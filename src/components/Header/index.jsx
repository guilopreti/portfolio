import HeaderContainer from "./styled";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <HeaderContainer>
      <section>
        <div>
          <a
            href="https://www.linkedin.com/in/guilherme-lopreti-silva/"
            target={"_blank"}
            rel="noreferrer"
            className="linkedin-link"
          >
            <GrLinkedinOption />
          </a>
          <a
            href="https://github.com/guilopreti"
            target={"_blank"}
            rel="noreferrer"
            className="github-link"
          >
            <BsGithub />
          </a>
        </div>

        <nav>
          <a href="">Sobre</a>
          <a href="">Tecnologias</a>
          <a href="">Projetos</a>
          <a href="">Contato</a>
        </nav>
      </section>
    </HeaderContainer>
  );
};

export default Header;
