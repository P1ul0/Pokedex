import { BtnHeader, ContainerHeader,  ImgHeader, TitleHeader } from "./style";
import pokedex from "../../assets/pokedex.png"

export const Header = () => {
  return (
    <>
      <ContainerHeader>
        <ImgHeader src={pokedex}/>
        <TitleHeader>Pokedex</TitleHeader>
        <BtnHeader>Cadastre-se</BtnHeader>
      </ContainerHeader>
    </>
  );
};
