import { useState } from "react";
import {
  DivCardPokemon,
  DivType,
  ImgCardPokemon,
  NameCardPokemon,
  NameTypePokemon,
} from "./style";
import { useEffect } from "react";
import ColorThief from "colorthief";

export const PokemonCard = ({ id, nome, img, type }) => {
  const [bgColor, setBgColor] = useState("");

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

  

  return (
    <DivCardPokemon color={bgColor} key={id}>
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
