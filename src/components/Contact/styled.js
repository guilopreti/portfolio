import styled from "styled-components";

const ContactContainer = styled.section`
  background-color: var(--turquoise);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  padding-top: 80px;
  padding-bottom: 50px;

  h2 {
    font-family: "Open Sans", sans-serif;
    color: var(--white-fixed);
    font-weight: 700;
    font-size: 22px;
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
  }

  @media (min-width: 800px) {
    h2 {
      font-size: 30px;
    }
  }

  @media (min-width: 1222px) {
    h2 {
      font-size: 40px;
    }
  }
`;

export default ContactContainer;
