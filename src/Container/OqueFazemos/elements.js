import styled from 'styled-components';


export const InfoContainer = styled.div`
    color: #fff;
    background: #eee;

    @media screen and (max-width: 768px)
    {
        padding: 100px 0;
    }
    
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 650px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    
    
`;


export const Col1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    
    

`;

export const Col2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    
`;


export const InfoRow = styled.div`
    
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};


    @media screen and (max-width: 768px){
        grid-template-areas:  ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1' 'col1' 'col2 col2'`)};
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    margin-left: 80px;

`;

export const ImageWraper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    height: 100%;
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


