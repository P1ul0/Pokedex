import styled from "styled-components";

export const DivLoad = styled.div`
  height: ${({tamanhoH}) =>  tamanhoH ? tamanhoH :  "100vh" };
  width: ${({tamanhoW}) =>  tamanhoW ? tamanhoW :  "100vw" } ;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({background}) => background ? background : "#54defd"};
  background: ${({background}) => background ? background : "linear-gradient(180deg, #54defd 0%, rgba(9, 9, 121, 1) 62%)"};
  border-radius: ${({border}) => border ? border : "none"} ;
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