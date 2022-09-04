import HeaderContainer from "./styled";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub, BsEnvelope, BsFileEarmarkText } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiOutlineRocket } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [menuClass, setMenuClass] = useState(null);

  const changeClass = () => {
    if (menuClass) {
      return setMenuClass(null);
    }

    return setMenuClass("active");
  };

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

        <nav className={menuClass}>
          <button onClick={changeClass}></button>
          <div>
            <a href="">
              <RiErrorWarningLine /> Sobre
            </a>
            <a href="">
              <AiOutlineRocket /> Tecnologias
            </a>
            <a href="">
              <BsFileEarmarkText /> Projetos
            </a>
            <a href="">
              <BsEnvelope /> Contato
            </a>
          </div>
        </nav>
      </section>
    </HeaderContainer>
  );
};

export default Header;
