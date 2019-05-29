import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'


const ProjectItem = styled.div`
    position: relative;
    padding: 20px 0;
    `
const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: 8px;
    color: #fff;
    `
const Image = styled.img`
    width: 100%;
    border-radius: 12px;
    `
const ProjectTitle = styled.h3`
    margin: 0;
    font-size: 1.5em;
    /* color: #fff; */
    `
const CategoryTitle = styled.h4`
    margin: 0;
    font-size: .8em;
    `

const ProjectSummary = ({ project }) => {
    console.log(project)
    return (
        <ProjectItem>
            <Image src={project.img} alt="" />
            <Container>
                <ProjectTitle>{project.title}</ProjectTitle>
                <CategoryTitle>category</CategoryTitle>
            </Container>
        </ProjectItem>
    );
}
const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(ProjectSummary);