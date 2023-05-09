
import userM from "../../assets/userM.png";
import userF from "../../assets/userF.png";
import {
  SubContainer,
  ContainerPerfil,
  ImgPerfil,
  TextPerfil,
  BtnPerfil,
  SubContainerBtn,
} from "./style.js";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";


export const Perfil = () => {
  const navigate = useNavigate();
  let local = JSON.parse(localStorage.getItem("usuário"));

  const alterarPokedex = () => {
    navigate("/Pokedex")
  }
  const alterarFavoritos = () => {
    navigate("/Favoritos")
  }
  const deslogar = () => {
    navigate("/")
    localStorage.clear()
  }


  return (
    <>
    
      <ContainerPerfil>
      <Header/>
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
          <BtnPerfil onClick={deslogar}>Deslogar</BtnPerfil>
        </SubContainerBtn>
      </ContainerPerfil>
    </>
  );
};