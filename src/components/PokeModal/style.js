import styled from "styled-components";
import { TfiClose } from "react-icons/tfi";

export const DivModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 49;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const DivConteudoModal = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 70vw;
  height: 70vh;
  z-index: 50;
  background-color: ${({ background }) => (background ? background : "white")};
`;
export const DivSubModal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 3px solid
    ${({ textColor }) => (textColor ? textColor : "none")};
`;
export const Text = styled.p`
  font-size: ${({ Size }) => (Size ? Size : "30px")};
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: ${({ Bottom }) => (Bottom ? Bottom : "none")};
  margin-right: ${({ Right }) => (Right ? Right : "none")};
  margin-left: ${({ Left }) => (Left ? Left : "none")};
  color: ${({ textColor }) => (textColor ? textColor : "white")};
`;

export const ImgClose = styled(TfiClose)`
  cursor: pointer;
  height: 35px;
  width: 35px;
  object: contain;
  color: ${({ textColor }) => (textColor ? textColor : "white")};
`;

export const DivConteudo = styled.div`
  height: 50vh;
  width: 60vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
export const SubDivConteudo = styled.div`
  width: ${({ Width }) => (Width ? Width : "1000px")};
  height: ${({ Height }) => (Height ? Height : "none")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ImgPokemon = styled.img`
  width: 90%;
  object: contain;
`;
export const DivTypePokemon = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;


export const DivScroll = styled.div`
  width: 100vw;
  height: 40vh;
  overflow-x: auto;
  white-space: nowrap;
 

  &::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({color}) => color ? color : "rgba(0, 0, 0)"};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #23dd7a;
  }
`;
export const DivStats = styled.div`
  width: 100%;
  display: inline-block;
  flex-flow: row wrap;
  line-break: strict;
  align-items: center;
`;
export const DivTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const StatusBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: #fcfcfc;
  border-radius: 3px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ percentual }) => percentual}%;
    max-width: 120%;
    height: 6px;
    ${({ percentual }) =>
      percentual < 50
        ? "background-color: #ff0000;"
        : "background-color: #23dd7a;"}
    border-radius: 3px;
  }
`;
