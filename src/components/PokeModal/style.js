import styled from "styled-components";

export const DivModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; 
`;

export const DivConteudoModal = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 70vw;
  height: 70vh;
  z-index: 10000; 
`;
