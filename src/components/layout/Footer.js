import React from 'react';
import styled from 'styled-components'
import { Logo, SocialLink, Icon, MenuList, StyledNavItem } from '../../styles/Theme'
import logo2 from '../../img/logo@2x.png'
import { device } from '../../styles/Device'

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
  
`
const FooterMenuTitile = styled.h3`
    color: #D98B30;
`
const FooterMenuList = styled(MenuList)`
    width: 100%;
    color: #fff;
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
const Footer = () => {
    return (
        <FooterWrap>
            <Wrapper>
                <FooterMenuTitile>Menu</FooterMenuTitile>
                <FooterMenuList>
                            <FooterStyledNavItem onClick={() => this.handleScroolTo('about')}>O nas</FooterStyledNavItem>
                            <FooterStyledNavItem onClick={() => this.handleScroolTo('projects')}>Projekty</FooterStyledNavItem>
                            <FooterStyledNavItem onClick={() => this.handleScroolTo('contact')}>Kontkat</FooterStyledNavItem>
                            <FooterStyledNavItem onClick={() => this.handleScroolTo('contact')}>Polityka prywatności</FooterStyledNavItem>
                            <FooterStyledNavItem onClick={() => this.handleScroolTo('contact')}>Polityka cookie</FooterStyledNavItem>
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