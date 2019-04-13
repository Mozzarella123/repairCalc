export enum MenuTab {
    RoomEditor,
    TemplateEditor,
    Settings
}

export enum ActionTypes {
    CREATE_PROJECT = 'CREATE_PROJECT',
    SELECT_PROJECT = 'SELECT_PROJECT',
    SELECT_ROOM = 'SELECT_ROOM',
    SET_MENU_TAB = 'SET_MENU_TAB'
}

export interface SetMenuTabAction {
    type: ActionTypes.SET_MENU_TAB,
    tab: MenuTab
}

export interface CreateProjectAction {
    type : ActionTypes.CREATE_PROJECT,
    title: string
}



export type Action = SetMenuTabAction | CreateProjectAction; /* | AnotherAciton | AnotherAciton | ... */