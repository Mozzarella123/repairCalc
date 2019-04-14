import * as React from 'react';
import { connect } from 'react-redux';
import { createProject } from './duck/actions';
import { AppState } from './duck/reducers';
import { MainComponent } from './MainComponent';
import { AddProjectForm } from './AddProjectForm';

export const AddProjectFormContainer = connect(
    null,
    dispatch => ({
        onCreateProject: (title: string) => dispatch(createProject(title))
    })
)(AddProjectForm);
