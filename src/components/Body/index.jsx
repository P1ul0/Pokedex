import { BtnLogin, CompletedLogin, ContainerLogin, DivInput, ImgLogin, InputLogin, TitleLogin } from "./style"
import img_login from "../../assets/img_login.jpg"

export const BodyLogin= ()=> {
    return (
        <>
        <ContainerLogin>
            <CompletedLogin>
                <TitleLogin>Login</TitleLogin>
                <DivInput>
                <InputLogin placeholder="Email"></InputLogin>
                <InputLogin placeholder="Senha"></InputLogin>
                <BtnLogin>Login</BtnLogin>
                </DivInput>
            </CompletedLogin>
        </ContainerLogin>
        </>
    )
}