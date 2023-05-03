import {
    Button,
    ButtonAlternativo,
    DivAlternativo,
    DivImg,
    Form,
    Title,
    Text
} from "../../StyledGlobal/StyleGlobalPerfil/style";
import img_login from "../../assets/img_login.webp";
import {fakeDB} from "../../services/fakeApi";
import {useFormik} from "formik";
import {InputGlobal} from "../Input";
import {Login} from "../../schema/Login";
import {useNavigate} from "react-router-dom";
import {useMemo} from "react";

export const LoginTela = ({telaCadastro, setTelaCadastro, setLoad}) => {

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
            senha: ""
        },
        validationSchema: Login,
        onSubmit: (values, {resetForm}) => {
            const {email, senha} = values;
            for (let i of fakeDB) {
                if (i.email == email && i.senha == senha) {
                    alterarTelaPerfil(i)

                }
                resetForm();
            }
        }
    });


    const InputMemo = useMemo(() => InputGlobal, [])

    return (
        <>
            <Form onSubmit={
                login.handleSubmit
            }>
                <Title>Login</Title>
                <InputMemo onBlur={
                        login.handleBlur
                    }
                    onChange={
                        login.handleChange
                    }
                    value={
                        login.values.email
                    }
                    type={"email"}
                    name="email"
                    placeholder="E-mail"
                    error={
                        login.touched.email && login.errors.email
                    }/>
                <InputMemo onBlur={
                        login.handleBlur
                    }
                    onChange={
                        login.handleChange
                    }
                    value={
                        login.values.senha
                    }
                    type={"password"}
                    name="senha"
                    placeholder="Senha"
                    error={
                        login.touched.senha && login.errors.senha
                    }/>

                <Button type="submit">Login</Button>
            </Form>
            <DivImg img={img_login}>
                <DivAlternativo>
                    <Text>Aínda Não Possui Conta ?</Text>
                    <ButtonAlternativo onClick={alterarTelaCadastro}>
                        Registre-se já
                    </ButtonAlternativo>
                </DivAlternativo>
            </DivImg>
        </>
    );
};
