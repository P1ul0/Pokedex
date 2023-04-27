
import iconF from "../../assets/iconF.jpg";
import iconM from "../../assets/iconM.jpg";
import userM from "../../assets/userM.png";
import userF from "../../assets/userF.png";
import { ImgPerfil } from "./style";


export const BodyPerfil = () => {
    let local = JSON.parse(localStorage.getItem("usuário"))

    return(
        <>
        {local.genero == "masculino" ? 
        <ImgPerfil src={userF}/>
        :
        <ImgPerfil src={userM}/>
        }
        </>
    )
}