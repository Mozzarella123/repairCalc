import * as React from 'react';
import { connect } from 'react-redux';
import { MainComponent } from './MainComponent';
import AppState from "../duck/state";

export const MainContainer = connect(
    ({main : state}: AppState) => ({
        project: state.project
    }),
    null
)(MainComponent);
