import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: #0d1326;

  .smaller-form-div {
    display: grid;
    gap: 1.25rem;
  }

  button {
    position: relative;
    overflow: hidden;
    padding: 0.875rem 2rem;
    border-radius: 0.5rem;
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    color: #0a0e1a;
    transition: all 300ms;
    margin-top: 0.5rem;
    background: linear-gradient(135deg, #00e5d4, #00bcd4);
    box-shadow: 0 0 20px rgba(0, 229, 212, 0.25);
  }

  button:hover {
    box-shadow: 0 0 30px rgba(0, 229, 212, 0.45);
    transform: translateY(-1px);
  }

  @media (min-width: 640px) {
    .smaller-form-div {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
`;

export const FormDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;

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
  }

  input,
  textarea {
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    color: #ffffff;
    font-size: 0.875rem;
    font-family: "Inter", sans-serif;
    outline: none;
    transition: all 200ms;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);

    &::placeholder {
      color: rgba(255, 255, 255, 0.2);
    }

    &:focus {
      border-color: rgba(0, 229, 212, 0.4);
      background: rgba(0, 229, 212, 0.03);
    }
  }

  textarea {
    resize: none;
    height: 111px;
  }

  label {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.75rem;
    font-family: "Inter", sans-serif;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
`;
