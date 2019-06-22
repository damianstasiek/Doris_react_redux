import styled from 'styled-components'
import bgImage from '../img/drawable-hdpi/doris-background.png'
import { size } from '../styles/Device'
import { device } from '../styles/Device'


export const Header = styled.header`
    background: url(${bgImage}) no-repeat center center fixed;
    background-size: cover;
    height: 100%;
    min-height: 100vh;
    `
export const SectionTitle = styled.h2`
    font-size: 2.2em;
    color: #D98B30;
    /* border-bottom: 1px solid #2C2C2C; */
    @media ${device.laptop} {
    width: 200px;  
    /* margin-bottom: 50px; */
    }
    `;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    min-height: 100vh;
    @media ${device.laptop} {
    padding: 100px 200px; 
    /* margin-bottom: 50px;  */
    min-height: auto;
    }`;
export const ProjectListWrapper = styled(Wrapper)`
    @media ${device.laptop} {
        padding: 100px 20px;
        background-color: #474644;
    } 
    `
export const Title = styled.h2`
    font-size: 2.2em;
    color: #D98B30;
    border-bottom: 1px solid #2C2C2C;
    `;
export const Paragraph = styled.p`
    color: #717171;
    font-size: 1em;
    margin: 0;
    padding: 4px 0;

    @media ${device.laptop} {
    padding: 40px 0;
    width: 50%;
    }`;
export const Bold = styled.span`
    font-weight:bold;
    `;
export const Button = styled.button`
    font-family: 'Georgia';
    font-weight: bold;
    color: #2C2C2C;
    width: 150px;
    margin: 20px 0;
    padding: 8px;
    border-radius: 18px;
    background-color: #D98B30;
    border: none;
    `
export const BackButton = styled(Button)`
    background-color: transparent;
    margin: 0;
`
export const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 80px 0; */
`
export const LogoAbout = styled.img`
    width: 200px;
`
export const ProjectWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    @media ${device.laptop} {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }`;