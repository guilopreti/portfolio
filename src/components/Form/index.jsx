import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContainer, FormDivContainer } from "./styled";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import InputMask from "react-input-mask";

const Form = () => {
  const [nameValue, setNameValue] = useState(null);
  const [emailValue, setEmailValue] = useState(null);
  const [phoneValue, setPhoneValue] = useState(null);
  const [messageValue, setMessageValue] = useState(null);
  const [mask, setMask] = useState("(99) 99999-9999");

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().email("Email invalido").required("Email Obrigatório"),
    phone: yup.string(),
    message: yup.string().required("Mensagem é Obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    axios
      .post(process.env.REACT_APP_FORMSPREE_URL, data)
      .then((_) =>
        toast.success("E-mail enviado!", { className: "toast-message" })
      )
      .catch((err) => console.log(err));
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormDivContainer
        isFilled={nameValue}
        error={errors.name ? true : false}
        onChange={(e) => setNameValue(e.target.value)}
      >
        <input name="name" {...register("name")} />
        <label>Nome</label>
        {errors.name && <span>{errors.name?.message}</span>}
      </FormDivContainer>

      <FormDivContainer
        isFilled={emailValue}
        className="smaller-form-div"
        error={errors.email ? true : false}
        onChange={(e) => setEmailValue(e.target.value)}
      >
        <input name="email" {...register("email")} />
        <label>Email</label>
        {errors.email && <span>{errors.email?.message}</span>}
      </FormDivContainer>

      <FormDivContainer
        isFilled={phoneValue}
        className="smaller-form-div"
        onChange={(e) => setPhoneValue(e.target.value)}
      >
        <InputMask
          mask={mask}
          {...register("phone")}
          onBlur={(e) => {
            if (e.target.value.replace("_", "").length === 14) {
              setMask("(99) 9999-9999");
            }
          }}
          onFocus={(e) => {
            if (e.target.value.replace("_", "").length === 14) {
              setMask("(99) 99999-9999");
            }
          }}
        />
        <label>Telefone</label>
      </FormDivContainer>

      <FormDivContainer
        isFilled={messageValue}
        error={errors.message ? true : false}
        onChange={(e) => setMessageValue(e.target.value)}
      >
        <textarea name="message" {...register("message")} />
        <label>Mensagem</label>
        {errors.message && <span>{errors.message?.message}</span>}
      </FormDivContainer>
      <button>Enviar</button>
    </FormContainer>
  );
};

export default Form;
