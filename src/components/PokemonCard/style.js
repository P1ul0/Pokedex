import styled from "styled-components";

export const DivCardPokemon = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 250px;
  background-color: ${
    props => props.color
};
  background-color: color;
  border: none;
  border-radius:15px;
`;

export const DivTop = styled.div `
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
`
export const IdCardPokemon = styled.p `
  font-size: 20px;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
  color: ${
    props => props.typeColor
};
  margin-right: 10px;
  
`

export const ImgCardPokemon = styled.img `
  height: 100px;
  width: 100px;
  object-fit: contain;
`;

export const NameCardPokemon = styled.p `
  font-size: 25px;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
  text-transform: capitalize;
  color: ${
    props => props.typeColor
};
`;
export const DivType = styled.div ``;
export const NameTypePokemon = styled.a `

  font-size: 15px;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
  text-transform: capitalize;
  color: ${
    props => props.typeColor
};
  padding: 10px;
`;
