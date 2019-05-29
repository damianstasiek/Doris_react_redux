import React from 'react';
import About from './About'
import ProjectList from '../projects/ProjectList'
import Contact from './Contact';

const MainPage = () => {
    return (
        <>
            <About />
            <ProjectList />
            <Contact />
        </>
    );
}

export default MainPage;