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
  top: -70px;
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




