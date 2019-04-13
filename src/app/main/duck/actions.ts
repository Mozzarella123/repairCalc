import { SetMenuTabAction, ActionTypes, MenuTab, CreateProjectAction } from "./types";

export const setMenuTab = (tab: MenuTab): SetMenuTabAction => ({
    type: ActionTypes.SET_MENU_TAB,
    tab
})

export const createProject = (title: string) : CreateProjectAction => ({
    type : ActionTypes.CREATE_PROJECT,
    title
})