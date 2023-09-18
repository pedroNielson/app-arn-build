import styled from 'styled-components';

export const ContactContainer = styled.div`
    color: #fff;
    background: #eee;
    min-height: 770px;

    
    @media screen and (max-width: 768px)
    {
        padding: 100px 0;
    }

`;

export const ContactRow = styled.tr`
    
    display: grid;
    grid-template-columns: 30% 70%;
    width: 100%;

`;

export const ContactCell = styled.th`
    
    display: flex;
    align-items: center;
    justify-content: center;

    

`;



export const ContactHeader = styled.h1`
    text-align: center;
    font-size: 60px;
    font-family: 'Quicksand', sans-serif;
    color: #00062b;
    margin-bottom: 10px;
    font-weight: bold;
    letter-spacing: 1.4px;

    @media screen and (max-width: 1420px){
        margin-bottom: 20px;
    }

    @media screen and (max-width: 1300px){
        margin-bottom: 40px;
    }

    @media screen and (max-width: 1180px){
        margin-bottom: 50px;
    }

    @media screen and (max-width: 1060px){
        margin-bottom: 53px;
    }

    @media screen and (max-width: 940px){
        margin-bottom: 53px;
    }

`;

export const Form = styled.form`
    background: #fff;
    max-width: 450px;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 50px 32px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    align-items: center;

    @media screen and (max-width: 1420px){
        max-width: 425px;
    }

    @media screen and (max-width: 1300px){
        max-width: 400px;
    }

    @media screen and (max-width: 1180px){
        max-width: 375px;
    }

    @media screen and (max-width: 1060px){
        max-width: 350px;
    }

    @media screen and (max-width: 940px){
        max-width: 325px;
    }
`;


export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 18px;
    color: #000;
`;

export const FormInput = styled.input`
    margin-bottom: 28px;
    border-radius: 4px;
    border: 1px;
    border-color: #000;
    border-style: solid;
    padding: 15px 15px;
    background: #eee;
`;

export const FormButton = styled.button`
    background: #ff5412;
    padding: 16px 0;
    border-radius: 5px;
    border: 2px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    &:hover{ 
        transition: all 0.2s ease-in-out;
        color: #00062b;
        background: #fff;
        border-color: #00062b;
        border-style: solid;
        
    }
`;


