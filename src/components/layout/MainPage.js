import React from 'react';
import About from './About'
import ProjectList from '../projects/ProjectList'
import Contact from './Contact';
import MobileMenu from '../navigation/MobileMenu'
import { Header } from '../layout/Theme'

const MainPage = (props) => {
    console.log(props)
    return (
        <>  <Header />
            <MobileMenu />
            <About />
            <ProjectList />
            <Contact />
        </>
    );
}

export default MainPage;