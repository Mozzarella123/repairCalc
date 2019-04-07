import * as React from 'react';
import { connect } from 'react-redux';
import { setMenuTab } from './duck/actions';
import { AppState } from './duck/reducers';
import { MenuTab } from './duck/types';
import { MainComponent } from './MainComponent';





export const MainContainer = connect(
    (state: AppState) => ({
        currentTab: state.currentTab
    }),
    dispatch => ({
        setTab: (tab: MenuTab) => dispatch(setMenuTab(tab))
    })
)(MainComponent);
