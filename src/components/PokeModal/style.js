import styled from "styled-components";
import {TfiClose} from "react-icons/tfi"

export const DivModal = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 49; 
  background-color: rgba(0,0,0, .5) ;
`;

export const DivConteudoModal = styled.div `
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 70vw;
  height: 70vh;
  z-index: 50; 
  background-color: ${
    ({background}) => background ? background : "white"
};
`;
export const DivSubModal = styled.div `
  display: flex;
  flex-direction: row ;
  justify-content: space-between;
  align-items:center;
  height: 50px;
  border-bottom: 3px solid ${
    ({textColor}) => textColor ? textColor : "none"
} ;
`
export const Text = styled.p `
  font-size: ${({Size}) => Size ? Size : "30px"};
  font-family: 'Nunito', sans-serif;
  font-weight:bold;
  text-transform: capitalize;
  margin-right: ${({Right}) => Right ? Right : "none"};
  color: ${
    ({textColor}) => textColor ? textColor : "white"
};
`

export const ImgClose = styled(TfiClose)`
  cursor: pointer;
  height: 35px;
  width: 35px;
  object: contain;
  color: ${
    ({textColor}) => textColor ? textColor : "white"
};
`;

export const DivConteudo = styled.div `
  height: 62vh;
  width: 68vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const SubDivConteudo = styled.div `
  width: ${
    ({Width}) => Width ? Width : "auto"
};
  display: flex;
  flex-direction: column;
  align-items: center ; 
`
export const ImgPokemon = styled.img `
  height: 100%;
  width: 100%;
  object: contain;
`


export const DivTypePokemon = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
`

