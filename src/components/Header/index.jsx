import { BtnHeader, ContainerHeader,  DivHeader,  ImgHeader, TitleHeader } from "./style";
import pokedex from "../../assets/pokedex.png"

export const Header = () => {
  return (
    <>
      <ContainerHeader>
        <DivHeader>
        <ImgHeader src={pokedex}/>
        <TitleHeader>Pokedex</TitleHeader>
        </DivHeader>
        <BtnHeader>Cadastre-se</BtnHeader>
      </ContainerHeader>
    </>
  );
};
