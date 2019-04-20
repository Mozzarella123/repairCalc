import * as React from 'react';
import { connect } from 'react-redux';
import { MainComponent } from './MainComponent';
import AppState from "../redux/AppState";

export const MainContainer = connect(
    ({main : state}: AppState) => ({
        project: state.project
    }),
    null
)(MainComponent);
