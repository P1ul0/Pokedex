import iconF from "../../assets/iconF.jpg";
import iconM from "../../assets/iconM.jpg";
import userM from "../../assets/userM.png";
import userF from "../../assets/userF.png";
import {
  SubContainer,
  ContainerPerfil,
  ImgPerfil,
  TextPerfil,
  BtnPerfil,
  SubContainerBtn,
} from "./style";
import { useNavigate } from "react-router-dom";

export const BodyPerfil = () => {
  const navigate = useNavigate();
  let local = JSON.parse(localStorage.getItem("usuário"));

  const alterarPokedex = () => {
    navigate("/Pokedex")
  }
  const alterarFavoritos = () => {
    navigate("/Favoritos")
  }


  return (
    <>
      <ContainerPerfil>
        <SubContainer>
          {local.genero == "masculino" ? (
            <ImgPerfil src={userM} />
          ) : (
            <ImgPerfil src={userF} />
          )}
          <TextPerfil>Nick: {local.nome}</TextPerfil>
        </SubContainer>
        <SubContainerBtn>
          <BtnPerfil onClick={alterarPokedex}>Pokedex</BtnPerfil>
          <BtnPerfil onClick={alterarFavoritos}>Favoritos</BtnPerfil>
        </SubContainerBtn>
      </ContainerPerfil>
    </>
  );
};
