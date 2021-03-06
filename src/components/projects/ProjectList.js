import React, { Component } from 'react';
import ProjectSummary from './ProjectSummary'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { ProjectListWrapper, SectionTitle, ProjectWrapper } from '../../styles/Theme'

class ProjectList extends Component {
    render() {
        const { projects } = this.props;
        return (
            <ProjectListWrapper id="projects">
                <SectionTitle>Projekty</SectionTitle>
                <ProjectWrapper>
                    {projects && projects.map(project => {
                        return (
                            <Link to={"/project/" + project.id} key={project.id}>
                                <ProjectSummary project={project} />
                            </Link>
                        )
                    })}
                </ProjectWrapper>
            </ProjectListWrapper >
        )
    }
}

const mapStateToProps = (state) => {
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

