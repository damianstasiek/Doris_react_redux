import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../img/drawable-hdpi/logo_szerokie.png'
import fb from '../../img/facebook.svg'
import tw from '../../img/twitter.svg'
import posed from 'react-pose';

import Hamburger from './Hamburger'

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
`
const MenuWrapper = posed.nav({
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
    `
const Logo = styled.img`
    width: 230px;
    height: auto;
    `
const MenuList = styled.ul`
    margin: 0;
    padding: 0;
    `
const NavItem = posed.li({
    open: { opacity: 1 },
    closed: { opacity: 0 }
})
const StyledNavItem = styled(NavItem)`
    list-style: none;
    margin-bottom: 40px;
    `
const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    `
const SocialLink = styled.span`
    display: block;
    padding: 20px 12px;
`
class MobileMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuOpen: false
        }
        this.myRef = React.createRef()
    }


    handleMenuToggle = () => {
        console.log('click')
        this.setState({
            isMenuOpen: !this.state.isMenuOpen,
        });
    }
    handleScroolTo = (name) => {
        console.log('scroll')
        this.setState({
            isMenuOpen: false
        })
        const element = document.getElementById(name)
        element.scrollIntoView()
        // window.setTimeout(() => { window.scrollTo(0, 1000) }, 210)

    }

    render() {
        const { isMenuOpen } = this.state;
        return (
            <NavigationWrapper>
                <Link to="#"><Logo src={logo}></Logo></Link>
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
        )
    }
}



export default MobileMenu;