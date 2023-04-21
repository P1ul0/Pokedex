import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  background-color: #FE6F5E;
`;
export const DivHeader = styled.div`
display: flex;
flex-direction: row;
`

export const ImgHeader = styled.img`
  height: 90px;
  width: 100px;
`;

export const TitleHeader = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  color: #FAEBD7;
`;

export const BtnHeader = styled.button`
  margin-right: 10px;
  background-color: transparent;
  padding:0px 0px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #FAEBD7;
  &:hover{
    background-color:#FAEBD7;
    color: #000000;
  }
`;
