import React from 'react';
import About from './About'
import ProjectList from '../projects/ProjectList'
import Contact from './Contact';
import MobileMenu from '../navigation/MobileMenu'

const MainPage = (props) => {
    return (
        <>
            <MobileMenu />
            <About />
            <ProjectList />
            <Contact />
        </>
    );
}

export default MainPage;