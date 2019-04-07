import * as React from 'react';
import MenuTab from "../../models/MenuTab";
import { connect } from 'react-redux';
import AppState from '../../store/models/AppState';
import { SetMenuTabAction } from '../../actions/actionTypes';
import { setMenuTab } from '../../actions/actionCreators';

interface Props {
    currentTab: MenuTab;
    setTab: (tab: MenuTab) => any;
}

const RootLayoutBase = ({ currentTab , setTab}: Props) => {
    console.log(MenuTab)
    return (
        <div>
            <div>
                <p>rooms</p>
            </div>
        </div>
    )
}

export const RootLayout = connect(
    (state: AppState) => ({
        currentTab: state.currentTab
    }),
    dispatch => ({
        setTab: (tab: MenuTab) => dispatch(setMenuTab(tab))
    })
)(RootLayoutBase);
