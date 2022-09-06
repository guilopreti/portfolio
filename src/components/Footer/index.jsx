import FooterContainer from "./styled";
import { BsFillTriangleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterContainer>
      <section>
        <span>© 2022 | Guilherme Lopreti</span>

        <button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <BsFillTriangleFill />
        </button>
      </section>
    </FooterContainer>
  );
};

export default Footer;
