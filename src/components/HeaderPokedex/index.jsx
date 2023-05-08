import { useNavigate } from "react-router-dom";
import { DivSuperiorPokedex, ImgBack, BtnBack, TitlePokedex } from "./style";

export const HeaderPokedex = ({Title}) => {
  const navigate = useNavigate();

  const hadleClickBack = () => {
    navigate("/Perfil");
  };

  return (
    <DivSuperiorPokedex>
      <BtnBack onClick={hadleClickBack}>
        <ImgBack />
      </BtnBack>
      <TitlePokedex>{Title}</TitlePokedex>
    </DivSuperiorPokedex>
  );
};
