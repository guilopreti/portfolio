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
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    toast
      .promise(axios.post(import.meta.env.VITE_FORMSPREE_URL, data), {
        pending: {
          render: "Enviando mensagem...",
          className: "toast-pending",
        },
        success: {
          render: "Mensagem enviada com sucesso!",
          className: "toast-success",
        },
        error: {
          render: "Erro ao enviar a mensagem. Tente novamente.",
          className: "toast-error",
        },
      })
      .then(() => {
        reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormDivContainer
        isFilled={nameValue}
        error={errors.name ? true : false}
        onChange={(e) => setNameValue(e.target.value)}
      >
        <label>Nome</label>
        <input
          name="name"
          placeholder="Seu nome completo"
          {...register("name")}
        />
        {errors.name && <span>{errors.name?.message}</span>}
      </FormDivContainer>

      <div className="smaller-form-div">
        <FormDivContainer
          isFilled={emailValue}
          error={errors.email ? true : false}
          onChange={(e) => setEmailValue(e.target.value)}
        >
          <label>Email</label>
          <input
            name="email"
            placeholder="seu@email.com"
            {...register("email")}
          />
          {errors.email && <span>{errors.email?.message}</span>}
        </FormDivContainer>

        <FormDivContainer
          isFilled={phoneValue}
          onChange={(e) => setPhoneValue(e.target.value)}
        >
          <label>Telefone</label>
          <InputMask
            mask={mask}
            maskChar={null}
            placeholder="(11) 99999-9999"
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
        </FormDivContainer>
      </div>

      <FormDivContainer
        isFilled={messageValue}
        error={errors.message ? true : false}
        onChange={(e) => setMessageValue(e.target.value)}
      >
        <label>Mensagem</label>
        <textarea
          name="message"
          placeholder="Conte-me sobre seu projeto..."
          {...register("message")}
        />
        {errors.message && <span>{errors.message?.message}</span>}
      </FormDivContainer>
      <button>Enviar Mensagem</button>
    </FormContainer>
  );
};

export default Form;
