import {useState} from "react";
import {BtnFavorite, ImgFavoritePokemonEmpty, ImgFavoritePokemonFull} from "./style"
import {addFavorite, removeFavorite} from "../../services/fakeApi";

export const BtnFavorito = ({bgColor, getTextColor, id}) => {
    const [favorite, setFavorite] = useState(false);
    let user = JSON.parse(localStorage.getItem("usuário"));

    const hadleReplaceFavorite = () => {
        setFavorite(!favorite);
        addFavorite(user.email, id);
    };
    const hadleReplaceFavoriteRemove = () => {
        setFavorite(!favorite);
        removeFavorite(user.email, id);
    };

    return (
        <>
            <BtnFavorite> {
                user.favorito.includes(id) ? <ImgFavoritePokemonFull onClick={hadleReplaceFavoriteRemove}
                    typeColor={
                        getTextColor(bgColor)
                    }/> : <ImgFavoritePokemonEmpty onClick={hadleReplaceFavorite}
                    typeColor={
                        getTextColor(bgColor)
                    }/>
            } </BtnFavorite>

        </>
    )
}
