import React from "react";
import classnames from 'classnames';
import { RoomListContainer } from "./rooms/RoomListContainer";
import { AddProjectFormContainer } from "./AddProjectFormContainer";

interface Props {
    project?: any
}

export const MainComponent = ({ project }: Props) => (
    (project) ?
        <RoomListContainer />
        :
        <AddProjectFormContainer />
)

export default MainComponent;