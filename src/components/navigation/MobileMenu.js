import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../img/drawable-hdpi/logo_szerokie.png'
import fb from '../../img/facebook.svg'
import tw from '../../img/twitter.svg'
import posed from 'react-pose';
import Hamburger from './Hamburger'
import { Header } from '../../styles/Theme'
import { size } from '../../styles/Device'
import { device } from '../../styles/Device'

const NavigationWrapper = styled.div`
    position: fixed;
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
    padding: 20px 60px;
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
    overflow-y: hidden;
    
    @media ${device.laptop} {
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 50px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
  }

    `
const LogoLink = styled(Link)`
    z-index: 999;
`
const Logo = styled.img`
    width: 230px;
    height: auto;
    z-index: 99;
    `
const MenuList = styled.ul`
    margin: 0;
    padding: 0;

    @media ${device.laptop} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 60%;

  }
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
    padding: 0 22px;

    @media ${device.laptop} {
        margin-bottom: 0;
    }
    `
const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 60px;
    `
const SocialLink = styled.span`
    display: block;
    padding: 20px 12px;
`
const HeaderTtile = styled.h1`
    position: absolute;
    top: 45%;
    left: 200px;
    color: white;
    font-size: 4em;
    `
class MobileMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuOpen: false,
            isLaptop: false
        }
        this.myRef = React.createRef()
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    handleMenuToggle = () => {
        if (window.innerWidth < size.laptop) {
            this.setState({
                isMenuOpen: !this.state.isMenuOpen
            });
        }
    }
    handleScroolTo = (name) => {
        if (window.innerWidth < size.laptop) {
            this.setState({
                isMenuOpen: false
            })
        }
        const element = document.getElementById(name);
        element.scrollIntoView();
    }
    updateWindowDimensions = () => {
        console.log(window.innerWidth)
        if (window.innerWidth >= size.laptop) {
            this.setState({ isLaptop: true, isMenuOpen: true });
        } else {
            this.setState({ isLaptop: false, isMenuOpen: false });
        }
    }

    render() {
        console.log(size.laptop)
        console.log(this.props)
        const { isMenuOpen, isLaptop } = this.state;
        console.log(isLaptop)
        console.log(isMenuOpen)
        return (
            <Header>
                {isLaptop ? <HeaderTtile>Doris Design Service</HeaderTtile> : null}
                <NavigationWrapper>
                    <LogoLink to="/"><Logo src={logo}></Logo></LogoLink>
                    <StyledMenuWrapper pose={isMenuOpen ? 'open' : 'closed'}>
                        <MenuList>
                            <StyledNavItem onClick={() => this.handleScroolTo('about')}>O nas</StyledNavItem>
                            <StyledNavItem onClick={() => this.handleScroolTo('projects')}>Projekty</StyledNavItem>
                            <StyledNavItem onClick={() => this.handleScroolTo('contact')}>Kontkat</StyledNavItem>
                        </MenuList>
                        <SocialWrapper>
                            <SocialLink><Link to="/"><img src={fb} alt="facebook"></img></Link></SocialLink>
                            <SocialLink><Link to="/"><img src={tw} alt="twitter"></img></Link></SocialLink>
                        </SocialWrapper >
                    </StyledMenuWrapper >
                    <Hamburger onClick={this.handleMenuToggle} isMenuOpen={isMenuOpen} />
                </NavigationWrapper>
            </Header>
        )
    }
}



export default MobileMenu;