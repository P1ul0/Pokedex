import {
    DivConteudo,
    DivConteudoModal,
    DivModal,
    DivSubModal,
    DivTypePokemon,
    ImgClose,
    ImgPokemon,
    SubDivConteudo,
    Text
} from "./style";
import ReactModal from "react-modal";
ReactModal.setAppElement('#root');
export const PokeModal = ({onRequestClose, Pokemon, Background, TextColor}) => {
    const {
        id,
        nome,
        img,
        type,
        stats
    } = Pokemon

    return (
        <DivModal key={id}>
            <DivConteudoModal background={Background}>
                <DivSubModal textColor={TextColor}>
                    <Text textColor={TextColor}>Detalhes</Text>
                    <ImgClose textColor={TextColor}
                        onClick={onRequestClose}/>
                </DivSubModal>
                <DivConteudo>
                    <SubDivConteudo>
                        <ImgPokemon src={img}/>
                        <DivSubModal>
                            <Text Right="10px">#{id}</Text>
                            <Text textColor={TextColor}>
                                {nome} </Text>
                        </DivSubModal>

                        <DivTypePokemon> {
                            type.map((e) => {
                                return <Text Right="20px" Size="20px"
                                    textColor={TextColor}>
                                    {e}</Text>
                        })
                        }</DivTypePokemon>
                    </SubDivConteudo>
                </DivConteudo>
                <DivConteudo>
                    <SubDivConteudo >
                        <h1>Estatistica</h1>
                    </SubDivConteudo>
                    <SubDivConteudo >
                        <h1>Ataques</h1>
                    </SubDivConteudo>
                </DivConteudo>


            </DivConteudoModal>
        </DivModal>


    )
};
