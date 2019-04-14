import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from './duck/reducers';
import { MainComponent } from './MainComponent';

export const MainContainer = connect(
    ({project}: AppState) => ({
        project
    }),
    null
)(MainComponent);
