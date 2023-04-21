import styled from "styled-components";

export const ContainerLogin = styled.div`
    height: 700px;
    width: 800px;
    display: flex;
    flex-direction:row-reverse;
    background-color:#FE6F5E;
    border-radius: 20px
`
export const CompletedLogin= styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    margin-right:15px;
` 

export const TitleLogin = styled.p`
    position: relative;
    top: -100px;
    font-size: 40px;
    font-weight:bold;
    text-align: center;
    color: #FAEBD7;
`
export const DivInput = styled.div`
    display: flex;
    flex-direction:column;
    
    `
export const InputLogin = styled.input`
    width: 300px;
    height: 30px;
    outline: none;
    border: none;
    color: #FAEBD7 ;
    margin-top:20px;
    background-color: transparent;
    border-bottom: 2px solid #FAEBD7;
    &::placeholder{
        color: #FAEBD7;
    }
`

export const BtnLogin = styled.button`
    margin-top:20px;
    padding: 10px ;
    border: none;
    background-color: #FAEBD7;
    color: #FE6F5E;
    border-radius: 10px;
    cursor: pointer;
    margin-top:30px;
`
