import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../img/drawable-hdpi/logo_szerokie.png'
import logo2 from '../../img/logo@2x.png'
import posed from 'react-pose';
import Hamburger from './Hamburger'
import { Header, Logo, SocialLink, Icon, MenuList } from '../../styles/Theme'
import { size } from '../../styles/Device'
import { device } from '../../styles/Device'
import CookieConsent from "react-cookie-consent";

const NavigationWrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    overflow: hidden;

    @media ${device.laptop} {
    padding: 0 20px;
    }
`
const MenuWrapper = posed.nav(
    props => props.isLaptop ?
        {
            open: { x: '0%' },
            close: { x: '0%' }
        } : {
            open: { x: '0%', delay: 200, staggerChildren: 200 },
            closed: { x: '-100%', delay: 200 }
        });
const StyledMenuWrapper = styled(MenuWrapper)`
    overflow-y: hidden;
    margin: 0;
    padding: 0;
    background-color: #fff;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    justify-content: center;
    background: #fff;
    
    @media ${device.laptop} {
    flex-direction: row;
    justify-content: flex-end;
    height: 100px;
    position: relative;
    background: transparent;
    color: white;
  }

    `
const LogoLink = styled(Link)`
    z-index: 999;
`

const NavItem = posed.li(
    props => props.isLaptop ?
        {
            open: { opacity: 1 },
            closed: { opacity: 1 }
        } : {
            open: { opacity: 1 },
            close: { opacity: 0 },
        })

const StyledNavItem = styled(NavItem)`
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
const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    `

const HeaderTtile = styled.h1`
    position: absolute;
    top: 45%;
    left: 200px;
    color: white;
    font-size: 4em;
    `
const ArrowIcon = styled(Icon)`
    display: none;
    @media ${device.laptop} {
        display: none;
        position: fixed;
        bottom: 210px;
        left: 95%;
        color: black;
        z-index: 999;
        font-size: 3em
    }
    `
class MobileMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuOpen: false,
            isLaptop: false,
            isChangeMenu: false,
        }
        this.myRef = React.createRef()
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('scroll', this.handleChangeMenu)
        window.addEventListener('scroll', this.handleUpdateArrow)
    }
    handleUpdateArrow = () => {
        let headerHeight = 0;
        const header = document.getElementById('header');
        if (header) {
            headerHeight = document.getElementById('header').offsetHeight
        }
        const ArrowIcon = document.getElementById('arrow');
        if (headerHeight - 100 <= window.scrollY) {
            return ArrowIcon ? ArrowIcon.style.display = "block" : null
        } else {
            return ArrowIcon ? ArrowIcon.style.display = "none" : null
        }
    }

    handleMenuToggle = () => {
        if (window.innerWidth < size.laptop) {
            this.setState({
                isMenuOpen: !this.state.isMenuOpen
            });
            document.body.style.overflow = "hidden"
        }
    }
    handleScroolTo = (name) => {
        if (window.innerWidth < size.laptop) {
            this.setState({
                isMenuOpen: false
            })
            document.body.style.overflow = "auto"
        }
        const element = document.getElementById(name);
        element.scrollIntoView();
    }
    updateWindowDimensions = () => {
        if (window.innerWidth >= size.laptop) {
            this.setState({ isLaptop: true, isMenuOpen: true });
        } else {
            this.setState({ isLaptop: false, isMenuOpen: false });
        }
    }


    render() {
        const { isMenuOpen, isLaptop } = this.state;
        return (
            <Header id="header">
                {isLaptop ? <HeaderTtile>Doris Design Service</HeaderTtile> : null}
                <NavigationWrapper>
                    <LogoLink to="/"><Logo src={isLaptop ? logo2 : logo} alt="logo"></Logo></LogoLink>
                    <StyledMenuWrapper pose={isMenuOpen ? 'open' : 'closed'}>
                        <MenuList>
                            <StyledNavItem onClick={() => this.handleScroolTo('about')}>O nas</StyledNavItem>
                            <StyledNavItem onClick={() => this.handleScroolTo('projects')}>Projekty</StyledNavItem>
                            <StyledNavItem onClick={() => this.handleScroolTo('contact')}>Kontkat</StyledNavItem>
                        </MenuList>
                        <SocialWrapper>
                            <SocialLink><a href="https://www.facebook.com/dorisdesignservices/" target="
                            _blank" ><Icon className="fab fa-facebook-square"></Icon></a></SocialLink>
                            <SocialLink><a href="https://www.instagram.com/dorisdesignservices/" target="
                            _blank"><Icon className="fab fa-instagram"></Icon></a></SocialLink>
                        </SocialWrapper >
                    </StyledMenuWrapper >
                    <Hamburger onClick={this.handleMenuToggle} isMenuOpen={isMenuOpen} />
                    <ArrowIcon onClick={() => this.handleScroolTo('header')} id="arrow" className="fas fa-arrow-circle-up"></ArrowIcon>
                </NavigationWrapper>
                <CookieConsent
                buttonText="Zgoda"
                buttonStyle={{ backgroundColor: "#D98B30", fontSize: "13px" }}
                >Ta strona korzysta z ciasteczek aby świadczy usługi na najwyższym poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie</CookieConsent>
            </Header >
        )
    }
}



export default MobileMenu;