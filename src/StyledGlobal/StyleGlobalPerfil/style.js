import styled from "styled-components";

export const ContainerGlobal = styled.div`
  height: 100vh;
  display: flex;
  justify-content:center;
  align-items: center;
  background: #54defd;
  background: linear-gradient(180deg, #54defd 0%, rgba(9, 9, 121, 1) 62%);
`

export const SubContainerGlobal = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items:center;
  background-color: #54defd;
  border-radius: 20px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 15px;
`;

export const Title= styled.p`
  position: relative;
  top: -70px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  font-family: 'Nunito', sans-serif;
  color: #000000;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  border: none;
  background-color: #000000;
  color: #54defd;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;
`;

export const DivImg = styled.div`
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
export const DivAlternativo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  /* background-color: #54defd;
    filter: blur(10px) */
`;
export const Text = styled.p`
  color: #000000;
  font-size: 30px;
  font-weight: bolder;
  font-family: 'Nunito', sans-serif;
  /* z-index: 5; */
`;
export const ButtonAlternativo = styled.button`
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




