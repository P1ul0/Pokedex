import styled from "styled-components";


export const ContainerLogin = styled.div`
  height: 550px;
  width: 700px;
  display: flex;
  flex-direction: row-reverse;
  background-color: #54defd;
  border-radius: 20px;
`;
export const CompletedLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 15px;
`;

export const TitleLogin = styled.p`
  position: relative;
  top: -100px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #000000;
`;

export const BtnLogin = styled.button`
  margin-top: 20px;
  padding: 10px;
  border: none;
  background-color: #000000;
  color: #54defd;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;
`;

export const DivImgLogin = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 35px;
  background-image: url(${(props) => props.img});
  border-radius: 20px;
  height: 550px;
  width: 350px;
  object-fit: contain;
`;
export const DivRigister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  /* background-color: #54defd;
    filter: blur(10px) */
`;
export const TextRegister = styled.p`
  color: #000000;
  font-size: 30px;
  font-weight: bolder;
  /* z-index: 5; */
`;
export const BtnRegister = styled.button`
  margin-top: 20px;
  width: 300px;
  height: 30px;
  border: none;
  background-color: #000000;
  color: #54defd;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;
`;
export const DivLoad = styled.div`
  height: 550px;
  width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Load = styled.div`
  /* margin-top: 250px; */
  width: 40px;
  height: 40px;
  color: #f03355;
  background: conic-gradient(
      from -45deg at top 20px left 50%,
      #0000,
      currentColor 1deg 90deg,
      #0000 91deg
    ),
    conic-gradient(
      from 45deg at right 20px top 50%,
      #0000,
      currentColor 1deg 90deg,
      #0000 91deg
    ),
    conic-gradient(
      from 135deg at bottom 20px left 50%,
      #0000,
      currentColor 1deg 90deg,
      #0000 91deg
    ),
    conic-gradient(
      from -135deg at left 20px top 50%,
      #0000,
      currentColor 1deg 90deg,
      #0000 91deg
    );
  animation: sh4 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
  @keyframes sh4 {
    50% {
      width: 60px;
      height: 60px;
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;



