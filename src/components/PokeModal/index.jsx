import { BtnFavorito } from "../BtnFavorito";
import {
  DivConteudo,
  DivConteudoModal,
  DivModal,
  DivStats,
  DivSubModal,
  DivTitle,
  DivTypePokemon,
  ImgClose,
  ImgPokemon,
  StatusBar,
  SubDivConteudo,
  Text,
} from "./style";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");
export const PokeModal = ({
  onRequestClose,
  Pokemon,
  Background,
  TextColor,
}) => {
  const { id, nome, img, type, stats } = Pokemon;

  return (
    <DivModal key={id}>
      <DivConteudoModal background={Background}>
        <DivSubModal textColor={TextColor}>
          <Text textColor={TextColor}>Detalhes</Text>
          <ImgClose textColor={TextColor} onClick={onRequestClose} />
        </DivSubModal>
        <DivConteudo>
          <SubDivConteudo>
            <ImgPokemon src={img} />
            <DivSubModal>
              <Text textColor={TextColor} Right="10px">
                #{id}
              </Text>
              <Text textColor={TextColor}>{nome} </Text>
            </DivSubModal>

            <DivTypePokemon>
              {" "}
              {type.map((e) => {
                return (
                  <Text Right="20px" Size="20px" textColor={TextColor}>
                    {e}
                  </Text>
                );
              })}
            </DivTypePokemon>
          </SubDivConteudo>
          <DivStats>
            <DivTitle>
            <Text textColor={TextColor} Bottom="10px" >Estatisticas</Text>
            </DivTitle>
            {stats.map((e) => {
              return (
                <>
                  <Text textColor={TextColor} Size="20px">
                    {e.name_stat} = {e.base}%
                  </Text>
                  <StatusBar percentual={e.base}></StatusBar>
                </>
              );
            })}
          </DivStats>
        </DivConteudo>
      </DivConteudoModal>
    </DivModal>
  );
};
