import styled from "styled-components";
import {SlStar} from "react-icons/sl"
import {TbStarFilled} from "react-icons/tb"

export const ImgFavoritePokemonEmpty = styled(SlStar)`
  height: 30px;
  width: 30px;
  color: ${
    props => props.typeColor
};
`
export const ImgFavoritePokemonFull = styled(TbStarFilled)`
  height: 30px;
  width: 30px;
  color: ${
    props => props.typeColor
};
`
export const BtnFavorite = styled.button `
  height: 40px;
  width: 40px;
  background-color: transparent;
  border: none;
  outline:none;
  cursor:pointer;
  margin-left: 10px;
`
