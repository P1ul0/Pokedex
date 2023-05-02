import {useState} from "react";
import {
    DivCardPokemon,
    DivType,
    ImgCardPokemon,
    NameCardPokemon,
    NameTypePokemon,
    IdCardPokemon,
    ImgFavoritePokemonEmpty,
    ImgFavoritePokemonFull,
    BtnFavorite,
    DivTop
} from "./style";
import {useEffect} from "react";
import ColorThief from "colorthief";

export const PokemonCard = ({id, nome, img, type}) => {
    const [bgColor, setBgColor] = useState("");
    const [favorite, setFavorite] = useState(false);
    const [idFavorite, setIdFavorite] = useState([{}])

    useEffect(() => {
        getDominantColor(img).then((color) => {
            setBgColor(`rgb(${
                color[0]
            }, ${
                color[1]
            }, ${
                color[2]
            })`);
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
        const [r, g, b] = background.replace(/[^\d,]/g, '').split(',');

        const normalizedR = r / 255;
        const normalizedG = g / 255;
        const normalizedB = b / 255;

        const luminance = 0.2126 * normalizedR + 0.7152 * normalizedG + 0.0722 * normalizedB;

        if (luminance < 0.8) {
            return '#ECF2FF';
        } else {
            return '#262A56';
        }
    }

    const hadleReplaceFavorite = () => {
        setFavorite(!favorite)
        setIdFavorite()
        console.log(idFavorite);
    }


    return (
        <DivCardPokemon color={bgColor}
            key={id}>
            <DivTop>
                <BtnFavorite onClick={hadleReplaceFavorite}>
                    {
                    favorite == false ? <ImgFavoritePokemonEmpty typeColor={
                        getTextColor(bgColor)
                    }/> : <ImgFavoritePokemonFull typeColor={
                        getTextColor(bgColor)
                    }/>
                }</BtnFavorite>
                <IdCardPokemon typeColor={
                    getTextColor(bgColor)
                }>#{id}</IdCardPokemon>
            </DivTop>
            <ImgCardPokemon src={img}
                crossOrigin="anonymous"/>
            <NameCardPokemon typeColor={
                getTextColor(bgColor)
            }>
                {nome} </NameCardPokemon>
            <DivType> {
                type && type.map((e) => {
                    return <NameTypePokemon typeColor={
                        getTextColor(bgColor)
                    }>
                        {e}</NameTypePokemon>;
                })
            } </DivType>
        </DivCardPokemon>
    );
};
