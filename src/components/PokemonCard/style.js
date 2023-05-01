import styled from "styled-components";

export const DivCardPokemon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: ${(props) => props.color};
  width: 350px;
  background-color: color;
  border: none;
  border-radius: 15px;
`;

export const ImgCardPokemon = styled.img`
  height: 100px;
  width: 100px;
  object-fit: contain;
`;

export const NameCardPokemon = styled.p`
  font-size: 25px;
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: black;
`;
export const DivType = styled.div``;
export const NameTypePokemon = styled.a`
  font-size: 15px;
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: white;
  padding: 10px;
`;
