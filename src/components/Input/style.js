import styled from "styled-components";

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
`;


export const InputLogin = styled.input`
  width: 300px;
  height: 30px;
  outline: none;
  border: none;
  color: #000000;
  margin-top: 10px;
  background-color: transparent;
  border-bottom: 2px solid #000000;
  &::placeholder {
    color: #000000;
  }
`;

export const TextValidation = styled.p`

  font-size: 15px;
  font-weight: bold;
  color: #f03355;
`