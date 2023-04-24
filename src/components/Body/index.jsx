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
  TextValidation,
} from "./style";
import img_login from "../../assets/img_login.webp";
import { useState } from "react";
import { useRef } from "react";
import { fakeDB } from "../../services/fakeApi";

export const BodyLogin = () => {
  const [telaCadastro, setTelaCadastro] = useState(false);
  const [load, setLoad] = useState(false);
  const [errorMessageLogin, setErrorMessageLogin] = useState("");
  const [errorMessageCadastro, setErrorMessageCadastro] = useState("");


  const emailRef = useRef(null);
  const senhaRef = useRef(null);

  const nomeCadastroRef = useRef(null);
  const emailCadastroRef = useRef(null);
  const senhaCadastroRef = useRef(null);
  const senhaCofirmacaoCadastroRef = useRef(null);

  const alterarTela = async () => {
    setTelaCadastro(!telaCadastro);
    setLoad(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoad(false);
  };

  const login = () => {
    const email = emailRef.current.value;
    const senha = senhaRef.current.value;
    for (let i of fakeDB) {
      if (i.email !== email || i.senha !== senha) {
        setErrorMessageLogin("E-mail/Senha incorreta");
      } else {
        alert("Logado Com sucesso");
      }
    }
  };

  const clear = () => {
    nomeCadastroRef.current.value = null;
    emailCadastroRef.current.value = null;
    senhaCadastroRef.current.value = null;
    senhaCofirmacaoCadastroRef.current.value = null;
  };

  const cadastro = () => {
    const nome = nomeCadastroRef.current.value;
    const email = emailCadastroRef.current.value;
    const senha = senhaCadastroRef.current.value;
    const confirmacaoSenha = senhaCofirmacaoCadastroRef.current.value;
    // if(name == "" || email == "" || senha == "" || confirmacaoSenha == "") return alert("Todos os Campos São Obrigátorios")
    if (senha != confirmacaoSenha) return setErrorMessageCadastro("As Senhas Tem Que Ser Iguais");

    const user = {
      nome,
      email,
      senha,
    };

    fakeDB.push(user);
    clear();
    console.log(fakeDB);
    setTelaCadastro(!telaCadastro);
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
                  <InputLogin type="email" placeholder="Email" ref={emailRef} />
                  <InputLogin
                    type="password"
                    placeholder="Senha"
                    ref={senhaRef}
                  />
                  {errorMessageLogin && <TextValidation>{errorMessageLogin}</TextValidation>}
                  <BtnLogin onClick={login}>Login</BtnLogin>
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
                  <InputLogin
                    type="text"
                    placeholder="Nome Completo"
                    ref={nomeCadastroRef}
                  />
                  <InputLogin
                    type="email"
                    placeholder="Email"
                    ref={emailCadastroRef}
                  />
                  <InputLogin
                    type="password"
                    placeholder="Senha"
                    ref={senhaCadastroRef}
                  />
                  <InputLogin
                    type="password"
                    placeholder="Confirmação de Senha"
                    ref={senhaCofirmacaoCadastroRef}
                  />
                  {/* <label for="genero">Selecione o gênero:</label>
                  <select id="genero" name="genero">
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                  </select> */}
                  {errorMessageCadastro && <TextValidation>{errorMessageCadastro}</TextValidation>}
                  <BtnLogin onClick={cadastro}>Cadastre-se</BtnLogin>
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
