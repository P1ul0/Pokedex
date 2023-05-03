import { fakeDB } from "../../services/fakeApi";
import { Button, ButtonAlternativo, DivAlternativo, DivImg, Form, Text, Title } from "../../StyledGlobal/StyleGlobalPerfil/style";
import { InputGlobal } from "../Input";
import { InputGenero } from "../../components/InputGenero/index"
import { useFormik } from "formik";
import { useMemo } from "react";
import img_login from "../../assets/img_login.webp";
import { Cadastro} from "../../schema/Cadastro";

export const Register = ({telaCadastro, setTelaCadastro, setLoad}) => {

    const alterarTelaCadastro = async () => {
      setTelaCadastro(!telaCadastro);
      setLoad(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoad(false);
    };

    const cadastro = useFormik({
        initialValues: {
            nome: "",
            email: "",
            senha: "",
            confirmacaoSenha: "",
            genero: ""
        },
        validationSchema: Cadastro,
        onSubmit: (values, {resetForm}) => {
            const {
                nome,
                email,
                senha,
                confirmacaoSenha,
                genero
            } = values;

            const user = {
                nome,
                email,
                senha,
                genero
            };

            fakeDB.push(user);
            console.log(fakeDB);
            alterarTelaCadastro()
            resetForm();
        }
    });

    const InputMemo = useMemo(() => InputGlobal, [])

    return(
                    <>
              <Form onSubmit={cadastro.handleSubmit}>
                <Title>Cadastre-se</Title>
                <InputMemo
                  onBlur={cadastro.handleBlur}
                  onChange={cadastro.handleChange}
                  value={cadastro.values.nome}
                  type={"text"}
                  name="nome"
                  placeholder="Nome de usuário"
                  error={cadastro.touched.nome && cadastro.errors.nome}
                />
                <InputMemo
                  onBlur={cadastro.handleBlur}
                  onChange={cadastro.handleChange}
                  value={cadastro.values.email}
                  type={"email"}
                  name="email"
                  placeholder="E-mail"
                  error={cadastro.touched.email && cadastro.errors.email}
                />
                <InputMemo
                  onBlur={cadastro.handleBlur}
                  onChange={cadastro.handleChange}
                  value={cadastro.values.senha}
                  type={"password"}
                  name="senha"
                  placeholder="Senha"
                  error={cadastro.touched.senha && cadastro.errors.senha}
                />
                <InputMemo
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
                <Button type="submit">Cadastre-se</Button>
              </Form>
              <DivImg img={img_login}>
                <DivAlternativo>
                  <Text>Já Possui Conta ?</Text>
                  <ButtonAlternativo onClick={alterarTelaCadastro}>
                    Faça Seu Login
                  </ButtonAlternativo>
                </DivAlternativo>
              </DivImg>
            </>
    )
}
