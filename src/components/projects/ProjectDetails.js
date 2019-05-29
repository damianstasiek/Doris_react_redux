import React from 'react';
import { Wrapper } from '../layout/Theme'
import styled from 'styled-components'
import { connect } from 'react-redux'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px 0;
    border-bottom: 1px solid #2C2C2C;
    `;

const Title = styled.h2`
    font-size: 2.2em;
    color: #D98B30;
    margin: 0;
    `;
const CategoryTitle = styled.h4`
    margin: 0;
    font-size: .8em;
    color: #2C2C2C;
    `;
const ParametersWrap = styled.div`
    display: flex;
    justify-content: space-between;
    `
const Parameter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    `
const ParameterTitle = styled.h4`
    font-size: .8em;
    color: #9E9E9E;
    margin-bottom: 0;
    `
const InfoTitle = styled.p`
    font-size: .7em;
    font-weight: bold;
    /* text-align: center; */
    `
const Paragraph = styled.p`
    color: #2C2C2C;
    `;

const ProjectDetails = (props) => {
    const { project } = props;
    console.log(props)
    if (project) {
        return (
            <Wrapper>
                <Container>
                    <Title>{project.title}</Title>
                    <CategoryTitle>{project.category}</CategoryTitle>
                </Container>
                <ParametersWrap>
                    <Parameter>
                        <ParameterTitle>Powierzchnia</ParameterTitle>
                        <InfoTitle>13m^2</InfoTitle>
                    </Parameter>
                    <Parameter>
                        <ParameterTitle>Rok</ParameterTitle>
                        <InfoTitle>2018</InfoTitle>
                    </Parameter>
                    <Parameter>
                        <ParameterTitle>Lokalizacja</ParameterTitle>
                        <InfoTitle>Kraków</InfoTitle>
                    </Parameter>
                </ParametersWrap>
                <Paragraph>{project.content}</Paragraph>
            </Wrapper>
        )
    } else {
        return (
            <Wrapper>
                <Paragraph>Loading project...</Paragraph>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    const id = ownProps.match.params.id;
    const projects = state.project.projects
    console.log(projects)
    const project = projects ? projects[id - 1] : null;
    return {
        project: project
    }
}

export default connect(mapStateToProps)(ProjectDetails);