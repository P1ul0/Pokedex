import {
  BtnLogin,
  CompletedLogin,
  ContainerLogin,
  DivImgLogin,
  TitleLogin,
  BtnRegister,
  TextRegister,
  DivRigister,
} from "./style";
import img_login from "../../assets/img_login.webp";
import { useState } from "react";

import { fakeDB } from "../../services/fakeApi";
import { useFormik } from "formik";
import { Cadastro } from "../../schema/Cadastro";
import { InputGlobal } from "../Input";
import { Login } from "../../schema/Login";
import { InputGenero } from "../InputGenero";
import { useNavigate } from "react-router-dom";
import { LoadGlobal } from "../LoadGlobal";

export const BodyLogin = () => {
  const [telaCadastro, setTelaCadastro] = useState(false);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate()

  const alterarTelaCadastro = async () => {
    setTelaCadastro(!telaCadastro);
    setLoad(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoad(false);
  };
  const alterarTelaPerfil = async (user) => {
    localStorage.setItem("usuário", JSON.stringify(user))
    setLoad(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoad(false);
    navigate("/Perfil")
  };
  

  const login = useFormik({
    initialValues: {
      email: "",
      senha: "",
    },
    validationSchema: Login,
    onSubmit: (values, { resetForm }) => {
      const { email, senha } = values;
      for (let i of fakeDB) {
        if (i.email == email && i.senha == senha) {
          alterarTelaPerfil(i)
          
        }
        resetForm();
      }
    },
  });

  const cadastro = useFormik({
    initialValues: {
      nome: "",
      email: "",
      senha: "",
      confirmacaoSenha: "",
      genero:"",
    },
    validationSchema: Cadastro,
    onSubmit: (values, { resetForm }) => {
      const { nome, email, senha, confirmacaoSenha ,genero } = values;

      const user = {
        nome,
        email,
        senha,
        genero,
      };

      fakeDB.push(user);
      console.log(fakeDB);
      alterarTelaCadastro()
      resetForm();
    },
  });

  return (
    <>
      {load == true ? (
        <LoadGlobal/>
      ) : (
        <ContainerLogin>
          {telaCadastro == false ? (
            <>
              <CompletedLogin onSubmit={login.handleSubmit}>
                <TitleLogin>Login</TitleLogin>
                <InputGlobal
                  onBlur={login.handleBlur}
                  onChange={login.handleChange}
                  value={login.values.email}
                  type={"email"}
                  name="email"
                  placeholder="E-mail"
                  error={login.touched.email && login.errors.email}
                />
                <InputGlobal
                  onBlur={login.handleBlur}
                  onChange={login.handleChange}
                  value={login.values.senha}
                  type={"password"}
                  name="senha"
                  placeholder="Senha"
                  error={login.touched.senha && login.errors.senha}
                />

                <BtnLogin type="submit">Login</BtnLogin>
              </CompletedLogin>
              <DivImgLogin img={img_login}>
                <DivRigister>
                  <TextRegister>Aínda Não Possui Conta ?</TextRegister>
                  <BtnRegister onClick={alterarTelaCadastro}>
                    Registre-se já
                  </BtnRegister>
                </DivRigister>
              </DivImgLogin>
            </>
          ) : (
            <>
              <CompletedLogin onSubmit={cadastro.handleSubmit}>
                <TitleLogin>Cadastre-se</TitleLogin>
                <InputGlobal
                  onBlur={cadastro.handleBlur}
                  onChange={cadastro.handleChange}
                  value={cadastro.values.nome}
                  type={"text"}
                  name="nome"
                  placeholder="Nome de usuário"
                  error={cadastro.touched.nome && cadastro.errors.nome}
                />
                <InputGlobal
                  onBlur={cadastro.handleBlur}
                  onChange={cadastro.handleChange}
                  value={cadastro.values.email}
                  type={"email"}
                  name="email"
                  placeholder="E-mail"
                  error={cadastro.touched.email && cadastro.errors.email}
                />
                <InputGlobal
                  onBlur={cadastro.handleBlur}
                  onChange={cadastro.handleChange}
                  value={cadastro.values.senha}
                  type={"password"}
                  name="senha"
                  placeholder="Senha"
                  error={cadastro.touched.senha && cadastro.errors.senha}
                />
                <InputGlobal
                  onBlur={cadastro.handleBlur}
                  onChange={cadastro.handleChange}
                  value={cadastro.values.confirmacaoSenha}
                  type={"password"}
                  name="confirmacaoSenha"
                  placeholder="Confirmação de Senha"
                  error={
                    cadastro.touched.confirmacaoSenha &&
                    cadastro.errors.confirmacaoSenha
                  }
                />
                <InputGenero
                  onBlur={cadastro.handleBlur}
                  onChange={cadastro.handleChange}
                  value={cadastro.values.genero}
                  masculino="masculino"
                  feminino="feminino"
                  type={"genero"}
                  name="genero"
                  error={
                    cadastro.touched.genero &&
                    cadastro.errors.genero
                  }
                />
                <BtnLogin type="submit">Cadastre-se</BtnLogin>
              </CompletedLogin>
              <DivImgLogin img={img_login}>
                <DivRigister>
                  <TextRegister>Já Possui Conta ?</TextRegister>
                  <BtnRegister onClick={alterarTelaCadastro}>
                    Faça Seu Login
                  </BtnRegister>
                </DivRigister>
              </DivImgLogin>
            </>
          )}
        </ContainerLogin>
      )}
    </>
  );
};
