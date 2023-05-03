import { DivLoad, Load } from "./style";

export const LoadGlobal = ({TamanhoH , TamanhoW, Background , Border}) => {
  return (
    <>
      <DivLoad tamanhoW ={TamanhoW} tamanhoH={TamanhoH} background={Background} border ={Border}>
        <Load />
      </DivLoad>
    </>
  );
};
