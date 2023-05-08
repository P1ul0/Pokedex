import { BtnFavorito } from "../BtnFavorito";
import {
  DivConteudo,
  DivConteudoModal,
  DivModal,
  DivScroll,
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
  bgColor,
  getTextColor,
}) => {
  const { id, nome, img, type, stats } = Pokemon;

  return (
    <DivModal key={id}>
      <DivConteudoModal background={bgColor}>
        <DivSubModal textColor={getTextColor(bgColor)}>
          <Text textColor={getTextColor(bgColor)}>Detalhes</Text>
          <ImgClose
            textColor={getTextColor(bgColor)}
            onClick={onRequestClose}
          />
        </DivSubModal>
        <DivConteudo>
          <SubDivConteudo>
            <ImgPokemon src={img} />
            <DivSubModal>
              <Text textColor={getTextColor(bgColor)} Right="10px">
                #{id}
              </Text>
              <Text textColor={getTextColor(bgColor)}>{nome}</Text>
              <BtnFavorito
                bgColor={bgColor}
                getTextColor={getTextColor}
                id={id}
              />
            </DivSubModal>

            <DivTypePokemon>
              {" "}
              {type.map((e) => {
                return (
                  <Text
                    Right="20px"
                    Size="20px"
                    textColor={getTextColor(bgColor)}
                  >
                    {e}
                  </Text>
                );
              })}
            </DivTypePokemon>
          </SubDivConteudo>
          <DivScroll color={getTextColor(bgColor)} >
            <DivStats>
              <DivTitle>
                <Text textColor={getTextColor(bgColor)} Bottom="10px">
                  Estatisticas
                </Text>
              </DivTitle>
              {stats.map((e) => {
                return (
                  <>
                    <Text textColor={getTextColor(bgColor)} Size="20px">
                      {e.name_stat} = {e.base}%
                    </Text>
                    <StatusBar percentual={e.base}></StatusBar>
                  </>
                );
              })}
            </DivStats>
          </DivScroll>
        </DivConteudo>
      </DivConteudoModal>
    </DivModal>
  );
};
