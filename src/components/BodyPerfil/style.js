import styled from "styled-components";

export const ContainerPerfil = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #54defd;
  background: linear-gradient(180deg, #54defd 0%, rgba(9, 9, 121, 1) 62%);
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const SubContainerBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 300px;
`;

export const TextPerfil = styled.p`
  margin-top: 5px;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;
export const ImgPerfil = styled.img`
  height: 400px;
  width: 400px;
  object-fit: contain;
`;

export const BtnPerfil = styled.button`
    height: 40px;
    width: 500px;
    border-radius: 20px;
    font-size: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    background: rgb(131,58,180);
background: linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
`
