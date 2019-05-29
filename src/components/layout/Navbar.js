import React from 'react'
import MobileMenu from './MobileMenu'
import { Header } from './Theme'


const Navbar = () => {
    return (
        <Header>
            <MobileMenu />
        </Header>
    );
}

export default Navbar;