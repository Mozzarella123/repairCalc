export enum ActionTypes {
    SET_MENU_TAB = 'SET_MENU_TAB'
}

export interface SetMenuTabAction {
    type: ActionTypes.SET_MENU_TAB,
    tab: MenuTab
}

export enum MenuTab {
    RoomEditor,
    TemplateEditor,
    Settings
}

export type Action = SetMenuTabAction; /* | AnotherAciton | AnotherAciton | ... */