import React from 'react';
import styled from 'styled-components'
import { Logo, SocialLink, Icon, MenuList, StyledNavItem } from '../../styles/Theme'
import logo2 from '../../img/logo@2x.png'
import { device } from '../../styles/Device'
import { Link } from 'react-router-dom'

const FooterWrap = styled.footer`
    display: inline-grid;
    grid-template-columns: 1fr;
    width: 100%;
    background-color: #474644;
    padding: 20px;
@media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
}
`
const FooterLogo = styled(Logo)`
    width: 70px;

@media ${device.laptop} {
    width: 100px;
    margin: 8px 0;
}

    `
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
@media ${device.laptop} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* width: 100%; */
}
`
const WrapperCopyright = styled(Wrapper)`
    align-items: center;
    justify-content: center;
`
const WrapperSocial = styled(Wrapper)`
    display: none;
    @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    }

`
const Copyright = styled.p`
    font-size: 0.9em;
    color: #fff;
    margin: 0;
  
`
const FooterMenuTitile = styled.h3`
    color: #D98B30;
`
const FooterMenuList = styled(MenuList)`
    width: 100%;
    color: #fff;
    padding: 8px 0;
    @media ${device.laptop} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    }
    `
const FooterStyledNavItem = styled(StyledNavItem)`
    margin-bottom: 2px;
    @media ${device.laptop} {
        padding: 0;
        margin: 6px 12px;
    }
    `
const LinkTo = styled(Link)`
    text-decoration: none;
    color: #fff;
    &:hover {
        color: #D98B30;
    }
`
   const handleScroolTo = (name) => {
        const element = document.getElementById(name);
        element.scrollIntoView();
    }
const Footer = () => {
    return (
        <FooterWrap>
            <Wrapper>
                <FooterMenuTitile>Menu</FooterMenuTitile>
                <FooterMenuList>
                            <FooterStyledNavItem onClick={() => handleScroolTo('about')}>O nas</FooterStyledNavItem>
                            <FooterStyledNavItem onClick={() => handleScroolTo('projects')}>Projekty</FooterStyledNavItem>
                            <FooterStyledNavItem onClick={() => handleScroolTo('contact')}>Kontkat</FooterStyledNavItem>
                            <FooterStyledNavItem><LinkTo to="/politykaprywatnosci">Polityka prywatności</LinkTo></FooterStyledNavItem>
                        </FooterMenuList>
            </Wrapper>
            <WrapperCopyright>
                <FooterLogo src={logo2} alt="logo"></FooterLogo>
                <Copyright>Doris Design Services Copyright @2019</Copyright>
            </WrapperCopyright>
            <WrapperSocial>
            <SocialLink><a href="https://www.facebook.com/dorisdesignservices/" target="
                            _blank" ><Icon className="fab fa-facebook-square"></Icon></a></SocialLink>
                            <SocialLink><a href="https://www.instagram.com/dorisdesignservices/" target="
                            _blank"><Icon className="fab fa-instagram"></Icon></a></SocialLink>
            </WrapperSocial>

        </FooterWrap>
    );
}

export default Footer;