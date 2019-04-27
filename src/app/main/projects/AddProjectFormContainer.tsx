import * as React from 'react';
import { connect } from 'react-redux';
import { MainComponent } from '../MainComponent';
import { AddProjectForm } from './AddProjectForm';
import {createProject} from "../duck/actions";

export const AddProjectFormContainer = connect(
    null,
    dispatch => ({
        onCreateProject: (title: string) => dispatch(createProject(title))
    })
)(AddProjectForm);
