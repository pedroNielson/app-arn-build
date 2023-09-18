import styled from 'styled-components';
import img2 from '../../Images/plates.jpg'

export const Placas = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-image: url(${img2});


    &:after {
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 4;
        background: linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100%);
    }
`
export const Container = styled.div`
    width: 100%;
    margin: 0 auto;

`

export const Text = styled.h1`
    color: #fff;
    text-align: center;
    font-size: 120px;
    z-index: 10;
    text-transform: uppercase;
    font-family: 'Quicksand', sans-serif;

    @media screen and (max-width: 1450px){
        font-size: 110px;
    }

    @media screen and (max-width: 1330px){
        font-size: 105px;
    }

    @media screen and (max-width: 1070px){
        font-size: 100px;
    }

    @media screen and (max-width: 950px){
        font-size: 95px;
    }


    @media screen and (max-width: 700px){
        font-size: 90px;
    }

    @media screen and (max-width: 580px){
        font-size: 85px;
    }
    @media screen and (max-width: 550px){
        font-size: 80px;
    }
    @media screen and (max-width: 515px){
        font-size: 75px;
    }
    @media screen and (max-width: 483px){
        font-size: 70px;
    }

    @media screen and (max-width: 455px){
        font-size: 65px;
    }
    @media screen and (max-width: 424px){
        font-size: 60px;
    }
    @media screen and (max-width: 395px){
        font-size: 55px;
    }

    @media screen and (max-width: 362px){
        font-size: 52px;
    }

    @media screen and (max-width: 344px){
        font-size: 47px;
    }

    @media screen and (max-width: 315px){
        font-size: 43px;
    }

    @media screen and (max-width: 288px){
        font-size: 40px;
    }
`