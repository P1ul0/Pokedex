import styled from "styled-components";
import {AiOutlineArrowLeft} from "react-icons/ai";

export const DivPokedex = styled.div `
  display: flex;
  flex-direction: column;
  background: #54defd;
  background: linear-gradient(180deg, #54defd 0%, rgba(9, 9, 121, 1) 62%);
  background-position: fixed ;
`;

export const DivSuperiorPokedex = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px solid transparent;
  border-image: linear-gradient(
    0.25turn,
    rgba(255, 249, 34),
    rgba(255, 0, 128),
    rgba(255, 0, 12)
  );
  border-image-slice: 2;
  width: 100%;
`;

export const ImgBack = styled(AiOutlineArrowLeft)`
  height: 30px;
  width: 30px;
  object-fit: contain;
`;
export const BtnBack = styled.button `
  height: 40px;
  width: 40px;
  background-color: transparent;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;
export const TitlePokedex = styled.p `
  font-size: 50px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bold;
  background: linear-gradient(#6E0D25, #6E0D25,#FFFFB3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 20px;
  /* text-shadow: 1px 1px 1px black; */
`;

export const DivPokedexCard = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 10px 12px;
  margin-top: 30px;
`;
