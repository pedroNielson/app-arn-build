import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

import banner from './drone3.jpg'
import banner2 from './plates.jpg'

export const FormContainer = styled.div`
    overflow: hidden;
    z-index: 0;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-image: linear-gradient(
    to bottom,
    rgba(249,154,86,1),
    rgba(0, 0, 255, 0.5)
  ), url(${banner});
    

`;



export const FormWrap = styled.div`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    @media screen and (max-width: 400px){
        height: 80%
    }
    
`;


export const FormContent = styled.div`
   
    display: flex;
    flex-direction: column;
    justify-content: center;


    @media screen and (max-width: 480px){
        padding: 10px;
    }
`;

export const TitleSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h3`
    text-align: center;
    font-size: 70px;
    font-family: 'Quicksand', sans-serif;
    color: #00062b;
    margin-bottom: 10px;
    font-weight: bold;
    letter-spacing: 1.4px;

`;

export const BackLink = styled(LinkR)`
    color: black;
    font-size: 32px;
    font-family: 'Quicksand', sans-serif;
    cursor: pointer;
    text-decoration:none;
    

    &:hover {
        color: #fff;
        transition: 200ms ease-in;
    }

`

export const Description = styled.p`
   text-align: center;
    font-size: 30px;
    font-family: 'Quicksand', sans-serif;
    color: #00062b;
    margin-bottom: 10px;
    
    
`;

export const Form = styled.form`
    background: #fff;
    height: 90%;
    align-items: center;
    width: 800px;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 50px 32px;
    border-radius: 5px;
    
    
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`;


export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 18px;
    color: #000;

`;

export const FormInput = styled.input`
    margin-bottom: 20px;
    border-radius: 4px;
    border: 1px;
    border-color: #000;
    border-style: solid;
    padding: 15px 15px;
    background: #eee;
`;

export const FormButton = styled.button`
    background: #00062b;
    padding: 16px 0;
    margin-top: 10px;
    border-radius: 4px;
    border: 2px;
    border-color: #00062b;
    border-style: solid;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    font-family: 'Quicksand', sans-serif;
    
    
    &:hover{ 
        transition: all 0.2s ease-in-out;
        color: #fff;
        background: #ff5412;
        border-color: #ff5412;
        
    }


`;

export const FormSelect = styled.select`
    margin-bottom: 15px;
    
`;


