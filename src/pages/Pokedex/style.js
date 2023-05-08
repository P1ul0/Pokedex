import styled from "styled-components";

export const DivPokedex = styled.div `
  display: flex;
  flex-direction: column;
  background: #54defd;
  background: linear-gradient(180deg, #54defd 0%, rgba(9, 9, 121, 1) 62%);
  background-position: fixed ;
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
