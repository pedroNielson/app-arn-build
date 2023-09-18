import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'

export const Placas = styled.section`
    height: 100vh !important;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-image: url("https://img.freepik.com/free-photo/specialist-technician-professional-engineer-with-laptop-tablet-maintenance-checking-installing-solar-roof-panel-factory-rooftop-sunlight-engineers-team-survey-check-solar-panel-roof_609648-2195.jpg?w=1060&t=st=1664486576~exp=1664487176~hmac=3aa89d9a8304d34513710c5be62197ffbe6376f2694ae2ecf9c25bba98b6505e");


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

export const Text = styled.text`
    color: #fff;
    text-align: center;
    font-size: 85px;
    z-index: 10;
    text-transform: uppercase;
    font-family: 'Quicksand', sans-serif;
`

export const SubText = styled(LinkR)`
    color: #fff;
    text-align: center;
    font-size: 45px;
    z-index: 10;
    text-decoration: none;
    font-family: 'Quicksand', sans-serif;

    &.hover {
        color: #ff5412;
    }
`