import { useState } from "react";
import {
  DivCardPokemon,
  DivType,
  ImgCardPokemon,
  NameCardPokemon,
  NameTypePokemon,
} from "./style";
import ColorThief from "colorthief";

export const PokemonCard = ({ id, nome, img, type }) => {
  const colorThief = new ColorThief();
  const color = colorThief.getColor(img)
  const hexColor = `#${color[0].toString(16)}${color[1].toString(
    16
  )}${color[2].toString(16)}`;

  return (
    <DivCardPokemon crossOrigin="anonymous" color={hexColor} key={id}>
      <ImgCardPokemon src={img} crossOrigin="anonymous" />
      <NameCardPokemon>
        #{id} {nome}
      </NameCardPokemon>
      <DivType>
        {type &&
          type.map((e) => {
            return <NameTypePokemon>{e}</NameTypePokemon>;
          })}
      </DivType>
    </DivCardPokemon>
  );
};
