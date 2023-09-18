import styled from 'styled-components';


export const InfoContainer = styled.div`
    color: #fff;
    background: #eee;
    
    min-height: 1300px;
    @media screen and (max-width: 768px)
    {
        padding: 100px 0;
    }

`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    
`;


export const Col1 = styled.div`
    padding-right: 50px;
    

`;

export const Col2 = styled.div`
    padding: 0 15px;
    
`;


export const InfoRow = styled.div`
    
    display: grid;
    margin-bottom: 50px;
    margin-top: 50px;
    grid-template-columns: 50% 50%;
    width: 100%;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    margin-left: 50px;

`;

export const TopLine = styled.p`
    color: #00062b;    
    font-size: 17px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

`;

export const Img = styled.img`
    width: 100%;
    height: 100%;

    object-fit:contain;
    object-position:50% 50%;

`;


export const ImageWraper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    height: 100%;
`;




export const Heading = styled.h1`
    color: #ff5412;
    margin-bottom: 24px;
    font-size: 50px;
    line-height: 1.1;
    font-weight: 600;
    text-transform: uppercase;
    font-family: 'Quicksand', sans-serif;
    color: ${({ lightText }) => (lightText ? '#f9f9f9' : '010606')};


    @media screen and (max-width: 480px)
    {
        font-size: 32px;

    }
`;

export const Subtitle = styled.p`
    color: #000;    
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    text-align: justify;
    font-family: 'Work Sans', sans-serif;
    font-weight: bold;
    

`;
export const Subtitle2 = styled.p`
    color: #000;    
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    text-align: justify;
    font-family: 'Work Sans', sans-serif;
    font-weight: bold;
    

`;
