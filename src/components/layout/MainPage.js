import React from 'react';
import About from './About'
import ProjectList from '../projects/ProjectList'
import Contact from './Contact';
import MobileMenu from '../navigation/MobileMenu'
import Footer from '../layout/Footer'

const MainPage = (props) => {
    return (
        <>
            <MobileMenu />
            <About />
            <ProjectList />
            <Contact />
            <Footer />
        </>
    );
}

export default MainPage;