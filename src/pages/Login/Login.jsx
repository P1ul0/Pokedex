import {useState} from "react";
import {LoginTela} from "../../components/Login";
import {Header} from "../../components/Header";
import {LoadGlobal} from "../../components/LoadGlobal/index"
import {SubContainerGlobal, ContainerGlobal} from "../../StyledGlobal/StyleGlobalPerfil/style";
import {Register} from "../../components/cadastro/index"

export const Login = () => {
    const [telaCadastro, setTelaCadastro] = useState(false);
    const [load, setLoad] = useState(false);
    return (
        <>
            <Header/> {
            load === true ? <LoadGlobal/>: <ContainerGlobal>
                <SubContainerGlobal>
                    <> {
                        telaCadastro === false ? <LoginTela telaCadastro={telaCadastro}
                            setLoad={setLoad}
                            setTelaCadastro={setTelaCadastro}/> : <Register telaCadastro={telaCadastro}
                            setLoad={setLoad}
                            setTelaCadastro={setTelaCadastro}/>
                    } </>
                </SubContainerGlobal>
            </ContainerGlobal>
        } </>
    );
};
