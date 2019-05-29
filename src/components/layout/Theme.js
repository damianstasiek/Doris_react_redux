import styled from 'styled-components'
import bgImage from '../../img/drawable-hdpi/doris-background.png'

export const Header = styled.header`
    background: url(${bgImage}) no-repeat center center fixed;
    background-size: cover;
    height: 100%;
    min-height: 100vh;
    `
export const SectionTitle = styled.h2`
    font-size: 2.2em;
    color: #D98B30;
    border-bottom: 1px solid #2C2C2C;
    `;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    min-height: 100vh;
    `;
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
    `;
export const Bold = styled.span`
    font-weight:bold;
    `;