import { useState } from "react";
import {
  DivCardPokemon,
  DivType,
  ImgCardPokemon,
  NameCardPokemon,
  NameTypePokemon,
  IdCardPokemon,
  DivTop,
} from "./style";
import { useEffect } from "react";
import ColorThief from "colorthief";

import { BtnFavorito } from "../BtnFavorito";
import { LoadGlobal } from "../LoadGlobal";
import { PokeModal } from "../PokeModal";

export const PokemonCard = ({Pokemon}) => {

  const { id, nome, img, type}  = Pokemon
  const [pokeModal, setPokeModal] = useState(false);
  
  const [bgColor, setBgColor] = useState(null);
  


  useEffect(() => {
    getDominantColor(img).then((color) => {
      setBgColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
    });
  }, [img]);

  function getDominantColor(imageUrl) {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;
    return new Promise((resolve) => {
      img.onload = () => {
        const colorThief = new ColorThief();
        const color = colorThief.getColor(img);
        resolve(color);
      };
    });
  }
  const getTextColor = (background) => {
    const [r, g, b] = background.replace(/[^\d,]/g, "").split(",");

    const normalizedR = r / 255;
    const normalizedG = g / 255;
    const normalizedB = b / 255;

    const luminance =
      0.2126 * normalizedR + 0.7152 * normalizedG + 0.0722 * normalizedB;

    if (luminance < 0.8) {
      return "#ECF2FF";
    } else {
      return "#262A56";
    }
  };
  const openModal = () => {
    setPokeModal(!pokeModal)
  }
  

 
  if (bgColor === null) return <LoadGlobal TamanhoW="250px"  TamanhoH="200px"  Background="black" Border="15px"/>
  if(pokeModal === true) return <PokeModal onRequestClose={openModal} isOpen={openModal}  Pokemon={Pokemon} Background={bgColor} TextColor={getTextColor(bgColor)}/>


  return (
    <DivCardPokemon  color={bgColor} key={id}>
      <DivTop>
        <BtnFavorito  bgColor={bgColor} getTextColor={getTextColor} id={id}/>
        <IdCardPokemon typeColor={getTextColor(bgColor)}>#{id}</IdCardPokemon>
      </DivTop>
      <ImgCardPokemon onClick={openModal} src={img} />
      <NameCardPokemon typeColor={getTextColor(bgColor)}>
        {nome}{" "}
      </NameCardPokemon>
      <DivType>
        {" "}
        {type &&
          type.map((e) => {
            return (
              <NameTypePokemon typeColor={getTextColor(bgColor)}>
                {e}
              </NameTypePokemon>
            );
          })}{" "}
      </DivType>
    </DivCardPokemon>
  );
};
