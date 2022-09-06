import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 400px;
  width: 94%;
  border: 4px solid var(--white-fixed);
  border-radius: 5px;
  padding: 15px;
  display: flex;
  background-color: var(--black-blue);
  flex-wrap: wrap;
  justify-content: center;
  gap: 5%;

  .smaller-form-div {
    width: 47%;
  }

  button {
    width: 50%;
    background-color: var(--turquoise);
    color: var(--black-blue);
    padding: 15px;
    font-size: 20px;
    font-weight: 500;
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }
`;

export const FormDivContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;

  ${({ error }) =>
    error &&
    `
  input, textarea {
    border-color: #f45 !important;
  }
  label {
    color: #f45 !important;
  }
  `}

  span {
    color: #f45;
    padding-top: 10px;
  }

  input {
    padding: 12px;
    background: var(--black-blue);
    color: var(--white-fixed);
    border: 1px solid var(--white-fixed);
    border-radius: 6px;
    width: 100%;
    font-size: 16px;
  }

  label {
    position: absolute;
    top: ${({ isFilled }) => (!isFilled ? "13px" : "-10px")};
    left: ${({ isFilled }) => (!isFilled ? "12px" : "8px")};
    padding: 0px 5px;
    transition: all 0.2s ease 0s;
    color: var(--white-fixed);
    background-color: var(--black-blue);
    font-weight: 600;
    font-size: ${({ isFilled }) => (!isFilled ? "15px" : "14px")};
    pointer-events: none;
  }

  input:focus {
    border-color: var(--turquoise);
    outline: 0px;
  }

  input:focus ~ label {
    color: var(--turquoise);
    top: -10px;
    left: 8px;
    font-size: 14px;
  }

  input:hover,
  label:hover {
    border-color: var(--turquoise);
  }
`;
