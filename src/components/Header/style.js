import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  background-color: #ffd3b0;
`;

export const ImgHeader = styled.img`
`;

export const TitleHeader = styled.p`
  display: flex;
  flex-direction: column;

  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  color: #ff6d60;
`;

export const BtnHeader = styled.button`
  position: relative;
  left: 70%;
  padding: 24px 25px;
  background-color: transparent;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #ff6d60;
`;
