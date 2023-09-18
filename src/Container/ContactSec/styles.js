import styled from 'styled-components';

export const ContactContainer = styled.section`
    color: #fff;
    background: #eee;
    min-height: 650px;
    padding-top: 2rem;

    
    @media screen and (max-width: 768px)
    {
        padding: 100px 0;
    }

    
`;

export const ContactWraper = styled.div`
    
    
`;

export const ContactRow = styled.tr`
    display: grid;
    grid-template-columns: 60% 40%;
    width: 100%;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
    }

`;

export const ContactCell = styled.th`
    display: flex;
    align-items: center;
    justify-content: center;
`;



export const Form = styled.form`
    width: 90%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 50px 32px;
    align-items: center;

    @media screen and (max-width: 420px)
    {
        padding: 30px 12px;
    }

    @media screen and (max-width: 300px)
    {
        padding: 25px 7px;
    }
`;


export const FormLabel = styled.label`
    font-size: 20px;
    font-weight: lighter;
    color: #fff;


    &:hover{ 
        transition: all 0.2s ease-in-out;
        color: #00062b;
       
    }

    @media screen and (max-width: 472px){
        font-size: 18px;
    }

    @media screen and (max-width: 417px){
        font-size: 16px;
    }

    @media screen and (max-width: 382px){
        font-size: 14px;
    }
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
`;

export const FormButton = styled.button`
    background: #00062b;
    padding: 16px 0;
    border-radius: 5px;
    border: 2px;
    border-color: #00062b;
    border-style: solid;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    width: 50%;

    &:hover{ 
        transition: all 0.2s ease-in-out;
        color: #ff5412;
       
    }


    @media screen and (max-width: 1055px){
        font-size: 18px;
    }
    
    @media screen and (max-width: 472px){
        font-size: 15px;
    }

    @media screen and (max-width: 417px){
        font-size: 13px;
    }

    @media screen and (max-width: 382px){
        font-size: 12px;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const CellContainer1 = styled.div`
    background-color: #ff5412;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;

`;

export const CellTitle = styled.div`
    font-size: 25px;
    color: #fff;
    margin-bottom: 30px;
    font-weight: bold;
    font-family: 'Quicksand', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1.4px;

    @media screen and (max-width: 1206px){
        font-size: 23px;
    }

    @media screen and (max-width: 1030px){
        font-size: 21px;
    }

    @media screen and (max-width: 944px){
        font-size: 20px;
    }

    @media screen and (max-width: 911px){
        font-size: 19px;
    }
    
    @media screen and (max-width: 350px){
        font-size: 17px;
    }

    @media screen and (max-width: 320px){
        font-size: 15px;
    }
`

export const CellContainer2 = styled.div`
    background-color: #00062b;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;

   
`;


export const CellRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
`;

export const LinkIcon = styled.a`
    color: #eee;
    margin-bottom: 5px;
    font-size: 35px;
    font-family: 'Quicksand', sans-serif;
    cursor: pointer;
    text-decoration:none;
    margin-right: 2rem;
    transform: translate( 50%);

    &:hover {
        color: #ff5412;
        transition: 200ms ease-in;
    }

`

export const LinkExterno = styled.a`
    color: #eee;
    margin-bottom: 20px;
    font-size: 18px;
    font-family: 'Quicksand', sans-serif;
    cursor: pointer;
    text-decoration:none;
    
    

    &:hover {
        color: #ff5412;
        transition: 200ms ease-in;
    }


    @media screen and (max-width: 1030px){
        font-size: 15px;
    }


    @media screen and (max-width: 350px){
        font-size: 14px;
    }
  
    @media screen and (max-width: 320px){
        font-size: 12px;
    }
`

export const CellFrame = styled.iframe`
    width: 100%;
    height: 300px;
    margin-bottom: 1rem;
`