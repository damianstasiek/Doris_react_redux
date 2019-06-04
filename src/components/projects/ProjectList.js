import React, { Component } from 'react';
import ProjectSummary from './ProjectSummary'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Wrapper, Title } from '../../styles/Theme'

class ProjectList extends Component {
    render() {
        const { projects } = this.props;
        console.log(projects)
        return (
            <Wrapper id="projects">
                <Title>Projekty</Title>
                {projects && projects.map(project => {
                    return (
                        <Link to={"/project/" + project.id} key={project.id}>
                            <ProjectSummary project={project} />
                        </Link>
                    )
                })}
            </Wrapper >
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectList);

