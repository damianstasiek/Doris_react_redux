import styled from 'styled-components'
import bgImage from '../img/drawable-hdpi/doris-background.png'
import { device } from '../styles/Device'


export const Header = styled.header`
    background: url(${bgImage}) no-repeat center center fixed;
    background-size: cover;
    height: 100%;
    min-height: 100vh;
    `
export const ProjectHeader = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    `
export const SectionTitle = styled.h2`
    font-size: 2.2em;
    color: #D98B30;
    @media ${device.laptop} {
    width: 100%  
    }`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    min-height: 100vh;
    @media ${device.laptop} {
    padding: 100px 200px; 
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
`
export const LogoAbout = styled.img`
    width: 200px;
`
export const Logo = styled.img`
    width: 230px;
    height: auto;
    z-index: 10;
    @media ${device.laptop} {
    width: 70px;
    z-index: auto;
    }`

export const SocialLink = styled.span`
    display: block;
    padding: 20px 12px;
    &:hover {
        color: #fff;
    }
`
export const Icon = styled.i`
    font-size: 30px;
    color: #fff;
    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }`
export const MenuList = styled.ul`
    margin: 0;
    padding: 0;
    @media ${device.laptop} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 60%;
    }
`
export const StyledNavItem = styled.li`
    list-style: none;
    margin-bottom: 40px;
    &:hover {
        color: #D98B30;
        cursor: pointer;
    }

    @media ${device.laptop} {
        margin-bottom: 0;
        padding: 0 22px;
        &:hover {
            transform: scale(1.2);
        }
    }
    `
export const ProjectWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    @media ${device.laptop} {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }`;