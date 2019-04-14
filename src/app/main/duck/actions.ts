import {  ActionTypes,  CreateProjectAction } from "./types";

export const createProject = (title: string) : CreateProjectAction => ({
    type : ActionTypes.CREATE_PROJECT,
    title
})