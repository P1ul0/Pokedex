import {
  BtnLogin,
  CompletedLogin,
  ContainerLogin,
  DivInput,
  DivImgLogin,
  InputLogin,
  TitleLogin,
  BtnRegister,
  TextRegister,
  DivRigister,
  Load,
  DivLoad,
} from "./style";
import img_login from "../../assets/img_login.webp";
import { useState } from "react";

export const BodyLogin = () => {
  const [telaCadastro, setTelaCadastro] = useState(false);
  const [load, setLoad] = useState(false);

  const alterarTela = async () => {
    setTelaCadastro(!telaCadastro);
    setLoad(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoad(false);
  };

  return (
    <>
      {load == true ? (
        <DivLoad>
          <Load />
        </DivLoad>
      ) : (
        <ContainerLogin>
          {telaCadastro == false ? (
            <>
              <CompletedLogin>
                <TitleLogin>Login</TitleLogin>
                <DivInput>
                  <InputLogin placeholder="Email"></InputLogin>
                  <InputLogin placeholder="Senha"></InputLogin>
                  <BtnLogin>Login</BtnLogin>
                </DivInput>
              </CompletedLogin>
              <DivImgLogin img={img_login}>
                <DivRigister>
                  <TextRegister>Aínda Não Possui Conta ?</TextRegister>
                  <BtnRegister onClick={alterarTela}>
                    Registre-se já
                  </BtnRegister>
                </DivRigister>
              </DivImgLogin>
            </>
          ) : (
            <>
              <CompletedLogin>
                <TitleLogin>Cadastre-se</TitleLogin>
                <DivInput>
                  <InputLogin placeholder="Nome"></InputLogin>
                  <InputLogin placeholder="Email"></InputLogin>
                  <InputLogin placeholder="Senha"></InputLogin>
                  <InputLogin placeholder="Confirmação de Senha"></InputLogin>
                  <BtnLogin>Cadastre-se</BtnLogin>
                </DivInput>
              </CompletedLogin>
              <DivImgLogin img={img_login}>
                <DivRigister>
                  <TextRegister>Já Possui Conta ?</TextRegister>
                  <BtnRegister onClick={alterarTela}>
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
