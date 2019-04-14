import React from "react";
import { Room } from "./rooms/duck/types";
import classnames from 'classnames';
import { RoomListContainer } from "./rooms/RoomListContainer";
import { AddProjectFormContainer } from "./AddProjectFormContainer";

interface Props {
    project?: any
}


export const MainComponent = ({ project }: Props) => (
        <div>
            {
                (project) ?
                    <RoomListContainer />
                    :
                    <AddProjectFormContainer />
            }
        </div>
)