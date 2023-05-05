import styled from "styled-components";

export const ContainerHeader = styled.div `
  width: 100vw;
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 0;
  /* background-color: #54defd; */
  background: rgb(9,9,121);
  background: linear-gradient(180deg, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 97%);
`;
export const DivHeader = styled.div `
  display: flex;
  flex-direction: row;
`;

export const ImgHeader = styled.img `
  height: 90px;
  width: 100px;
`;

export const TitleHeader = styled.p `
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
  color: #000000;
`;
